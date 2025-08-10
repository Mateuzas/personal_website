import { motion, AnimatePresence } from 'framer-motion';

function ServiceModal({ isOpen, onClose, service }) {
  if (!service) return null;

  const scrollToContact = () => {
    onClose(); // Close the modal first
    // Small delay to ensure modal closes before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  const openFiverrGig = () => {
    if (service.fiverr) {
      window.open(service.fiverr, '_blank');
    }
  };

  const getServiceSpecificContent = () => {
    switch (service.title) {
      case "Website Penetration Testing":
        return {
          included: [
            "SQL injection and XSS vulnerability testing",
            "Password cracking and authentication bypass attempts", 
            "Cookie tampering and session management analysis",
            "Directory traversal and file inclusion testing",
            "Comprehensive vulnerability assessment report"
          ],
          tools: "Kali Linux, Burp Suite, OWASP ZAP, SQLmap, Hydra, Nikto",
          process: [
            { title: "Reconnaissance", desc: "Information gathering and target analysis using OSINT techniques." },
            { title: "Vulnerability Scanning", desc: "Automated and manual scanning for security weaknesses." },
            { title: "Exploitation", desc: "Ethical exploitation of discovered vulnerabilities to assess impact." },
            { title: "Reporting", desc: "Detailed report with findings, risk levels, and remediation recommendations." }
          ]
        };
      
      case "General Security Consulting":
        return {
          included: [
            "Comprehensive security posture assessment",
            "Threat modeling and risk analysis",
            "Security policy and procedure review",
            "Compliance guidance (OWASP, NIST frameworks)",
            "Security awareness training recommendations"
          ],
          tools: "Industry frameworks, threat intelligence feeds, security assessment tools",
          process: [
            { title: "Assessment", desc: "Evaluating current security measures and identifying gaps." },
            { title: "Analysis", desc: "Threat modeling and risk assessment based on your business context." },
            { title: "Strategy", desc: "Developing tailored security recommendations and roadmap." },
            { title: "Implementation", desc: "Guidance on implementing security improvements and best practices." }
          ]
        };
      
      case "Landing Page Design":
        return {
          included: [
            "Custom logo design and brand identity",
            "Favicon creation for web and mobile",
            "Complete landing page design in Figma",
            "Mobile-responsive design layouts",
            "Style guide and design assets delivery"
          ],
          tools: "Figma, Adobe Creative Suite, UI/UX design principles",
          process: [
            { title: "Brief & Research", desc: "Understanding your brand, target audience, and design requirements." },
            { title: "Concept Design", desc: "Creating initial design concepts and brand identity elements." },
            { title: "Refinement", desc: "Iterating on designs based on feedback and best practices." },
            { title: "Final Delivery", desc: "Delivering all design assets and style guide documentation." }
          ]
        };
      
      case "Website Development & Hosting":
        return {
          included: [
            "React-based website development with Vite",
            "Tailwind CSS for modern, responsive styling",
            "Performance optimization and SEO setup",
            "Hosting on Hostinger or GitHub Pages",
            "Custom domain configuration and SSL setup"
          ],
          tools: "React, Vite, Tailwind CSS, Hostinger, GitHub Pages, custom domains",
          process: [
            { title: "Planning", desc: "Architecture planning and technology stack selection." },
            { title: "Development", desc: "Building responsive, high-performance website using modern tools." },
            { title: "Testing", desc: "Cross-browser testing, performance optimization, and quality assurance." },
            { title: "Deployment", desc: "Hosting setup, domain configuration, and SSL certificate installation." }
          ]
        };
      
      default:
        return {
          included: [
            "Comprehensive analysis and planning phase",
            "Custom solution development tailored to your needs",
            "Quality assurance and testing procedures",
            "Ongoing support and maintenance options"
          ],
          tools: "Professional industry-standard tools and frameworks",
          process: [
            { title: "Discovery", desc: "Understanding your requirements and goals through detailed consultation." },
            { title: "Strategy", desc: "Developing a comprehensive plan and roadmap for success." },
            { title: "Implementation", desc: "Executing the solution with attention to detail and quality." },
            { title: "Delivery", desc: "Launching your solution and providing ongoing support." }
          ]
        };
    }
  };

  const content = getServiceSpecificContent();

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-[20px] p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#2563eb #e5e7eb'
            }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold font-['Work_Sans'] text-neutral-800 leading-tight pr-4">
                {service.title}
              </h2>
              <motion.button
                onClick={onClose}
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
              {/* Service Description */}
              <div>
                <h3 className="text-lg font-semibold font-['Work_Sans'] text-neutral-800 mb-3">
                  Service Overview
                </h3>
                <p className="text-gray-700 font-['Work_Sans'] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-lg font-semibold font-['Work_Sans'] text-neutral-800 mb-3">
                  What's Included
                </h3>
                <ul className="space-y-2 text-gray-700 font-['Work_Sans']">
                  {content.included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h3 className="text-lg font-semibold font-['Work_Sans'] text-neutral-800 mb-3">
                  Tools & Technologies
                </h3>
                <p className="text-gray-700 font-['Work_Sans'] leading-relaxed bg-gray-50 rounded-lg p-4">
                  {content.tools}
                </p>
              </div>

              {/* Process Overview */}
              <div>
                <h3 className="text-lg font-semibold font-['Work_Sans'] text-neutral-800 mb-3">
                  Our Process
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.process.map((step, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold font-['Work_Sans'] text-blue-600 mb-2">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-sm text-gray-600 font-['Work_Sans']">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold font-['Work_Sans'] text-neutral-800 mb-2">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-700 font-['Work_Sans'] mb-4">
                  Let's discuss how this service can help transform your business and achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    className="px-6 py-3 bg-blue-600 text-white font-semibold font-['Work_Sans'] rounded-full hover:bg-blue-700 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0 }}
                    onClick={scrollToContact}
                  >
                    Contact Me
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold font-['Work_Sans'] rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0 }}
                    onClick={onClose}
                  >
                    Back
                  </motion.button>
                </div>
              </div>

              {/* Fiverr Section - Only show for services with Fiverr links */}
              {service.fiverr && (
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <div className="text-center">
                    <p className="text-gray-600 font-['Work_Sans'] mb-3">
                      Interested? You can also check me out on Fiverr for quick package options
                    </p>
                    <motion.button
                      className="inline-flex items-center gap-2 px-4 py-2 text-green-600 hover:text-green-700 font-medium font-['Work_Sans'] transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0 }}
                      onClick={openFiverrGig}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                        <rect width="20" height="20" rx="3" fill="currentColor" fillOpacity="0.1"/>
                        <path d="M4 4.5H16V5.5H4V4.5Z" fill="currentColor"/>
                        <path d="M4 7.5H16V8.5H4V7.5Z" fill="currentColor"/>
                        <path d="M4 10.5H16V11.5H4V10.5Z" fill="currentColor"/>
                        <path d="M4 13.5H16V14.5H4V13.5Z" fill="currentColor"/>
                        <circle cx="14" cy="5" r="2" fill="currentColor"/>
                      </svg>
                      View on Fiverr
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ServiceModal;
