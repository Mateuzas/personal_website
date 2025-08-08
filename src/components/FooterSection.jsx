import { motion } from 'framer-motion';

function FooterSection() {
  return (
    <motion.footer 
      className="py-8 bg-gray-900 text-center text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}

export default FooterSection;
