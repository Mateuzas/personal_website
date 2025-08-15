import { motion } from "framer-motion";
import profileImg from "../assets/IMG_3158.jpg";
import cvFile from "../assets/CV.pdf";
import {
  variants,
  transitions,
  hoverEffects,
  tapEffects,
} from "../utils/animations";

function HeroSection() {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Matas_Tijusas_CV.pdf"; // This will be the downloaded filename
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
      {/* Mobile Layout (hidden on md and up) */}
      <div className="md:hidden w-full flex justify-center items-center py-8 px-4">
        <div className="w-full max-w-sm px-2.5 py-7 bg-white flex flex-col justify-start items-center gap-3.5">
          <motion.img
            className="w-72 h-80 rounded-[300px] border border-zinc-100 object-cover object-[0%_50%]"
            src={profileImg}
            alt="Profile"
            variants={variants.slideRightScale}
            transition={transitions.smoothDelayed(0.5)}
            whileHover={hoverEffects.image}
          />
          <div className="w-full px-2.5 flex flex-col justify-start items-start gap-7">
            <div className="flex flex-col justify-start items-start gap-3.5">
              <motion.div
                className="w-full text-center text-neutral-800 text-xl font-semibold font-['Work_Sans']"
                variants={variants.fadeUp}
                transition={transitions.fastDelayed(0.5)}
              >
                Welcome to my Portfolio
              </motion.div>
              <motion.div
                className="w-full text-center"
                variants={variants.fadeUpLarge}
                transition={transitions.fastDelayed(0.7)}
              >
                <span className="text-neutral-800 text-4xl font-bold font-['Work_Sans'] leading-[45px]">
                  Hi I'm
                  <br />
                </span>
                <span className="text-blue-600 text-4xl font-bold font-['Work_Sans'] leading-[45px]">
                  Matas Tijusas
                  <br />
                </span>
                <span className="text-neutral-800 text-4xl font-bold font-['Work_Sans'] leading-[45px]">
                  IT Student
                </span>
              </motion.div>
              <motion.div
                className="w-full text-center text-neutral-800 text-lg font-normal font-['Work_Sans'] leading-tight"
                variants={variants.fadeUp}
                transition={transitions.fastDelayed(0.9)}
              >
                I'm studying cybersecurity and seeking opportunities to help
                companies test and secure their web applications.
              </motion.div>
            </div>
            <div className="w-full flex flex-col justify-start items-center gap-3.5">
              <motion.div
                className="w-full h-12"
                variants={variants.fadeUpLarge}
                transition={transitions.fastDelayed(1.1)}
              >
                <motion.button
                  className="w-full h-12 px-8 py-4 bg-blue-600 rounded-[50px] flex justify-center items-center gap-2.5"
                  whileHover={hoverEffects.buttonPrimary}
                  whileTap={tapEffects.scale}
                  transition={transitions.spring}
                  onClick={scrollToContact}
                >
                  <span className="text-white text-xl font-semibold font-['Work_Sans']">
                    Let's talk!
                  </span>
                </motion.button>
              </motion.div>
              <motion.div
                className="w-full h-12"
                variants={variants.fadeUpLarge}
                transition={transitions.fastDelayed(1.3)}
              >
                <motion.button
                  className="w-full h-12 px-8 py-4 bg-black rounded-[50px] outline outline-1 outline-offset-[-1px] outline-black flex justify-center items-center gap-3.5"
                  whileHover={hoverEffects.buttonSecondary}
                  whileTap={tapEffects.scale}
                  transition={transitions.spring}
                  onClick={handleDownloadCV}
                >
                  <span className="text-white text-xl font-semibold font-['Work_Sans']">
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
                      d="M4 16v2a2 2 0 002 2h12a2 2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (hidden on mobile, visible on md and up) */}
      <div className="hidden md:flex justify-center items-center gap-8 md:gap-24 w-full">
        <motion.div
          className="w-full md:w-[624px] flex flex-col justify-start items-start gap-6 md:gap-12"
          variants={variants.slideFromLeft}
          transition={transitions.smoothDelayed(0.3)}
        >
          <div className="flex flex-col justify-start items-start gap-2 md:gap-2.5">
            <motion.div
              className="self-stretch text-neutral-800 text-lg sm:text-xl md:text-2xl font-semibold font-['Work_Sans']"
              variants={variants.fadeUp}
              transition={transitions.fastDelayed(0.5)}
            >
              Welcome to my Portfolio
            </motion.div>
            <motion.div
              className="self-stretch"
              variants={variants.fadeUpLarge}
              transition={transitions.fastDelayed(0.7)}
            >
              <span className="text-neutral-800 text-2xl sm:text-3xl md:text-5xl font-bold font-['Work_Sans'] leading-tight md:leading-[75px]">
                Hi, my name is
                <br />
              </span>
              <span className="text-blue-600 text-3xl sm:text-4xl md:text-6xl font-bold font-['Work_Sans'] leading-tight md:leading-[75px]">
                Matas Tijusas
                <br />
              </span>
              <span className="text-neutral-800 text-2xl sm:text-3xl md:text-5xl font-bold font-['Work_Sans'] leading-tight md:leading-[75px]">
                IT Student
              </span>
            </motion.div>
            <motion.div
              className="w-full text-neutral-800 text-base sm:text-lg md:text-2xl font-normal font-['Work_Sans'] leading-6 sm:leading-7 md:leading-9"
              variants={variants.fadeUp}
              transition={transitions.fastDelayed(0.9)}
            >
              I'm studying cybersecurity and seeking opportunities to help
              companies test and secure their web applications.
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            variants={variants.fadeUpLarge}
            transition={transitions.fastDelayed(1.1)}
          >
            <motion.button
              className="w-full sm:w-40 h-11 sm:h-12 px-6 sm:px-8 py-2 sm:py-8 bg-blue-600 rounded-[50px] flex justify-center items-center gap-2.5"
              whileHover={hoverEffects.buttonPrimary}
              whileTap={tapEffects.scale}
              transition={transitions.spring}
              onClick={scrollToContact}
            >
              <span className="text-white text-lg sm:text-xl font-semibold font-['Work_Sans'] whitespace-nowrap">
                Let's talk!
              </span>
            </motion.button>
            <motion.button
              className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 py-2 sm:py-8 bg-black rounded-[50px] outline outline-1 outline-offset-[-1px] outline-black flex justify-center items-center gap-3.5"
              whileHover={hoverEffects.buttonSecondary}
              whileTap={tapEffects.scale}
              transition={transitions.spring}
              onClick={handleDownloadCV}
            >
              <span className="text-white text-lg sm:text-xl font-semibold font-['Work_Sans']">
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
          whileHover={hoverEffects.image}
        />
      </div>
    </motion.section>
  );
}

export default HeroSection;
