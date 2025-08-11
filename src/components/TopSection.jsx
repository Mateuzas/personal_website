import { useState, useEffect } from "react";

function TopSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Get the current URL hash
      const hash = window.location.hash.replace('#', '');
      
      // If there's a hash, use it as the active section
      if (hash) {
        setActiveSection(hash);
        return;
      }
      
      // Fallback: basic scroll detection for when there's no hash
      const sections = [
        "hero",
        "about",
        "services",
        "achievements",
        "portfolio",
        "testimonials",
        "contact",
      ];

      const scrollPosition = window.scrollY + window.innerHeight;
      let activeSection = "hero";

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop + 100) {
            activeSection = sectionId;
          }
        }
      });

      setActiveSection(activeSection);
    };

    // Listen for both scroll and hash changes
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80; // Approximate height of sticky header
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleRefreshPage = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <section className="sticky top-0 z-50 w-full px-4 md:px-10 lg:px-20 py-3.5 bg-black flex flex-col lg:flex-row justify-center items-start lg:items-center gap-4 lg:gap-8">
      <div className="flex justify-start items-center gap-4 mb-4 lg:mb-0">
        <div
          className="w-12 h-12 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={handleRefreshPage}
        >
          <img
            src="/favicon_dark.png"
            alt="Matas Tijusas Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className="text-white text-2xl font-black font-['Zen_Kaku_Gothic_Antique'] leading-normal whitespace-nowrap cursor-pointer hover:text-gray-300 transition-colors duration-200"
          onClick={handleRefreshPage}
        >
          Secure your website
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-end items-center gap-6 lg:gap-8 w-full">
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 lg:gap-8">
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "hero")}
            className={`text-lg font-medium font-['Work_Sans'] cursor-pointer transition-colors duration-200 ${
              activeSection === "hero"
                ? "text-blue-600"
                : "text-white hover:text-blue-400"
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "about")}
            className={`text-lg font-medium font-['Work_Sans'] whitespace-nowrap cursor-pointer transition-colors duration-200 ${
              activeSection === "about"
                ? "text-blue-600"
                : "text-white hover:text-blue-400"
            }`}
          >
            About Me
          </a>
          <a
            href="#services"
            onClick={(e) => handleSmoothScroll(e, "services")}
            className={`text-lg font-medium font-['Work_Sans'] cursor-pointer transition-colors duration-200 ${
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
            className={`text-lg font-medium font-['Work_Sans'] cursor-pointer transition-colors duration-200 ${
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
            className={`text-lg font-medium font-['Work_Sans'] cursor-pointer transition-colors duration-200 ${
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
            className={`text-lg font-medium font-['Work_Sans'] cursor-pointer transition-colors duration-200 ${
              activeSection === "testimonials"
                ? "text-blue-600"
                : "text-white hover:text-blue-400"
            }`}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className={`text-lg font-medium font-['Work_Sans'] whitespace-nowrap cursor-pointer transition-colors duration-200 ${
              activeSection === "contact"
                ? "text-blue-600"
                : "text-white hover:text-blue-400"
            }`}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default TopSection;
