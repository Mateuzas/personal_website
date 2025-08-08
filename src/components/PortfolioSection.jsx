import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('websites');

  const websiteItems = [
    {
      id: 1,
      companyName: "TechCorp Solutions",
      websiteName: "Corporate Website",
      logoUrl: "https://placehold.co/80x80/2563eb/white?text=TC",
      websiteImage: "https://placehold.co/406x367/f8fafc/64748b?text=Website+Preview",
      description: "A comprehensive penetration test of TechCorp's main corporate website revealed several security vulnerabilities that were successfully addressed.",
      testingScope: ["Authentication systems", "Input validation", "SQL injection tests", "Cross-site scripting (XSS)", "Session management"],
      findings: "5 critical vulnerabilities identified and remediated",
      testDate: "March 2024",
      websiteUrl: "https://techcorp-solutions.com"
    },
    {
      id: 2,
      companyName: "Digital Agency",
      websiteName: "Portfolio Site",
      logoUrl: "https://placehold.co/80x80/10b981/white?text=DA",
      websiteImage: "https://placehold.co/406x367/f8fafc/64748b?text=Website+Preview",
      description: "Security assessment of the digital agency's portfolio website focusing on client data protection and secure file uploads.",
      testingScope: ["File upload security", "Client data protection", "Access controls", "HTTPS implementation", "Content Security Policy"],
      findings: "3 medium-risk issues resolved",
      testDate: "February 2024",
      websiteUrl: "https://digital-agency.com"
    },
    {
      id: 3,
      companyName: "StartupHub",
      websiteName: "Landing Page",
      logoUrl: "https://placehold.co/80x80/f59e0b/white?text=SH",
      websiteImage: "https://placehold.co/406x367/f8fafc/64748b?text=Website+Preview",
      description: "Comprehensive security testing of StartupHub's main landing page and user registration system.",
      testingScope: ["User registration security", "Email validation", "Rate limiting", "CSRF protection", "Input sanitization"],
      findings: "2 low-risk vulnerabilities patched",
      testDate: "January 2024",
      websiteUrl: "https://startuphub.io"
    },
    {
      id: 4,
      companyName: "E-Commerce Plus",
      websiteName: "Online Store",
      logoUrl: "https://placehold.co/80x80/ef4444/white?text=EC",
      websiteImage: "https://placehold.co/406x367/f8fafc/64748b?text=Website+Preview",
      description: "Extensive security testing of the e-commerce platform including payment processing and customer data protection.",
      testingScope: ["Payment gateway security", "Customer data encryption", "Shopping cart security", "Admin panel testing", "PCI DSS compliance"],
      findings: "8 critical issues identified and fixed",
      testDate: "April 2024",
      websiteUrl: "https://ecommerce-plus.com"
    },
    {
      id: 5,
      companyName: "Creative Studio",
      websiteName: "Brand Website",
      logoUrl: "https://placehold.co/80x80/8b5cf6/white?text=CS",
      websiteImage: "https://placehold.co/406x367/f8fafc/64748b?text=Website+Preview",
      description: "Security assessment of the creative studio's brand website with focus on portfolio protection and client communication security.",
      testingScope: ["Portfolio security", "Contact form protection", "Image upload security", "Client area access", "SSL/TLS configuration"],
      findings: "4 medium-risk vulnerabilities addressed",
      testDate: "May 2024",
      websiteUrl: "https://creative-studio.com"
    },
    {
      id: 6,
      companyName: "InnovateLab",
      websiteName: "Tech Platform",
      logoUrl: "https://placehold.co/80x80/06b6d4/white?text=IL",
      websiteImage: "https://placehold.co/406x367/f8fafc/64748b?text=Website+Preview",
      description: "Advanced penetration testing of InnovateLab's technology platform including API security and user management systems.",
      testingScope: ["API security testing", "User authentication", "Database security", "Third-party integrations", "Infrastructure security"],
      findings: "6 high-priority issues resolved",
      testDate: "June 2024",
      websiteUrl: "https://innovatelab.tech"
    }
  ];

  const projectItems = [
    {
      id: 1,
      companyName: "CyberSec Research Lab",
      websiteName: "Network Vulnerability Scanner",
      logoUrl: "https://placehold.co/80x80/dc2626/white?text=CR",
      websiteImage: "https://placehold.co/406x367/f8fafc/64748b?text=Scanner+Tool",
      description: "Developed a custom network vulnerability scanner tool as part of a research project to identify common security weaknesses in enterprise networks.",
      testingScope: ["Network scanning", "Vulnerability detection", "Report generation", "False positive reduction", "Integration with SIEM"],
      findings: "Successfully identified 95% of known vulnerabilities",
      testDate: "August 2024",
      websiteUrl: "https://github.com/cybersec-lab/vuln-scanner"
    },
    {
      id: 2,
      companyName: "SecureCode Initiative",
      websiteName: "Code Review Automation",
      logoUrl: "https://placehold.co/80x80/059669/white?text=SC",
      websiteImage: "https://placehold.co/406x367/f8fafc/64748b?text=Code+Analysis",
      description: "Participated in developing an automated code review system that identifies security vulnerabilities in source code during the development phase.",
      testingScope: ["Static code analysis", "Security pattern recognition", "OWASP Top 10 detection", "CI/CD integration", "Developer training"],
      findings: "Reduced security issues by 70% in pilot projects",
      testDate: "July 2024",
      websiteUrl: "https://github.com/securecode/auto-review"
    },
    {
      id: 3,
      companyName: "Threat Intelligence Hub",
      websiteName: "Malware Analysis Platform",
      logoUrl: "https://placehold.co/80x80/7c3aed/white?text=TI",
      websiteImage: "https://placehold.co/406x367/f8fafc/64748b?text=Malware+Lab",
      description: "Collaborated on building a malware analysis platform for automated threat detection and behavioral analysis of suspicious files.",
      testingScope: ["Dynamic analysis", "Behavioral monitoring", "Threat classification", "IOC extraction", "Sandbox environment"],
      findings: "Analyzed over 1000 malware samples successfully",
      testDate: "September 2024",
      websiteUrl: "https://github.com/threat-intel/malware-analyzer"
    },
    {
      id: 4,
      companyName: "Academic Research",
      websiteName: "IoT Security Framework",
      logoUrl: "https://placehold.co/80x80/ea580c/white?text=AR",
      websiteImage: "https://placehold.co/406x367/f8fafc/64748b?text=IoT+Security",
      description: "Research project focused on developing a comprehensive security framework for Internet of Things (IoT) devices in smart home environments.",
      testingScope: ["Device authentication", "Encrypted communications", "Firmware analysis", "Network segmentation", "Privacy protection"],
      findings: "Framework tested on 50+ IoT devices",
      testDate: "June 2024",
      websiteUrl: "https://github.com/academic-research/iot-security"
    },
    {
      id: 5,
      companyName: "Open Source Community",
      websiteName: "Security Testing Suite",
      logoUrl: "https://placehold.co/80x80/0891b2/white?text=OS",
      websiteImage: "https://placehold.co/406x367/f8fafc/64748b?text=Testing+Suite",
      description: "Contributed to an open-source security testing suite designed for small to medium-sized businesses to perform basic security assessments.",
      testingScope: ["Web application testing", "Network reconnaissance", "SSL/TLS analysis", "Configuration review", "Compliance checking"],
      findings: "Used by 500+ organizations globally",
      testDate: "October 2024",
      websiteUrl: "https://github.com/opensource/security-suite"
    },
    {
      id: 6,
      companyName: "Cybersecurity Bootcamp",
      websiteName: "Penetration Testing Lab",
      logoUrl: "https://placehold.co/80x80/be185d/white?text=CB",
      websiteImage: "https://placehold.co/406x367/f8fafc/64748b?text=Training+Lab",
      description: "Created and managed a hands-on penetration testing laboratory environment for cybersecurity training and skill development.",
      testingScope: ["Virtual lab setup", "Scenario development", "Student mentoring", "Assessment creation", "Tool demonstration"],
      findings: "Trained 200+ aspiring security professionals",
      testDate: "November 2024",
      websiteUrl: "https://github.com/cyber-bootcamp/pentest-lab"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const currentItems = activeSection === 'websites' ? websiteItems : projectItems;
  const currentTitle = activeSection === 'websites' ? 'Websites Tested By Me' : 'Projects I\'ve Participated In';
  const currentSubtitle = activeSection === 'websites' ? 'Summaries about the Websites' : 'Development & Research Projects';

  return (
    <motion.section 
      id="portfolio" 
      className="px-20 py-24 bg-white inline-flex flex-col justify-start items-center gap-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        key={currentTitle}
        className="w-[684px] text-center justify-start text-neutral-800 text-5xl font-bold font-['Work_Sans'] leading-[50px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {currentTitle}
      </motion.div>
      
      <motion.div 
        key={currentSubtitle}
        className="justify-start text-blue-600 text-xl font-semibold font-['Work_Sans'] uppercase tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {currentSubtitle}
      </motion.div>

      {/* Buttons */}
      <div className="flex gap-4 mb-8">
        <motion.button
          className={`px-8 py-4 rounded-[50px] text-xl font-semibold font-['Work_Sans'] whitespace-nowrap ${
            activeSection === 'websites'
              ? 'bg-blue-600 text-white'
              : 'bg-white outline outline-1 outline-blue-600 text-blue-600'
          }`}
          whileHover={{ 
            scale: 1.05
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={() => setActiveSection('websites')}
        >
          Websites
        </motion.button>
        <motion.button
          className={`px-8 py-4 rounded-[50px] text-xl font-semibold font-['Work_Sans'] whitespace-nowrap ${
            activeSection === 'projects'
              ? 'bg-blue-600 text-white'
              : 'bg-white outline outline-1 outline-blue-600 text-blue-600'
          }`}
          whileHover={{ 
            scale: 1.05
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={() => setActiveSection('projects')}
        >
          Projects
        </motion.button>
      </div>
      
      <motion.div 
        key={activeSection}
        className="max-w-[1400px] w-full flex justify-center items-start gap-7 flex-wrap px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {currentItems.map((item) => (
          <motion.div 
            key={item.id}
            className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex flex-col justify-start items-start overflow-hidden group cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(item)}
          >
            <div className="w-96 h-96 relative overflow-hidden">
              <motion.img 
                className="w-full h-full object-cover rounded-t-2xl"
                src={item.websiteImage}
                alt={`${item.companyName} ${activeSection === 'websites' ? 'website' : 'project'}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <div className="w-full p-6 flex items-center gap-4">
              <motion.img 
                className="w-16 h-16 rounded-full bg-gray-100 flex-shrink-0"
                src={item.logoUrl}
                alt={`${item.companyName} logo`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold font-['Work_Sans'] text-neutral-800 mb-1">
                  {item.companyName}
                </h3>
                <p className="text-sm font-medium font-['Work_Sans'] text-gray-600">
                  {item.websiteName}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

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
                scrollbarWidth: 'thin',
                scrollbarColor: '#2563eb #e5e7eb'
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
                    className="w-16 h-16 rounded-full bg-gray-100 flex-shrink-0"
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
                {/* Website Preview */}
                <div>
                  <img 
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    src={selectedProject.websiteImage}
                    alt={`${selectedProject.companyName} ${activeSection === 'websites' ? 'website' : 'project'} preview`}
                  />
                </div>

                {/* Test Overview */}
                <div>
                  <h3 className="text-lg font-semibold font-['Work_Sans'] text-neutral-800 mb-3">
                    {activeSection === 'websites' ? 'Security Testing Overview' : 'Project Overview'}
                  </h3>
                  <p className="text-gray-700 font-['Work_Sans'] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Testing Scope */}
                <div>
                  <h3 className="text-lg font-semibold font-['Work_Sans'] text-neutral-800 mb-3">
                    {activeSection === 'websites' ? 'Testing Scope' : 'Project Scope'}
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
                      {activeSection === 'websites' ? 'Findings' : 'Results'}
                    </h4>
                    <p className="text-sm text-gray-600 font-['Work_Sans']">
                      {selectedProject.findings}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold font-['Work_Sans'] text-blue-600 mb-2">
                      {activeSection === 'websites' ? 'Test Date' : 'Project Date'}
                    </h4>
                    <p className="text-sm text-gray-600 font-['Work_Sans']">
                      {selectedProject.testDate}
                    </p>
                  </div>
                </div>

                {/* Website Link */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold font-['Work_Sans'] text-neutral-800 mb-2">
                    {activeSection === 'websites' ? 'Tested Website' : 'Project Repository'}
                  </h3>
                  <p className="text-gray-700 font-['Work_Sans'] mb-4">
                    {activeSection === 'websites' 
                      ? 'Visit the website that underwent our comprehensive security testing.'
                      : 'View the source code and documentation for this project.'
                    }
                  </p>
                  <motion.a
                    href={selectedProject.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold font-['Work_Sans'] rounded-full hover:bg-blue-700 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0 }}
                  >
                    {activeSection === 'websites' ? 'Visit Website' : 'View Repository'}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
