import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('testing');

  const testingItems = [
    {
      id: 1,
      companyName: "Coming Soon",
      websiteName: "Security Testing Projects",
      logoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&h=387&q=80",
      websiteImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=406&h=367&q=80",
      description: "Real security testing projects will be displayed here as I complete more penetration tests and security assessments for clients.",
      testingScope: ["Web application security", "Network penetration testing", "Vulnerability assessments", "Security audits", "Compliance testing"],
      findings: "Projects coming soon",
      testDate: "TBD",
      websiteUrl: "#"
    }
  ];

  const websiteItems = [
    {
      id: 1,
      companyName: "Coming Soon",
      websiteName: "Website Development",
      logoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&h=387&q=80",
      websiteImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=406&h=367&q=80",
      description: "Real website development projects will be displayed here as I complete more web development work for clients.",
      testingScope: ["Frontend development", "Backend development", "Full-stack solutions", "Responsive design", "Performance optimization"],
      findings: "Projects coming soon",
      testDate: "TBD",
      websiteUrl: "#"
    }
  ];

  const projectItems = [
    {
      id: 1,
      companyName: "Coming Soon",
      websiteName: "Individual Projects",
      logoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&h=387&q=80",
      websiteImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=406&h=367&q=80",
      description: "Real individual development and research projects will be displayed here as I work on more personal cybersecurity tools and applications.",
      testingScope: ["Security tool development", "Research projects", "Open source contributions", "Academic collaborations", "Innovation projects"],
      findings: "Projects coming soon",
      testDate: "TBD", 
      websiteUrl: "#"
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

  const currentItems = activeSection === 'testing' ? testingItems : activeSection === 'websites' ? websiteItems : projectItems;
  const currentTitle = activeSection === 'testing' ? 'Websites Tested By Me' : activeSection === 'websites' ? 'Websites I\'ve Developed' : 'Individual Projects';
  const currentSubtitle = activeSection === 'testing' ? 'Security Testing Projects' : activeSection === 'websites' ? 'Website Development' : 'Development & Research Projects';

  return (
    <motion.section 
      id="portfolio" 
      className="px-4 lg:px-20 py-24 bg-white flex flex-col justify-start items-center gap-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        key={currentTitle}
        className="w-full max-w-[1400px] text-center justify-start text-neutral-800 text-5xl font-bold font-['Work_Sans'] leading-[50px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {currentTitle}
      </motion.div>
      
      <motion.div 
        key={currentSubtitle}
        className="text-center justify-start text-blue-600 text-xl font-semibold font-['Work_Sans'] uppercase tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {currentSubtitle}
      </motion.div>

      {/* Buttons */}
      <div className="flex gap-4 mb-8 flex-wrap justify-center">
        <motion.button
          className={`px-6 py-3 rounded-[50px] text-lg font-semibold font-['Work_Sans'] whitespace-nowrap ${
            activeSection === 'testing'
              ? 'bg-blue-600 text-white'
              : 'bg-white outline outline-1 outline-blue-600 text-blue-600'
          }`}
          whileHover={{ 
            scale: 1.05
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={() => setActiveSection('testing')}
        >
          Testing
        </motion.button>
        <motion.button
          className={`px-6 py-3 rounded-[50px] text-lg font-semibold font-['Work_Sans'] whitespace-nowrap ${
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
          className={`px-6 py-3 rounded-[50px] text-lg font-semibold font-['Work_Sans'] whitespace-nowrap ${
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
        className="max-w-[1400px] w-full flex justify-center items-center gap-12 px-4"
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
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            onClick={() => setSelectedProject(item)}
          >
            <div className="w-96 h-96 relative overflow-hidden">
              <motion.img 
                className="w-full h-full object-cover rounded-t-2xl transition-all duration-200 group-hover:scale-105"
                src={item.websiteImage}
                alt={`${item.companyName} ${activeSection === 'websites' ? 'website' : 'project'}`}
              />
            </div>
            
            <div className="w-full p-6 flex items-center gap-4">
              <motion.img 
                className="w-16 h-16 rounded-full bg-gray-100 flex-shrink-0 transition-all duration-300"
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
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-300 font-['Work_Sans'] mb-8 leading-tight">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-400 font-['Work_Sans'] leading-relaxed">
            More real {activeSection === 'testing' ? 'security testing projects' : activeSection === 'websites' ? 'website development projects' : 'individual development projects'} will be added here as I complete work for clients and expand my portfolio.
          </p>
        </motion.div>
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
