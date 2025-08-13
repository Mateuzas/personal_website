import { motion } from "framer-motion";

function AchievementSection() {
  const text1 = "Why Work With Me";
  const text2 = "Let's build something great together";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const containerVariants2 = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 1.2,
        staggerChildren: 0.03,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0 },
    },
  };

  const boxContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 2.8,
        staggerChildren: 0.2,
      },
    },
  };

  const boxVariants = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="achievements"
      npr
      className="w-full min-h-[1300px] lg:min-h-[678px] relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden"
    >
      {/* Background Pattern/Depth Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/5 rounded-full blur-xl"></div>
      </div>

      <motion.div
        className="w-full flex justify-center top-[100px] absolute z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-white/80 text-lg font-semibold font-['Work_Sans'] uppercase tracking-widest drop-shadow-sm text-center px-4">
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
        className="w-full flex justify-center top-[147px] absolute z-10"
        variants={containerVariants2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-white text-3xl font-bold font-['Work_Sans'] leading-[40px] drop-shadow-md text-center px-4">
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
        className="w-full py-8 left-0 top-[240px] absolute flex flex-col lg:flex-row justify-center items-center gap-7 z-10"
        variants={boxContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="w-72 p-7 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-blue-900/30 border border-blue-200/20 flex flex-col justify-center items-center gap-3.5"
          variants={boxVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 25px 50px rgba(30, 58, 138, 0.4)",
          }}
          transition={{ duration: 0 }}
        >
          <div className="text-center justify-start text-black text-3xl font-bold font-['Work_Sans'] leading-[40px]">
            FREE TESTING
          </div>
          <div className="w-64 text-center justify-start text-gray-600 text-base font-medium font-['Work_Sans']">
            Website security testing at no cost - I gain experience while you
            get security insights
          </div>
        </motion.div>

        <motion.div
          className="w-72 p-7 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-blue-900/30 border border-blue-200/20 flex flex-col justify-center items-center gap-3.5"
          variants={boxVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 25px 50px rgba(30, 58, 138, 0.4)",
          }}
          transition={{ duration: 0 }}
        >
          <div className="text-center justify-start text-black text-3xl font-bold font-['Work_Sans'] leading-[40px]">
            MODERN
          </div>
          <div className="w-64 text-center justify-start text-gray-600 text-base font-medium font-['Work_Sans']">
            Using well known websites as inspiration to make the design simple
            and effective
          </div>
        </motion.div>

        <motion.div
          className="w-72 p-7 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-blue-900/30 border border-blue-200/20 flex flex-col justify-center items-center gap-3.5"
          variants={boxVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 25px 50px rgba(30, 58, 138, 0.4)",
          }}
          transition={{ duration: 0 }}
        >
          <div className="text-center justify-start text-black text-3xl font-bold font-['Work_Sans'] leading-[40px]">
            DEDICATED
          </div>
          <div className="w-64 text-center justify-start text-gray-600 text-base font-medium font-['Work_Sans']">
            Extra time and attention on every project because your success
            builds my reputation
          </div>
        </motion.div>

        <motion.div
          className="w-72 p-7 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-blue-900/30 border border-blue-200/20 flex flex-col justify-center items-center gap-3.5"
          variants={boxVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 25px 50px rgba(30, 58, 138, 0.4)",
          }}
          transition={{ duration: 0 }}
        >
          <div className="text-center justify-start text-black text-3xl font-bold font-['Work_Sans'] leading-[40px]">
            UP-TO-DATE
          </div>
          <div className="w-64 text-center justify-start text-gray-600 text-base font-medium font-['Work_Sans']">
            Always learning latest security techniques and development
            frameworks
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default AchievementSection;
