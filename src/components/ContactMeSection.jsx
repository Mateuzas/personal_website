import { motion } from 'framer-motion';

function ContactMeSection() {
  return (
    <motion.section 
      id="contact" 
      className="py-20 px-4 bg-white text-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      <motion.p 
        className="mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Feel free to reach out for collaborations or just a friendly hello!
      </motion.p>
      <motion.a 
        href="mailto:your@email.com" 
        className="text-blue-600 underline"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, color: "#1d4ed8" }}
        whileTap={{ scale: 0.95 }}
      >
        your@email.com
      </motion.a>
    </motion.section>
  );
}

export default ContactMeSection;
