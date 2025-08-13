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

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    const errors = validateForm();
    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      // Send email using Web3Forms
      const result = await sendWeb3Form(formData);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
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
      className="relative bg-blue-600 py-16 sm:py-20 md:py-24 lg:py-32 px-4 lg:px-0 overflow-hidden"
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
            Request Free Consultancy
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
                Ready to Collaborate?
              </div>
              <div className="text-zinc-800 text-sm font-normal font-['Work_Sans'] leading-relaxed mb-4">
                Let's discuss your cybersecurity needs and web development
                projects. I'm here to help secure and build your digital
                presence.
              </div>
            </div>

            <div className="self-stretch justify-start">
              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span className="text-zinc-800 text-sm font-normal font-['Work_Sans'] leading-relaxed">
                    Available for remote work worldwide
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span className="text-zinc-800 text-sm font-normal font-['Work_Sans'] leading-relaxed">
                    Quick response within 24 hours
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span className="text-zinc-800 text-sm font-normal font-['Work_Sans'] leading-relaxed">
                    Professional cybersecurity & web development services
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 px-3 py-2 rounded-lg">
                <div className="text-blue-600 text-xs font-semibold font-['Work_Sans'] uppercase tracking-wide mb-1">
                  Direct Contact
                </div>
                <div className="text-zinc-800 text-base font-bold font-['Work_Sans'] leading-tight">
                  matas.tijusas@outlook.com
                </div>
                <div className="text-zinc-600 text-xs font-normal font-['Work_Sans'] leading-tight mt-1">
                  Or you can contact me directly through email
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col justify-start items-start gap-3 w-full max-w-[515px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Name and Email Row */}
            <div className="flex flex-col sm:flex-row justify-start items-start gap-3 w-full">
              <div className="flex-1 w-full sm:w-64">
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name*"
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
                    className="text-red-600 text-xs mt-1 ml-1"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {validationErrors.name}
                  </motion.div>
                )}
              </div>
              <div className="flex-1 w-full sm:w-64">
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address*"
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
                    className="text-red-600 text-xs mt-1 ml-1"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {validationErrors.email}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Subject */}
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

            {/* Message */}
            <div className="w-full">
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project or security needs..."
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
                  className="text-red-600 text-xs mt-1 ml-1"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {validationErrors.message}
                </motion.div>
              )}
            </div>

            {/* Status Message */}
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

            {/* Submit Button */}
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
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactMeSection;
