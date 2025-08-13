import { useState, useEffect } from "react";

function TopSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "services",
        "achievements",
        "portfolio",
        "testimonials",
        "contact",
      ];

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

      // Try different scroll methods
      try {
        // Method 1: scrollTo with options
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      } catch (error) {
        // Method 2: Fallback for older browsers
        const scrollTop = Math.max(0, offsetPosition);
        window.scrollTo(0, scrollTop);
      }
    }
  };

  const handleRefreshPage = (e) => {
    e.preventDefault();

    try {
      const targetElement = document.getElementById("hero");
      if (targetElement) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } catch (error) {
      console.error("Scroll to top error:", error);
    }
  };

  return (
    <section className="fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-4 md:px-10 lg:px-20 py-3 sm:py-3 bg-black flex flex-row justify-between items-center">
      <div className="flex justify-start items-center">
        <div
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={handleRefreshPage}
        >
          <img
            src="/favicon_dark.png"
            alt="Matas Tijusas Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex justify-end items-center flex-1 min-w-0">
        <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-5 lg:gap-8 flex-shrink-0">
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
            href="#services"
            onClick={(e) => handleSmoothScroll(e, "services")}
            className={`text-sm sm:text-sm md:text-base lg:text-lg font-medium font-['Work_Sans'] cursor-pointer transition-colors duration-200 whitespace-nowrap ${
              activeSection === "services"
                ? "text-blue-600"
                : "text-white hover:text-blue-400"
            }`}
          >
            Services
          </a>
          <a
            href="#achievements"
            onClick={(e) => handleSmoothScroll(e, "achievements")}
            className={`text-sm sm:text-sm md:text-base lg:text-lg font-medium font-['Work_Sans'] cursor-pointer transition-colors duration-200 whitespace-nowrap ${
              activeSection === "achievements"
                ? "text-blue-600"
                : "text-white hover:text-blue-400"
            }`}
          >
            Why me?
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleSmoothScroll(e, "portfolio")}
            className={`text-sm sm:text-sm md:text-base lg:text-lg font-medium font-['Work_Sans'] cursor-pointer transition-colors duration-200 whitespace-nowrap ${
              activeSection === "portfolio"
                ? "text-blue-600"
                : "text-white hover:text-blue-400"
            }`}
          >
            Portfolio
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleSmoothScroll(e, "testimonials")}
            className={`text-sm sm:text-sm md:text-base lg:text-lg font-medium font-['Work_Sans'] cursor-pointer transition-colors duration-200 whitespace-nowrap ${
              activeSection === "testimonials"
                ? "text-blue-600"
                : "text-white hover:text-blue-400"
            }`}
          >
            Reviews
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
        </div>
      </div>
    </section>
  );
}

export default TopSection;
