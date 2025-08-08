import { motion } from 'framer-motion';

function SoftwareSection() {
  return (
    <motion.section 
      id="software" 
      className="py-20 px-4 bg-white text-center"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Software
      </motion.h2>
      
      <motion.div 
        className="w-full h-44 px-4 md:px-20 py-12 bg-stone-50 flex justify-start items-center overflow-hidden gap-4 mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {[1, 2, 3, 4, 5].map((index) => (
          <motion.img 
            key={index}
            className="w-64 h-12 opacity-20 mix-blend-multiply" 
            src="https://placehold.co/267x50" 
            alt={`logo${index}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.2, x: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.6 + (index * 0.1),
              ease: "easeOut" 
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.1, 
              opacity: 0.4,
              transition: { duration: 0.2 }
            }}
          />
        ))}
      </motion.div>
      
      <motion.ul 
        className="list-disc list-inside"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 1.0 }}
          viewport={{ once: true }}
        >
          Software 1
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          viewport={{ once: true }}
        >
          Software 2
        </motion.li>
      </motion.ul>
    </motion.section>
  );
}

export default SoftwareSection