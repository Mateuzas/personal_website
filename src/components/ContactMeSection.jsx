import { motion } from "framer-motion";
import { useState } from "react";
import { sendWeb3Form } from "../utils/emailService";

function ContactMeSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [validationErrors, setValidationErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    const errors = validateForm();
    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const result = await sendWeb3Form(formData);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setValidationErrors({});
        setHasSubmitted(false);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again or contact me directly at matas.tijusas@outlook.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative bg-blue-600 py-16 sm:py-20 md:py-24 lg:py-28 px-4 lg:px-0 overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Decorative Circles */}
      <div className="absolute w-[786px] h-[786px] right-[-200px] lg:right-[-100px] top-[2px] bg-blue-600 rounded-full border-[80px] border-white/5 hidden lg:block pointer-events-none" />
      <div className="absolute w-56 h-56 left-[-57px] bottom-[100px] bg-blue-600 rounded-full border-[40px] border-white/5 hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-white/80 text-lg font-semibold font-['Work_Sans'] uppercase tracking-widest mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Contact Me
          </motion.div>
          <motion.h2
            className="text-white text-2xl lg:text-4xl font-bold font-['Work_Sans'] leading-[40px] max-w-[684px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:px-8">
          {/* Contact Info Card */}
          <motion.div
            className="w-full max-w-[514px] h-auto p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="justify-start">
              <div className="text-blue-600 text-base font-bold font-['Work_Sans'] leading-tight mb-2">
                Open to Opportunities
              </div>
              <div className="text-gray-600 text-sm font-normal font-['Work_Sans'] leading-relaxed">
                I'm looking for DevOps internships and entry-level positions.
                Whether you have an opportunity, a question, or just want to
                connect — I'd love to hear from you.
              </div>
            </div>

            {/* Contact Details */}
            <div className="w-full flex flex-col gap-4">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-medium font-['Work_Sans']">
                    Email
                  </div>
                  <a
                    href="mailto:matas.tijusas@outlook.com"
                    className="text-neutral-800 text-sm font-semibold font-['Work_Sans'] hover:text-blue-600 transition-colors"
                  >
                    matas.tijusas@outlook.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-medium font-['Work_Sans']">
                    Phone
                  </div>
                  <a
                    href="tel:+37062326156"
                    className="text-neutral-800 text-sm font-semibold font-['Work_Sans'] hover:text-blue-600 transition-colors"
                  >
                    +370 623 26156
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-medium font-['Work_Sans']">
                    LinkedIn
                  </div>
                  <a
                    href="https://linkedin.com/in/matas-tijusas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-800 text-sm font-semibold font-['Work_Sans'] hover:text-blue-600 transition-colors"
                  >
                    linkedin.com/in/matas-tijusas
                  </a>
                </div>
              </div>

              {/* GitLab */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-medium font-['Work_Sans']">
                    GitLab
                  </div>
                  <a
                    href="https://gitlab.com/MatasTij"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-800 text-sm font-semibold font-['Work_Sans'] hover:text-blue-600 transition-colors"
                  >
                    gitlab.com/MatasTij
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-[514px] flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className={`w-full p-3 rounded-[5px] text-sm font-normal font-['Work_Sans'] leading-tight placeholder-stone-500 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                    hasSubmitted && validationErrors.name
                      ? "bg-red-50 text-red-800 border-2 border-red-300 focus:ring-red-300"
                      : "bg-white text-zinc-800 focus:ring-white/50"
                  }`}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                {hasSubmitted && validationErrors.name && (
                  <motion.div
                    className="text-red-200 text-xs mt-1 ml-1"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {validationErrors.name}
                  </motion.div>
                )}
              </div>
              <div className="flex-1">
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className={`w-full p-3 rounded-[5px] text-sm font-normal font-['Work_Sans'] leading-tight placeholder-stone-500 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                    hasSubmitted && validationErrors.email
                      ? "bg-red-50 text-red-800 border-2 border-red-300 focus:ring-red-300"
                      : "bg-white text-zinc-800 focus:ring-white/50"
                  }`}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                {hasSubmitted && validationErrors.email && (
                  <motion.div
                    className="text-red-200 text-xs mt-1 ml-1"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {validationErrors.email}
                  </motion.div>
                )}
              </div>
            </div>

            <motion.input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject (Optional)"
              className="w-full p-3 bg-white rounded-[5px] text-zinc-800 text-sm font-normal font-['Work_Sans'] leading-tight placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            />

            <div className="w-full">
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message..."
                rows={4}
                className={`w-full p-3 rounded-[5px] text-sm font-normal font-['Work_Sans'] leading-tight placeholder-stone-500 resize-none focus:outline-none focus:ring-2 transition-colors duration-200 ${
                  hasSubmitted && validationErrors.message
                    ? "bg-red-50 text-red-800 border-2 border-red-300 focus:ring-red-300"
                    : "bg-white text-zinc-800 focus:ring-white/50"
                }`}
                required
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
              {hasSubmitted && validationErrors.message && (
                <motion.div
                  className="text-red-200 text-xs mt-1 ml-1"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {validationErrors.message}
                </motion.div>
              )}
            </div>

            {submitStatus.message && (
              <motion.div
                className={`w-full p-4 rounded-lg text-sm font-medium ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full lg:w-auto px-8 lg:px-6 py-4 lg:py-3 rounded-[50px] text-lg lg:text-base font-bold font-['Work_Sans'] leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors duration-200 border ${
                isSubmitting
                  ? "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
                  : "bg-white text-blue-600 border-blue-600 hover:bg-blue-500 hover:text-white"
              }`}
              whileHover={!isSubmitting ? { scale: 1.05 } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactMeSection;