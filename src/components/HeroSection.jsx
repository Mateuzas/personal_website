import { motion } from "framer-motion";
import profileImg from "../assets/main_profile.jpg";
import cvFile from "../assets/CV.pdf";
import {
  variants,
  transitions,
  hoverEffects,
  tapEffects,
} from "../utils/animations";

function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Matas_Tijusas_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.section
      id="hero"
      className="w-full min-h-screen pt-16 sm:pt-20 px-2 md:px-20 flex items-center"
      variants={variants.fadeIn}
      initial="hidden"
      animate="visible"
      transition={transitions.slow}
    >
      {/* Mobile Layout */}
      <div className="md:hidden w-full flex justify-center items-center py-8 px-4">
        <div className="w-full max-w-sm px-2.5 py-7 bg-white flex flex-col justify-start items-center gap-3.5">
          <motion.img
            className="w-72 h-80 rounded-[300px] border border-zinc-100 object-cover object-[0%_50%]"
            src={profileImg}
            alt="Profile"
            variants={variants.slideRightScale}
            transition={transitions.smoothDelayed(0.5)}
          />
          <div className="w-full px-2.5 flex flex-col justify-start items-start gap-7">
            <div className="flex flex-col justify-start items-start gap-3.5">
              <motion.div
                className="w-full text-center text-neutral-800 text-xl font-semibold font-['Work_Sans']"
                variants={variants.fadeUp}
                transition={transitions.fastDelayed(0.5)}
              >
                Hi, I'm Matas Tijusas
              </motion.div>
              <motion.div
                className="w-full text-center text-neutral-800 text-3xl font-bold font-['Work_Sans']"
                variants={variants.fadeUp}
                transition={transitions.fastDelayed(0.6)}
              >
                DevOps &{" "}
                <span className="text-blue-600">Cybersecurity</span>{" "}
                Student
              </motion.div>
              <motion.div
                className="w-full text-center text-gray-600 text-sm font-normal font-['Work_Sans'] leading-relaxed"
                variants={variants.fadeUp}
                transition={transitions.fastDelayed(0.7)}
              >
                Building toward a DevSecOps career with hands-on experience
                across the full DevOps lifecycle — from containerised
                applications to GitOps-style deployment and observability on
                AWS.
              </motion.div>
            </div>
            <motion.div
              className="w-full flex flex-col gap-3 items-center"
              variants={variants.fadeUp}
              transition={transitions.fastDelayed(0.8)}
            >
              <motion.button
                className="w-full h-12 px-8 py-2 bg-blue-600 rounded-[50px] flex justify-center items-center gap-3.5"
                whileHover={hoverEffects.buttonPrimary}
                whileTap={tapEffects.scale}
                transition={transitions.spring}
                onClick={scrollToContact}
              >
                <span className="text-white text-lg font-semibold font-['Work_Sans']">
                  Get in Touch
                </span>
              </motion.button>
              <motion.button
                className="w-full h-12 px-8 py-2 bg-black rounded-[50px] outline outline-1 outline-offset-[-1px] outline-black flex justify-center items-center gap-3.5"
                whileHover={hoverEffects.buttonSecondary}
                whileTap={tapEffects.scale}
                transition={transitions.spring}
                onClick={handleDownloadCV}
              >
                <span className="text-white text-lg font-semibold font-['Work_Sans']">
                  Download CV
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex w-full justify-between items-center gap-8 lg:gap-16">
        <motion.div
          className="flex-1 flex flex-col justify-start items-start gap-6"
          variants={variants.fadeIn}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="text-neutral-800 text-xl lg:text-2xl font-semibold font-['Work_Sans']"
            variants={variants.fadeUp}
            transition={transitions.fastDelayed(0.3)}
          >
            Hi, I'm Matas Tijusas
          </motion.div>
          <motion.div
            className="text-neutral-800 text-4xl lg:text-5xl xl:text-6xl font-bold font-['Work_Sans'] leading-tight"
            variants={variants.fadeUp}
            transition={transitions.fastDelayed(0.4)}
          >
            DevOps &{" "}
            <span className="text-blue-600">Cybersecurity</span>{" "}
            Student
          </motion.div>
          <motion.div
            className="max-w-[540px] text-gray-600 text-base lg:text-lg font-normal font-['Work_Sans'] leading-relaxed"
            variants={variants.fadeUp}
            transition={transitions.fastDelayed(0.5)}
          >
            Building toward a DevSecOps career with hands-on experience across
            the full DevOps lifecycle — from containerised applications through
            GitOps-style multi-environment deployment and observability on AWS.
          </motion.div>
          <motion.div
            className="flex gap-4 mt-2"
            variants={variants.fadeUp}
            transition={transitions.fastDelayed(0.6)}
          >
            <motion.button
              className="h-12 px-8 py-2 bg-blue-600 rounded-[50px] flex justify-center items-center gap-3.5"
              whileHover={hoverEffects.buttonPrimary}
              whileTap={tapEffects.scale}
              transition={transitions.spring}
              onClick={scrollToContact}
            >
              <span className="text-white text-lg font-semibold font-['Work_Sans']">
                Get in Touch
              </span>
            </motion.button>
            <motion.button
              className="h-12 px-8 py-2 bg-black rounded-[50px] outline outline-1 outline-offset-[-1px] outline-black flex justify-center items-center gap-3.5"
              whileHover={hoverEffects.buttonSecondary}
              whileTap={tapEffects.scale}
              transition={transitions.spring}
              onClick={handleDownloadCV}
            >
              <span className="text-white text-lg font-semibold font-['Work_Sans']">
                Download CV
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.img
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-[553px] md:h-[560px] rounded-full border border-zinc-100 object-cover object-[0%_50%] flex-shrink-0"
          src={profileImg}
          alt="Profile"
          variants={variants.slideRightScale}
          transition={transitions.smoothDelayed(0.5)}
        />
      </div>
    </motion.section>
  );
}

export default HeroSection;