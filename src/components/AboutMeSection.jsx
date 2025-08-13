import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import skillsImage from "../assets/IMG_4987.jpg";
import certificationImage from "../assets/IMG_3265.png";
import educationImage from "../assets/images.jpg";
import moreaboutmeImage from "../assets/IMG_4922.jpg";

const sections = [
  {
    key: "skills",
    label: "Main Skills",
    image: skillsImage,
    content: (
      <>
        <div className="max-w-[620px] text-left">
          <span className="text-neutral-800 text-base lg:text-lg font-normal font-['Work_Sans'] leading-normal">
            Hello there! I'm <span className="font-bold">Matas Tijusas</span>. I
            specialize in cybersecurity and web application testing, and I'm
            deeply passionate and committed to learning and gaining experience
            in this craft.
          </span>
        </div>
        <div className="w-full max-w-[620px] space-y-4 mt-4">
          {/* Skill 1 */}
          <div>
            <div className="text-neutral-800 text-base lg:text-lg font-semibold font-['Work_Sans'] mb-1">
              Penetration Testing & Security Assessment
            </div>
            <div className="text-gray-600 text-sm font-['Work_Sans'] mb-2">
              Learning through hands-on labs and cybersecurity platforms like
              TryHackMe.
            </div>
            <div className="w-full h-4 bg-zinc-100 rounded-[10px] relative overflow-hidden">
              <motion.div
                className="h-full bg-blue-600 rounded-[10px]"
                initial={{ width: 0 }}
                animate={{ width: "35%" }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </div>
          </div>
          {/* Skill 2 */}
          <div>
            <div className="text-neutral-800 text-base lg:text-lg font-semibold font-['Work_Sans'] mb-1">
              Web Application Security Testing
            </div>
            <div className="text-gray-600 text-sm font-['Work_Sans'] mb-2">
              Practicing with web security challenges and studying OWASP Top 10.
            </div>
            <div className="w-full h-4 bg-zinc-100 rounded-[10px] relative overflow-hidden">
              <motion.div
                className="h-full bg-blue-600 rounded-[10px]"
                initial={{ width: 0 }}
                animate={{ width: "40%" }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>
          </div>
          {/* Skill 3 */}
          <div>
            <div className="text-neutral-800 text-base lg:text-lg font-semibold font-['Work_Sans'] mb-1">
              Web Design & Development
            </div>
            <div className="text-gray-600 text-sm font-['Work_Sans'] mb-2">
              Creating modern, responsive websites using React, Vite, Tailwind
              CSS and Figma for design.
            </div>
            <div className="w-full h-4 bg-zinc-100 rounded-[10px] relative overflow-hidden">
              <motion.div
                className="h-full bg-blue-600 rounded-[10px]"
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ duration: 1, delay: 0.9 }}
              />
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    key: "certifications",
    label: "Certifications",
    image: certificationImage,
    content: (
      <>
        <div className="max-w-[620px] text-left">
          <span className="text-neutral-800 text-base lg:text-lg font-normal font-['Work_Sans'] leading-normal">
            I am currently preparing for the CompTIA Security+ certification and
            plan to pursue additional industry-standard cybersecurity
            certifications to further deepen my expertise and advance my career
            in the field.
          </span>
        </div>
        <div className="w-full max-w-[620px] space-y-3 mt-4">
          {/* Certification 1 */}
          <div>
            <div className="text-neutral-800 text-base lg:text-lg font-semibold font-['Work_Sans'] mb-1">
              CompTIA Security+ (Expected 2025)
            </div>
            <div className="text-gray-600 text-sm font-['Work_Sans']">
              Fundamental cybersecurity certification covering network security
              and compliance.
            </div>
          </div>
          {/* Certification 2 */}
          <div>
            <div className="text-neutral-800 text-base lg:text-lg font-semibold font-['Work_Sans'] mb-1">
              Certified Ethical Hacker (CEH) - In Progress
            </div>
            <div className="text-gray-600 text-sm font-['Work_Sans']">
              Advanced certification focused on ethical hacking and penetration
              testing.
            </div>
          </div>
          {/* Certification 3 */}
          <div>
            <div className="text-neutral-800 text-base lg:text-lg font-semibold font-['Work_Sans'] mb-1">
              OSCP (Offensive Security Certified Professional) - Planned
            </div>
            <div className="text-gray-600 text-sm font-['Work_Sans']">
              Hands-on penetration testing certification requiring practical
              exploitation.
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    key: "education",
    label: "Education",
    image: educationImage,
    content: (
      <>
        <div className="max-w-[620px] text-left">
          <span className="text-neutral-800 text-base lg:text-lg font-normal font-['Work_Sans'] leading-normal">
            I am currently pursuing my IT Business degree at the University of
            Twente, graduating in 2026. After that, I plan to pursue a Master's
            in Cybersecurity at a Dutch university. Meanwhile, I'm actively
            learning cybersecurity through hands-on practice and ethical
            testing.
          </span>
        </div>
        <div className="w-full max-w-[620px] space-y-3 mt-4">
          {/* Education 1 */}
          <div>
            <div className="text-neutral-800 text-base lg:text-lg font-semibold font-['Work_Sans'] mb-1">
              Bachelor of IT Business - University of Twente (2026)
            </div>
            <div className="text-gray-600 text-sm font-['Work_Sans']">
              Currently studying IT Business with focus on technology management
              and digital transformation.
            </div>
          </div>
          {/* Education 2 */}
          <div>
            <div className="text-neutral-800 text-base lg:text-lg font-semibold font-['Work_Sans'] mb-1">
              Master's in Cybersecurity - Netherlands (Planned 2026+)
            </div>
            <div className="text-gray-600 text-sm font-['Work_Sans']">
              Planning to pursue advanced degree in cybersecurity at a Dutch
              university.
            </div>
          </div>
          {/* Education 3 */}
          <div>
            <div className="text-neutral-800 text-base lg:text-lg font-semibold font-['Work_Sans'] mb-1">
              Self-Directed Cybersecurity Learning
            </div>
            <div className="text-gray-600 text-sm font-['Work_Sans']">
              Actively practicing through cybersecurity labs and ethical
              penetration testing platforms.
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    key: "more",
    label: "More about me",
    image: moreaboutmeImage,
    content: (
      <>
        <div className="max-w-[620px] text-left w-full">
          <span className="text-neutral-800 text-base lg:text-lg font-normal font-['Work_Sans'] leading-normal">
            I'm a 20-year-old passionate about gaining valuable experience while
            living abroad. I have a deep love for traveling and discovering new
            cultures, which naturally led to my interest in learning new
            languages. I speak four languages - Lithuanian (my mother tongue),
            Russian, English, and Spanish. I enjoy the challenge of reading
            books in different languages as it helps me improve my language
            skills while exploring diverse perspectives and stories.
          </span>
        </div>
        <div className="w-full max-w-[620px] space-y-3 mt-4 lg:w-full">
          <div>
            <div className="text-neutral-800 text-base lg:text-lg font-semibold font-['Work_Sans'] mb-1">
              Professional Football Background
            </div>
            <div className="text-gray-600 text-sm font-['Work_Sans']">
              Former professional football player with experience in discipline,
              teamwork, and perseverance.
            </div>
          </div>
          <div>
            <div className="text-neutral-800 text-base lg:text-lg font-semibold font-['Work_Sans'] mb-1">
              International Experience & Growth
            </div>
            <div className="text-gray-600 text-sm font-['Work_Sans']">
              At 20, I'm focused on gaining meaningful experience while living
              abroad and embracing new challenges.
            </div>
          </div>
        </div>
      </>
    ),
  },
];

function AboutMeSection() {
  const [activeSection, setActiveSection] = useState("skills");
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const current = sections.find((s) => s.key === activeSection);

  useEffect(() => {
    setHasAnimatedIn(true);
  }, []);

  const handleSectionChange = (sectionKey) => {
    setActiveSection(sectionKey);

    // Scroll to the top of the about section for better view
    setTimeout(() => {
      const aboutElement = document.getElementById("about");
      if (aboutElement) {
        // Get the exact position of the about section
        const rect = aboutElement.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = scrollTop + rect.top - 80; // 80px offset from top to show more area

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <section id="about" className="py-12 px-4 lg:px-20 bg-gray-50">
      {/* Container for the two-column layout */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Left side - Content (Animated) */}
        <motion.div
          key={current.key + "-content"}
          initial={hasAnimatedIn ? { opacity: 0, x: -40 } : false}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-start items-start gap-4 lg:gap-6 text-center lg:text-left lg:pr-8"
        >
          {/* Section title above the content - Desktop only */}
          <div className="mb-6 text-center lg:text-left hidden lg:block">
            <h2 className="text-2xl lg:text-3xl font-bold font-['Work_Sans'] text-blue-600 mb-2">
              {current.label}
            </h2>
            {/* Subtitle based on section */}
            {(() => {
              if (current.key === "skills") {
                return (
                  <div className="text-3xl lg:text-4xl font-semibold font-['Work_Sans'] text-neutral-800">
                    Gaining experience in Cybersecurity
                  </div>
                );
              } else if (current.key === "certifications") {
                return (
                  <div className="text-3xl lg:text-4xl font-semibold font-['Work_Sans'] text-neutral-800">
                    Industry Recognized Certifications
                  </div>
                );
              } else if (current.key === "education") {
                return (
                  <div className="text-3xl lg:text-4xl font-semibold font-['Work_Sans'] text-neutral-800">
                    Current Studies & Future Plans
                  </div>
                );
              } else if (current.key === "more") {
                return (
                  <div className="text-3xl lg:text-4xl font-semibold font-['Work_Sans'] text-neutral-800">
                    Beyond Cybersecurity Personal Interests
                  </div>
                );
              }
              return null;
            })()}
          </div>

          {/* Section Content */}
          {current.content}

          {/* Navigation: Dots for mobile, buttons for desktop */}
          {/* Mobile: Dots with arrows */}
          <div
            className="flex items-center gap-4 mt-6 justify-center w-full lg:hidden"
            data-buttons-container
          >
            {/* Left Arrow */}
            <button
              aria-label="Previous section"
              onClick={() => {
                const idx = sections.findIndex((s) => s.key === activeSection);
                if (idx > 0) handleSectionChange(sections[idx - 1].key);
              }}
              disabled={
                sections.findIndex((s) => s.key === activeSection) === 0
              }
              className={`p-2 rounded-full transition-all duration-200 ${
                sections.findIndex((s) => s.key === activeSection) === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-600 hover:text-blue-700 hover:bg-blue-50 cursor-pointer"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Dots */}
            {sections.map((section) => (
              <motion.button
                key={section.key}
                onClick={() => handleSectionChange(section.key)}
                className="focus:outline-none"
                initial={false}
                animate={
                  activeSection === section.key
                    ? { width: 140, height: 48, borderRadius: 32 }
                    : { width: 20, height: 20, borderRadius: 9999 }
                }
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  height: activeSection === section.key ? 48 : 20,
                  backgroundColor:
                    activeSection === section.key ? "#2563eb" : "#e5e7eb",
                  color: activeSection === section.key ? "white" : "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontFamily: "Work Sans",
                  fontSize: activeSection === section.key ? 22 : 14,
                  overflow: "hidden",
                  transition:
                    "background 0.2s, height 0.2s, width 0.2s, font-size 0.2s",
                  border:
                    activeSection === section.key
                      ? "2px solid #2563eb"
                      : "2px solid #e5e7eb",
                  boxShadow:
                    activeSection === section.key
                      ? "0 2px 8px #2563eb22"
                      : "none",
                  minWidth: 20,
                  maxWidth: 180,
                  padding: 0,
                  margin: 0,
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    opacity: activeSection === section.key ? 1 : 0,
                    transition: "opacity 0.2s",
                    whiteSpace: "nowrap",
                    marginLeft: 12,
                    marginRight: 12,
                    color: "white",
                    fontSize: 20,
                    fontWeight: 700,
                    fontFamily: "Work Sans",
                    display: activeSection === section.key ? "inline" : "none",
                  }}
                >
                  {section.label}
                </span>
              </motion.button>
            ))}

            {/* Right Arrow */}
            <button
              aria-label="Next section"
              onClick={() => {
                const idx = sections.findIndex((s) => s.key === activeSection);
                if (idx < sections.length - 1)
                  handleSectionChange(sections[idx + 1].key);
              }}
              disabled={
                sections.findIndex((s) => s.key === activeSection) ===
                sections.length - 1
              }
              className={`p-2 rounded-full transition-all duration-200 ${
                sections.findIndex((s) => s.key === activeSection) ===
                sections.length - 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-600 hover:text-blue-700 hover:bg-blue-50 cursor-pointer"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
          {/* Desktop: Buttons */}
          <div
            className="hidden lg:flex flex-wrap gap-3 mt-6 justify-start"
            data-buttons-container
          >
            {sections.map((section) => (
              <motion.button
                key={section.key}
                className={`px-4 py-2 rounded-[50px] text-base font-semibold font-['Work_Sans'] whitespace-nowrap ${
                  activeSection === section.key
                    ? "bg-blue-600 text-white"
                    : "bg-white outline outline-1 outline-blue-600 text-blue-600"
                }`}
                whileHover={{
                  scale: 1.05,
                  backgroundColor:
                    activeSection === section.key ? "#1d4ed8" : "#eff6ff",
                  color: activeSection === section.key ? "#ffffff" : "#2563eb",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => handleSectionChange(section.key)}
                style={{
                  backgroundColor:
                    activeSection === section.key ? "#2563eb" : "white",
                  color: activeSection === section.key ? "white" : "#2563eb",
                }}
              >
                {section.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Right side - Image (Animated) with section title above */}
        <motion.div
          key={current.key + "-image"}
          initial={hasAnimatedIn ? { opacity: 0, x: 40 } : false}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex-shrink-0 flex flex-col items-center"
        >
          {/* Section title above the image - Mobile only */}
          <div className="mb-6 text-center lg:hidden">
            <h2 className="text-2xl font-bold font-['Work_Sans'] text-blue-600 mb-2">
              {current.label}
            </h2>
            {/* Subtitle based on section */}
            {(() => {
              if (current.key === "skills") {
                return (
                  <div className="text-3xl font-semibold font-['Work_Sans'] text-neutral-800">
                    Gaining experience in Cybersecurity
                  </div>
                );
              } else if (current.key === "certifications") {
                return (
                  <div className="text-3xl font-semibold font-['Work_Sans'] text-neutral-800">
                    Industry Recognized Certifications
                  </div>
                );
              } else if (current.key === "education") {
                return (
                  <div className="text-3xl font-semibold font-['Work_Sans'] text-neutral-800">
                    Current Studies & Future Plans
                  </div>
                );
              } else if (current.key === "more") {
                return (
                  <div className="text-3xl font-semibold font-['Work_Sans'] text-neutral-800">
                    Beyond Cybersecurity Personal Interests
                  </div>
                );
              }
              return null;
            })()}
          </div>

          <img
            key={current.key}
            className="w-[320px] h-[320px] lg:w-[380px] lg:h-[380px] rounded-[160px] lg:rounded-[190px] object-cover"
            src={current.image}
            alt={current.label}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMeSection;
