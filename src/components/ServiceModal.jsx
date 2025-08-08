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

              {/* Placeholder Content */}
              <div>
                <h3 className="text-lg font-semibold font-['Work_Sans'] text-neutral-800 mb-3">
                  What's Included
                </h3>
                <ul className="space-y-2 text-gray-700 font-['Work_Sans']">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Comprehensive analysis and planning phase
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Custom solution development tailored to your needs
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Quality assurance and testing procedures
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ongoing support and maintenance options
                  </li>
                </ul>
              </div>

              {/* Process Overview */}
              <div>
                <h3 className="text-lg font-semibold font-['Work_Sans'] text-neutral-800 mb-3">
                  Our Process
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold font-['Work_Sans'] text-blue-600 mb-2">
                      1. Discovery
                    </h4>
                    <p className="text-sm text-gray-600 font-['Work_Sans']">
                      Understanding your requirements and goals through detailed consultation.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold font-['Work_Sans'] text-blue-600 mb-2">
                      2. Strategy
                    </h4>
                    <p className="text-sm text-gray-600 font-['Work_Sans']">
                      Developing a comprehensive plan and roadmap for success.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold font-['Work_Sans'] text-blue-600 mb-2">
                      3. Implementation
                    </h4>
                    <p className="text-sm text-gray-600 font-['Work_Sans']">
                      Executing the solution with attention to detail and quality.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold font-['Work_Sans'] text-blue-600 mb-2">
                      4. Delivery
                    </h4>
                    <p className="text-sm text-gray-600 font-['Work_Sans']">
                      Launching your solution and providing ongoing support.
                    </p>
                  </div>
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ServiceModal;
