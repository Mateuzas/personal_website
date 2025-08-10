/**
 * Input sanitization utility to prevent common injection attacks
 * Protects against XSS, SQL injection, HTML injection, and script injection
 */

/**
 * Sanitize text input by removing/escaping dangerous characters
 * @param {string} input - The input string to sanitize
 * @param {Object} options - Sanitization options
 * @returns {string} - Sanitized string
 */
export const sanitizeText = (input, options = {}) => {
  if (!input || typeof input !== 'string') {
    return '';
  }

  const {
    maxLength = 1000,
    allowNewlines = true,
    stripTags = true
  } = options;

  let sanitized = input;

  // Trim and limit length
  sanitized = sanitized.trim().substring(0, maxLength);

  // Remove null bytes (common in injection attempts)
  sanitized = sanitized.replace(/\0/g, '');

  // Remove control characters except newlines and tabs
  if (allowNewlines) {
    sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  } else {
    sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '');
  }

  // Strip HTML tags if requested
  if (stripTags) {
    sanitized = sanitized.replace(/<[^>]*>/g, '');
  }

  // Escape HTML entities
  sanitized = sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');

  // Remove common SQL injection patterns (more targeted)
  const sqlPatterns = [
    /(\b(drop|create|alter|exec|execute|union)\b)/gi,
    /(--|\/\*|\*\/)/g,
    /(\bor\b|\band\b)(\s+)?(1=1|'=')/gi
  ];

  sqlPatterns.forEach(pattern => {
    sanitized = sanitized.replace(pattern, '');
  });

  // Remove JavaScript event handlers and protocols
  const xssPatterns = [
    /on\w+\s*=/gi,
    /javascript:/gi,
    /vbscript:/gi,
    /data:/gi,
    /expression\s*\(/gi,
    /<script[^>]*>.*?<\/script>/gi,
    /<iframe[^>]*>.*?<\/iframe>/gi,
    /<object[^>]*>.*?<\/object>/gi,
    /<embed[^>]*>/gi
  ];

  xssPatterns.forEach(pattern => {
    sanitized = sanitized.replace(pattern, '');
  });

  return sanitized;
};

/**
 * Sanitize email address
 * @param {string} email - Email address to sanitize
 * @returns {string} - Sanitized email address
 */
export const sanitizeEmail = (email) => {
  if (!email || typeof email !== 'string') {
    return '';
  }

  // Basic email sanitization
  let sanitized = email.trim().toLowerCase().substring(0, 254); // RFC 5321 limit

  // Remove dangerous characters but keep email-valid ones
  sanitized = sanitized.replace(/[^a-z0-9@._+-]/g, '');

  // Basic email format validation
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailRegex.test(sanitized)) {
    return '';
  }

  return sanitized;
};

/**
 * Sanitize form data object
 * @param {Object} formData - Form data to sanitize
 * @returns {Object} - Sanitized form data
 */
export const sanitizeFormData = (formData) => {
  if (!formData || typeof formData !== 'object') {
    return {};
  }

  console.log('Original form data:', formData);

  const result = {
    name: sanitizeText(formData.name, { maxLength: 100, allowNewlines: false }),
    email: sanitizeEmail(formData.email),
    subject: sanitizeText(formData.subject, { maxLength: 200, allowNewlines: false }),
    message: sanitizeText(formData.message, { maxLength: 5000, allowNewlines: true })
  };

  console.log('Sanitized form data:', result);
  console.log('Message length after sanitization:', result.message.length);

  return result;
};

/**
 * Validate sanitized form data
 * @param {Object} sanitizedData - Already sanitized form data
 * @returns {Object} - Validation result with isValid and errors
 */
export const validateFormData = (sanitizedData) => {
  const errors = [];

  if (!sanitizedData.name || sanitizedData.name.length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!sanitizedData.email) {
    errors.push('Valid email address is required');
  }

  if (!sanitizedData.message || sanitizedData.message.length < 5) {
    errors.push('Message must be at least 5 characters long');
  }

  // Check for suspicious patterns that might indicate injection attempts (more targeted)
  const suspiciousPatterns = [
    /<script[^>]*>/i,
    /javascript:/i,
    /\b(eval|exec)\s*\(/i,
    /\b(drop|delete)\s+(table|database)/i
  ];

  const allText = `${sanitizedData.name} ${sanitizedData.subject} ${sanitizedData.message}`;
  const hasSuspiciousContent = suspiciousPatterns.some(pattern => pattern.test(allText));

  if (hasSuspiciousContent) {
    errors.push('Message contains suspicious content and cannot be processed');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};
