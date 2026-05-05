import { useState, useEffect } from "react";
import cvFile from "../assets/CV.pdf";

function TopSection() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Matas_Tijusas_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "contact"];
      const scrollPosition = window.scrollY + 150;
      let currentActiveSection = "hero";

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          currentActiveSection = sections[i];
          break;
        }
      }

      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80;
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  const handleRefreshPage = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-4 md:px-10 lg:px-20 py-3 sm:py-3 bg-black flex flex-row justify-between items-center">
      {/* Initials as logo replacement */}
      <div
        className="flex justify-start items-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
        onClick={handleRefreshPage}
      >
        <span className="text-white text-base sm:text-lg font-bold font-['Work_Sans']">
          MT
        </span>
      </div>
      <div className="flex justify-end items-center flex-1 min-w-0">
        <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-shrink-0">
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "about")}
            className={`text-sm sm:text-sm md:text-base lg:text-lg font-medium font-['Work_Sans'] whitespace-nowrap cursor-pointer transition-colors duration-200 ${
              activeSection === "about"
                ? "text-blue-600"
                : "text-white hover:text-blue-400"
            }`}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => handleSmoothScroll(e, "skills")}
            className={`text-sm sm:text-sm md:text-base lg:text-lg font-medium font-['Work_Sans'] whitespace-nowrap cursor-pointer transition-colors duration-200 ${
              activeSection === "skills"
                ? "text-blue-600"
                : "text-white hover:text-blue-400"
            }`}
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className={`text-sm sm:text-sm md:text-base lg:text-lg font-medium font-['Work_Sans'] whitespace-nowrap cursor-pointer transition-colors duration-200 ${
              activeSection === "contact"
                ? "text-blue-600"
                : "text-white hover:text-blue-400"
            }`}
          >
            Contact
          </a>
          <button
            onClick={handleDownloadCV}
            className="hidden sm:flex items-center gap-2 px-4 py-1.5 bg-white hover:bg-gray-100 text-black text-sm font-semibold font-['Work_Sans'] rounded-full transition-colors duration-200"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
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
          </button>
        </div>
      </div>
    </section>
  );
}

export default TopSection;