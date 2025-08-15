
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import htbLogo from "../assets/smaller_HTB.png";
import htbImage from "../assets/HTB_1.png";
import htbModal from "../assets/HTB-Logo-RGB_BRC-Site-300.png";
import portfolioLogo from "../assets/IMG_3158.jpg";
import portfolioImage from "../assets/copy_screenshot.png";
import portfolioModal from "../assets/Screenshot 2025-08-08 175141.png";
import piHoleLogo from "../assets/pi-hole_logo.png";
import piHoleImage from "../assets/Raspberry_Pi_4_Model_B_-_Side.jpg";

function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("websites");

  const testingItems = [
    {
      id: 1,
      companyName: "HackTheBox",
      websiteName: "BabySQL Challenge",
      logoUrl: htbLogo,
      websiteImage: htbImage,
      modalImage: htbModal,
      description:
        "Successfully completed HackTheBox's BabySQL challenge, a medium-level web security exercise focused on SQL injection exploitation. Demonstrated advanced bypass techniques to extract sensitive database information.",
      testingScope: [
        "SQL injection vulnerability analysis",
        "Input sanitization bypass",
        "Database information extraction",
        "Error-based injection techniques",
        "Security assessment methodology",
      ],
      findings:
        "Successfully bypassed input validation controls and extracted target data through advanced SQL injection techniques. Demonstrated proficiency in web application security testing and database exploitation methods.",
      testDate: "January 2025",
      websiteUrl: "https://github.com/Mateuzas/Project-notes/blob/main/babysql",
    },
  ];

  const websiteItems = [
    {
      id: 1,
      companyName: "Matas Tijusas",
      websiteName: "Personal Portfolio Website",
      logoUrl: portfolioLogo,
      websiteImage: portfolioImage,
      modalImage: portfolioModal,
      description:
        "Developed and designed my personal cybersecurity portfolio website using modern web technologies. Features responsive design, smooth animations, professional contact integration, and showcases my security testing and web development expertise.",
      testingScope: [
        "React.js frontend development",
        "Responsive design implementation",
        "Framer Motion animations",
        "Tailwind CSS styling",
        "Email integration system",
        "Professional UI/UX design",
      ],
      findings:
        "Successfully delivered a modern, professional portfolio website with responsive design, smooth animations, and seamless user experience. Implemented advanced React.js patterns, optimized performance, and integrated professional contact systems for client engagement.",
      testDate: "January 2025",
      websiteUrl: "/",
    },
  ];

  const projectItems = [
    {
      id: 1,
      companyName: "Pi-hole Network Security",
      websiteName: "Raspberry Pi Project",
      logoUrl: piHoleLogo,
      websiteImage: piHoleImage,
      modalImage: piHoleImage,
      description:
        "Implemented a network-wide ad and tracker blocking solution using Pi-hole on a Raspberry Pi. This project provides DNS-level blocking to protect all devices on the network from advertisements, malicious domains, and tracking scripts, improving both security and browsing experience.",
      testingScope: [
        "Raspberry Pi hardware setup and configuration",
        "Pi-hole DNS server installation and optimization",
        "Network configuration and DHCP integration",
        "Custom blocklist management and filtering",
        "Web interface administration and monitoring",
        "Network security enhancement implementation",
      ],
      findings:
        "Successfully deployed a comprehensive network-level ad blocking solution that blocks over 100,000 malicious and advertising domains. Achieved significant reduction in network traffic, improved page load times, and enhanced privacy protection for all connected devices.",
      testDate: "2024",
      websiteUrl:
        "https://github.com/Mateuzas/Project-notes/blob/main/Raspberry-pi",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const currentItems =
    activeSection === "websites"
      ? websiteItems
      : activeSection === "testing"
      ? testingItems
      : projectItems;
  const currentTitle =
    activeSection === "websites"
      ? "Websites I've Developed"
      : activeSection === "testing"
      ? "Websites Tested By Me"
      : "Individual Projects";
  const currentSubtitle =
    activeSection === "websites"
      ? "Website Development"
      : activeSection === "testing"
      ? "Security Testing Projects"
      : "Development & Research Projects";

  return (
    <motion.section
      id="portfolio"
      className="px-4 lg:px-20 py-12 bg-white flex flex-col justify-start items-center gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Mobile Layout (hidden on lg and up) */}
      <div className="lg:hidden w-96 px-2.5 py-7 bg-white inline-flex flex-col justify-start items-center gap-7">
        <div className="flex flex-col justify-start items-center gap-3.5">
          <div className="w-96 text-center justify-start text-blue-600 text-lg font-semibold font-['Work_Sans'] uppercase leading-none tracking-widest">
            Our projects
          </div>
          <div className="w-96 text-center justify-start text-neutral-800 text-4xl font-bold font-['Work_Sans'] leading-10">
            Presenting My Design Portfolio and Case Studies
          </div>
        </div>
        <div className="w-96 inline-flex justify-center items-start gap-3.5 flex-wrap content-start">
          <motion.button
            className={`px-5 py-4 rounded-[50px] flex justify-center items-center ${
              activeSection === "websites"
                ? "bg-blue-600 text-white"
                : "bg-white outline outline-1 outline-offset-[-1px] outline-blue-600 text-blue-600"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setActiveSection("websites")}
          >
            <div className="justify-start text-base font-semibold font-['Work_Sans'] leading-none">
              Websites
            </div>
          </motion.button>
          <motion.button
            className={`px-5 py-4 rounded-[50px] flex justify-center items-center ${
              activeSection === "testing"
                ? "bg-blue-600 text-white"
                : "bg-white outline outline-1 outline-offset-[-1px] outline-blue-600 text-blue-600"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setActiveSection("testing")}
          >
            <div className="justify-start text-base font-semibold font-['Work_Sans'] leading-none">
              Testing
            </div>
          </motion.button>
          <motion.button
            className={`px-5 py-4 rounded-[50px] flex justify-center items-center ${
              activeSection === "projects"
                ? "bg-blue-600 text-white"
                : "bg-white outline outline-1 outline-offset-[-1px] outline-blue-600 text-blue-600"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setActiveSection("projects")}
          >
            <div className="justify-start text-base font-semibold font-['Work_Sans'] leading-none">
              Projects
            </div>
          </motion.button>
        </div>
        <div className="w-96 flex flex-col justify-center items-start gap-7">
          {/* Single Portfolio Card for Mobile */}
          {currentItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white hover:bg-blue-600 rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 hover:outline-blue-600 flex flex-col justify-start items-start cursor-pointer transition-all duration-200 group"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)",
              }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              onClick={() => setSelectedProject(item)}
            >
              {activeSection === "testing" ? (
                <div className="w-96 h-80 relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center rounded-t-2xl">
                  <motion.div
                    className="text-blue-600 transition-all duration-200 group-hover:scale-105"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="15" rx="2" ry="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <circle cx="6.5" cy="6.5" r="0.5" />
                      <circle cx="8.5" cy="6.5" r="0.5" />
                      <circle cx="10.5" cy="6.5" r="0.5" />
                    </svg>
                  </motion.div>
                </div>
              ) : (
                <div className="w-96 h-80 relative overflow-hidden rounded-t-2xl">
                  <motion.img
                    className="w-full h-full object-cover transition-all duration-200 group-hover:scale-105"
                    src={item.websiteImage}
                    alt={`${item.companyName} ${
                      activeSection === "websites" ? "website" : "project"
                    }`}
                  />
                </div>
              )}

              <div className="w-full p-6 flex items-center gap-4">
                <motion.img
                  className={`w-10 h-10 rounded-full bg-gray-100 flex-shrink-0 transition-all duration-300 ${
                    item.companyName === "Matas Tijusas"
                      ? "object-cover"
                      : "object-contain"
                  }`}
                  src={item.logoUrl}
                  alt={`${item.companyName} logo`}
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-['Work_Sans'] text-neutral-800 group-hover:text-white mb-1 transition-colors duration-300">
                    {item.companyName}
                  </h3>
                  <p className="text-sm font-medium font-['Work_Sans'] text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                    {item.websiteName}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Coming Soon Text for Mobile */}
          <motion.div
            className="w-96 flex flex-col justify-center items-center text-center py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-300 font-['Work_Sans'] mb-4 leading-tight">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-400 font-['Work_Sans'] leading-relaxed">
              More real{" "}
              {activeSection === "testing"
                ? "security testing projects"
                : activeSection === "websites"
                ? "website development projects"
                : "individual development projects"}{" "}
              will be added here as I complete work for clients and expand my
              portfolio.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout (hidden on mobile, visible on lg and up) */}
      <div className="hidden lg:flex flex-col justify-start items-center gap-6 w-full">
        <motion.div
          key={currentTitle}
          className="w-full max-w-[1400px] text-center justify-start text-neutral-800 text-4xl font-bold font-['Work_Sans'] leading-[40px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {currentTitle}
        </motion.div>

        <motion.div
          key={currentSubtitle}
          className="text-center justify-start text-blue-600 text-lg font-semibold font-['Work_Sans'] uppercase tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {currentSubtitle}
        </motion.div>

        {/* Buttons */}
        <div className="flex gap-3 mb-3 flex-wrap justify-center">
          <motion.button
            className={`px-5 py-2 rounded-[50px] text-base font-semibold font-['Work_Sans'] whitespace-nowrap ${
              activeSection === "websites"
                ? "bg-blue-600 text-white"
                : "bg-white outline outline-1 outline-blue-600 text-blue-600"
            }`}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setActiveSection("websites")}
          >
            Websites
          </motion.button>
          <motion.button
            className={`px-5 py-2 rounded-[50px] text-base font-semibold font-['Work_Sans'] whitespace-nowrap ${
              activeSection === "testing"
                ? "bg-blue-600 text-white"
                : "bg-white outline outline-1 outline-blue-600 text-blue-600"
            }`}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setActiveSection("testing")}
          >
            Testing
          </motion.button>
          <motion.button
            className={`px-5 py-2 rounded-[50px] text-base font-semibold font-['Work_Sans'] whitespace-nowrap ${
              activeSection === "projects"
                ? "bg-blue-600 text-white"
                : "bg-white outline outline-1 outline-blue-600 text-blue-600"
            }`}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setActiveSection("projects")}
          >
            Projects
          </motion.button>
        </div>

        <motion.div
          key={activeSection}
          className="max-w-[1400px] w-full flex justify-center items-center gap-8 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Single Portfolio Card */}
          {currentItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white hover:bg-blue-600 rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 hover:outline-blue-600 inline-flex flex-col justify-start items-start overflow-hidden group cursor-pointer transition-all duration-200 flex-shrink-0"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)",
              }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              onClick={() => setSelectedProject(item)}
            >
              {activeSection === "testing" ? (
                <div className="w-96 h-96 relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <motion.div
                    className="text-blue-600 transition-all duration-200 group-hover:scale-105"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="15" rx="2" ry="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <circle cx="6.5" cy="6.5" r="0.5" />
                      <circle cx="8.5" cy="6.5" r="0.5" />
                      <circle cx="10.5" cy="6.5" r="0.5" />
                    </svg>
                  </motion.div>
                </div>
              ) : (
                <div className="w-96 h-96 relative overflow-hidden">
                  <motion.img
                    className="w-full h-full object-cover rounded-t-2xl transition-all duration-200 group-hover:scale-105"
                    src={item.websiteImage}
                    alt={`${item.companyName} ${
                      activeSection === "websites" ? "website" : "project"
                    }`}
                  />
                </div>
              )}

              <div className="w-full p-6 flex items-center gap-4">
                <motion.img
                  className={`w-10 h-10 rounded-full bg-gray-100 flex-shrink-0 transition-all duration-300 ${
                    item.companyName === "Matas Tijusas"
                      ? "object-cover"
                      : "object-contain"
                  }`}
                  src={item.logoUrl}
                  alt={`${item.companyName} logo`}
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-['Work_Sans'] text-neutral-800 group-hover:text-white mb-1 transition-colors duration-300">
                    {item.companyName}
                  </h3>
                  <p className="text-sm font-medium font-['Work_Sans'] text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                    {item.websiteName}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Coming Soon Text on the Right */}
          <motion.div
            className="w-96 flex flex-col justify-center items-start text-left px-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-300 font-['Work_Sans'] mb-6 leading-tight whitespace-nowrap">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-400 font-['Work_Sans'] leading-relaxed">
              More real{" "}
              {activeSection === "testing"
                ? "security testing projects"
                : activeSection === "websites"
                ? "website development projects"
                : "individual development projects"}{" "}
              will be added here as I complete work for clients and expand my
              portfolio.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-[20px] p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#2563eb #e5e7eb",
              }}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <img
                    className={`w-12 h-12 rounded-full bg-gray-100 flex-shrink-0 ${
                      selectedProject.companyName === "Matas Tijusas"
                        ? "object-cover"
                        : "object-contain"
                    }`}
                    src={selectedProject.logoUrl}
                    alt={`${selectedProject.companyName} logo`}
                  />
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold font-['Work_Sans'] text-neutral-800 leading-tight">
                      {selectedProject.companyName}
                    </h2>
                    <p className="text-lg font-medium font-['Work_Sans'] text-blue-600">
                      {selectedProject.websiteName}
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="flex-shrink-0 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0 }}
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                {/* Website Preview - Full Screenshot */}
                <div className="flex justify-start">
                  <img
                    className="w-full h-64 object-contain rounded-lg mb-4 bg-gray-50"
                    src={
                      selectedProject.modalImage || selectedProject.websiteImage
                    }
                    alt={`${selectedProject.companyName} ${
                      activeSection === "websites" ? "website" : "project"
                    } preview`}
                  />
                </div>

                {/* Test Overview */}
                <div>
                  <h3 className="text-lg font-semibold font-['Work_Sans'] text-neutral-800 mb-3">
                    {activeSection === "testing"
                      ? "Security Testing Overview"
                      : "Development Overview"}
                  </h3>
                  <p className="text-gray-700 font-['Work_Sans'] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Testing Scope */}
                <div>
                  <h3 className="text-lg font-semibold font-['Work_Sans'] text-neutral-800 mb-3">
                    {activeSection === "testing"
                      ? "Testing Scope"
                      : "Development Stack"}
                  </h3>
                  <ul className="space-y-2 text-gray-700 font-['Work_Sans']">
                    {selectedProject.testingScope.map((scope, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {scope}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Test Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold font-['Work_Sans'] text-blue-600 mb-2">
                      {activeSection === "testing" ? "Key Findings" : "Outcome"}
                    </h4>
                    <p className="text-sm text-gray-600 font-['Work_Sans']">
                      {activeSection === "testing"
                        ? "Successfully exploited SQL injection vulnerabilities and extracted target data."
                        : activeSection === "websites"
                        ? "Modern, responsive portfolio website with professional design."
                        : "Network-wide ad blocking solution protecting all connected devices."}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold font-['Work_Sans'] text-blue-600 mb-2">
                      {activeSection === "testing"
                        ? "Test Date"
                        : "Completion Date"}
                    </h4>
                    <p className="text-sm text-gray-600 font-['Work_Sans']">
                      {selectedProject.testDate}
                    </p>
                  </div>
                </div>

                {/* Website Link */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold font-['Work_Sans'] text-neutral-800 mb-2">
                    {activeSection === "testing"
                      ? "View Documentation"
                      : activeSection === "websites"
                      ? "Visit Website"
                      : "Project Repository"}
                  </h3>
                  <p className="text-gray-700 font-['Work_Sans'] mb-4">
                    {activeSection === "testing"
                      ? "View detailed documentation and technical notes for this security testing project."
                      : activeSection === "websites"
                      ? "Explore the live website and its features."
                      : "View the source code and documentation for this project."}
                  </p>
                  <motion.a
                    href={selectedProject.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2 bg-blue-600 text-white text-base font-semibold font-['Work_Sans'] rounded-full hover:bg-blue-700 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0 }}
                  >
                    {activeSection === "testing"
                      ? "View Repository"
                      : activeSection === "websites"
                      ? "Visit Website"
                      : "View Repository"}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default PortfolioSection;
