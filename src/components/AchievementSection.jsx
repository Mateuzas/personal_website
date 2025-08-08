import { motion } from 'framer-motion';

function AchievementSection() {
  const text1 = "Our Milestones";
  const text2 = "What sets our studio apart for your projects?";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const containerVariants2 = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 1.2,
        staggerChildren: 0.03
      }
    }
  };

  const charVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0 }
    }
  };

  const boxContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 2.8,
        staggerChildren: 0.2
      }
    }
  };

  const boxVariants = {
    hidden: { 
      opacity: 0,
      x: 200
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="achievements" 
      className="w-full h-[678px] relative bg-blue-600"
    >
      
      <motion.div 
        className="w-full flex justify-center top-[100px] absolute"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-black text-xl font-semibold font-['Work_Sans'] uppercase tracking-widest">
          {text1.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={charVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="w-full flex justify-center top-[147px] absolute"
        variants={containerVariants2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-white text-5xl font-bold font-['Work_Sans'] leading-[50px]">
          {text2.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={charVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="w-full py-12 left-0 top-[307px] absolute inline-flex justify-center items-start gap-7"
        variants={boxContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="w-72 p-7 bg-white rounded-3xl shadow-lg shadow-blue-900/20 border-4 border-white inline-flex flex-col justify-center items-center gap-3.5"
          variants={boxVariants}
          whileHover={{ scale: 1.05, y: -10, boxShadow: "0 20px 40px rgba(30, 58, 138, 0.3)" }}
          transition={{ duration: 0 }}
        >
          <div className="text-center justify-start text-black text-5xl font-bold font-['Work_Sans'] leading-[50px]">8300+</div>
          <div className="w-72 text-center justify-start text-black text-xl font-semibold font-['Work_Sans']">Figma ipsum component variant main layer. Hand.</div>
        </motion.div>
        
        <motion.div 
          className="w-72 p-7 bg-white rounded-3xl shadow-lg shadow-blue-900/20 border-4 border-white inline-flex flex-col justify-center items-center gap-3.5"
          variants={boxVariants}
          whileHover={{ scale: 1.05, y: -10, boxShadow: "0 20px 40px rgba(30, 58, 138, 0.3)" }}
          transition={{ duration: 0 }}
        >
          <div className="text-center justify-start text-black text-5xl font-bold font-['Work_Sans'] leading-[50px]">100%</div>
          <div className="w-72 text-center justify-start text-black text-xl font-semibold font-['Work_Sans']">Figma ipsum component variant main layer. Union.</div>
        </motion.div>
        
        <motion.div 
          className="w-72 p-7 bg-white rounded-3xl shadow-lg shadow-blue-900/20 border-4 border-white inline-flex flex-col justify-center items-center gap-3.5"
          variants={boxVariants}
          whileHover={{ scale: 1.05, y: -10, boxShadow: "0 20px 40px rgba(30, 58, 138, 0.3)" }}
          transition={{ duration: 0 }}
        >
          <div className="text-center justify-start text-black text-5xl font-bold font-['Work_Sans'] leading-[50px]">3.5K</div>
          <div className="w-72 text-center justify-start text-black text-xl font-semibold font-['Work_Sans']">Figma ipsum component variant main layer.</div>
        </motion.div>
        
        <motion.div 
          className="w-72 p-7 bg-white rounded-3xl shadow-lg shadow-blue-900/20 border-4 border-white inline-flex flex-col justify-center items-center gap-3.5"
          variants={boxVariants}
          whileHover={{ scale: 1.05, y: -10, boxShadow: "0 20px 40px rgba(30, 58, 138, 0.3)" }}
          transition={{ duration: 0 }}
        >
          <div className="text-center justify-start text-black text-5xl font-bold font-['Work_Sans'] leading-[50px]">240+</div>
          <div className="w-72 text-center justify-start text-black text-xl font-semibold font-['Work_Sans']">Figma ipsum component variant main layer.</div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default AchievementSection;
