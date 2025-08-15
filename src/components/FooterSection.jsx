import { motion } from "framer-motion";
import logo from "../assets/favicon_dark.png";

function FooterSection() {
  return (
    <motion.footer
      className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-6 bg-black flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-7 overflow-hidden m-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ marginBottom: 0, paddingBottom: "1.5rem" }}
    >
      <div className="w-full max-w-[951px] flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-7">
        {/* Logo and Brand */}
        <motion.div
          className="flex justify-start items-center gap-3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={logo}
            alt="Matas Tijušas Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
          <div className="text-white text-lg sm:text-xl font-black font-['Zen_Kaku_Gothic_Antique'] leading-normal"></div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="flex-1 text-gray-400 text-xs sm:text-sm font-normal font-['Work_Sans'] leading-none text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          © Copyright 2025. All Rights Reserved.
        </motion.div>
      </div>

      {/* Social Media Section */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-white text-xs sm:text-sm font-semibold font-['Work_Sans'] leading-none">
          FOLLOW ME:
        </div>

        <div className="flex justify-center items-center gap-3">
          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/mtijusas/#" // Replace with your Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 group aspect-square"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-black transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://lt.linkedin.com/in/matas-tijušas-b75b94311" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 group aspect-square"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-black transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>

          {/* Fiverr */}
          <motion.a
            href="https://www.fiverr.com/s/jj1dWQ9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 group aspect-square"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-[10px] sm:text-xs text-white group-hover:text-black transition-colors duration-300 font-medium">
              fiverr.
            </span>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:matas.tijusas@outlook.com"
            className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 group aspect-square"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-black transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </motion.footer>
  );
}

export default FooterSection;
