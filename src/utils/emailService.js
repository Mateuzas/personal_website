// Email service using Web3Forms with input sanitization and branding
// Free service with your access key: d4e9b5fd-87e2-4ebc-8797-185bf4a5b03b

import { sanitizeFormData, validateFormData } from './sanitizer.js';

/**
 * Send email using Netlify Forms with input sanitization (if deploying on Netlify)
 * @param {Object} formData - The form data to sanitize and send
 * @returns {Promise} - Promise that resolves when form is submitted successfully
 */
export const sendNetlifyForm = async (formData) => {
  try {
    // Sanitize input data
    const sanitizedData = sanitizeFormData(formData);
    
    // Validate sanitized data
    const validation = validateFormData(sanitizedData);
    if (!validation.isValid) {
      throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
    }

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        name: sanitizedData.name,
        email: sanitizedData.email,
        subject: sanitizedData.subject || 'New Contact Form Submission',
        message: sanitizedData.message
      }).toString()
    });

    if (response.ok) {
      return { success: true };
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Netlify form submission failed:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Send email using Web3Forms with input sanitization and branding
 * @param {Object} formData - The form data containing name, email, subject, and message
 * @returns {Promise} - Promise that resolves when email is sent successfully
 */
export const sendWeb3Form = async (formData) => {
  try {
    console.log('Starting email send with data:', formData);
    
    // Sanitize input data
    const sanitizedData = sanitizeFormData(formData);
    console.log('Sanitized data:', sanitizedData);
    
    // Validate sanitized data
    const validation = validateFormData(sanitizedData);
    console.log('Validation result:', validation);
    
    if (!validation.isValid) {
      console.error('Validation failed:', validation.errors);
      throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
    }

    // Simple email content first (for debugging)
    const simpleMessage = `${sanitizedData.subject ? `Subject: ${sanitizedData.subject}\n\n` : ''}${sanitizedData.message}`;

    const payload = {
      access_key: 'd4e9b5fd-87e2-4ebc-8797-185bf4a5b03b',
      name: sanitizedData.name,
      email: sanitizedData.email,
      subject: sanitizedData.subject || 'New Contact Form Submission',
      message: simpleMessage,
      to: 'matas.tijusas@outlook.com',
      from: sanitizedData.email,
      replyto: sanitizedData.email,
      // Add recipient in multiple formats to ensure it's received correctly
      recipient: 'matas.tijusas@outlook.com',
      redirect: false // Prevent any redirect that might interfere
    };

    console.log('Sending payload to Web3Forms:', payload);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    console.log('Web3Forms response status:', response.status);
    const result = await response.json();
    console.log('Web3Forms response:', result);
    
    if (result.success) {
      return { success: true, result };
    } else {
      throw new Error(result.message || 'Form submission failed');
    }
  } catch (error) {
    console.error('Web3Forms submission failed:', error);
    return { success: false, error: error.message };
  }
};
