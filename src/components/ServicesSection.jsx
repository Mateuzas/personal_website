import { motion } from 'framer-motion';
import { variants, transitions, hoverEffects, viewport } from '../utils/animations';
import { useState } from 'react';
import ServiceModal from './ServiceModal';

function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Website / App Design UX / UI Design",
      description: "Creating Engaging Digital Experiences for Websites and Apps through UX/UI Design"
    },
    {
      title: "Strategic Marketing and Creative Content",
      description: "Elevating Brands and Engagement through Strategic Marketing and Creative Content"
    },
    {
      title: "Multivendor eCommerce Website Solutions",
      description: "Unlocking the World of Multivendor eCommerce Websites"
    },
    {
      title: "Crafting Brand Strategies and Artistic Direction",
      description: "Delving Deep into Crafting Comprehensive Brand Strategies and Offering Expert Guidance"
    },
    {
      title: "Mobile App Development & Optimization",
      description: "Building Responsive and User-Friendly Mobile Applications for Enhanced User Experience"
    }
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const isCardBlue = (index) => {
    if (hasInteracted) {
      return hoveredIndex === index;
    }
    return index === 0; // First card is blue by default
  };

  const handleLearnMoreClick = (service, index) => {
    setSelectedService({ ...service, index });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <motion.section 
      id="services" 
      className="w-full px-5 lg:px-20 py-24 bg-white flex flex-col justify-start items-start gap-7 overflow-hidden"
      variants={variants.fadeIn}
      initial="hidden"
      whileInView="visible"
      transition={transitions.smooth}
      viewport={viewport}
      style={{ maxWidth: '100vw' }}
    >
      {/* Header Section */}
      <motion.div 
        className="w-full px-4 lg:px-20 flex flex-col justify-start items-center gap-3.5"
        variants={variants.fadeUpLarge}
        initial="hidden"
        whileInView="visible"
        transition={transitions.fastDelayed(0.2)}
        viewport={viewport}
      >
        <motion.div 
          className="text-blue-600 text-xl font-semibold font-['Work_Sans'] uppercase tracking-widest text-center"
          variants={variants.fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={transitions.fastDelayed(0.3)}
          viewport={viewport}
        >
          Services
        </motion.div>
        <motion.div 
          className="text-center"
          variants={variants.fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={transitions.fastDelayed(0.4)}
          viewport={viewport}
        >
          <span className="text-neutral-800 text-3xl lg:text-5xl font-bold font-['Work_Sans'] leading-[40px] lg:leading-[50px]">
            Exploring My Design{' '}
          </span>
          <span className="text-blue-600 text-3xl lg:text-5xl font-bold font-['Work_Sans'] leading-[40px] lg:leading-[50px]">
            Skills
          </span>
        </motion.div>
        <motion.div 
          className="max-w-[652px] text-center text-neutral-800 text-lg font-normal font-['Work_Sans'] leading-normal px-4"
          variants={variants.fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={transitions.fastDelayed(0.5)}
          viewport={viewport}
        >
          We transform your ideas into a distinctive web project that both inspires you and captivates your customers
        </motion.div>
      </motion.div>

      {/* Services Cards Container */}
      <motion.div 
        className="w-full"
        variants={variants.fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={transitions.fastDelayed(0.6)}
        viewport={viewport}
      >
        <div
          className="flex gap-5 overflow-x-auto pb-6 px-4 lg:px-20 pt-4 custom-scrollbar"
          style={{ 
            paddingTop: '20px',
            paddingBottom: '40px',
            marginTop: '-10px',
            marginBottom: '-20px',
            scrollbarGutter: 'stable'
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`min-w-[384px] p-7 rounded-[10px] flex flex-col justify-start items-start gap-2.5 transition-all duration-500 group ${
                isCardBlue(index) 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white outline outline-1 outline-offset-[-1px] outline-neutral-200 text-black'
              }`}
              initial={{ 
                opacity: 0, 
                scale: 0,
                y: 20
              }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                y: 0
              }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth pop-in
                scale: { type: "spring", stiffness: 300, damping: 25 }
              }}
              viewport={viewport}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)",
                transition: { duration: 0.15, ease: "easeOut" }
              }}
              animate={{
                scale: 1,
                y: 0,
                boxShadow: "0 0px 0px rgba(37, 99, 235, 0)",
                transition: { duration: 0.1, ease: "easeOut" }
              }}
              style={{
                transformOrigin: "center",
                borderRadius: "10px",
                margin: "10px 0",
                overflow: "visible"
              }}
            >
              {/* Icon Container */}
              <div className="w-80 h-24 relative overflow-hidden">
                <div className="w-20 h-20 relative overflow-hidden">
                  <div className={`w-5 h-5 left-[49.85px] top-[4.52px] absolute outline outline-2 outline-offset-[-1px] transition-colors duration-500 ${
                    isCardBlue(index) ? 'outline-white' : 'outline-blue-600'
                  }`} />
                  <div className={`w-5 h-11 left-[55.18px] top-[27.60px] absolute outline outline-2 outline-offset-[-1px] transition-colors duration-500 ${
                    isCardBlue(index) ? 'outline-white' : 'outline-blue-600'
                  }`} />
                  <div className={`w-1.5 h-1.5 left-[10.08px] top-[16.60px] absolute outline outline-2 outline-offset-[-1px] transition-colors duration-500 ${
                    isCardBlue(index) ? 'outline-white' : 'outline-blue-600'
                  }`} />
                  <div className={`w-1.5 h-1.5 left-[20.42px] top-[16.60px] absolute outline outline-2 outline-offset-[-1px] transition-colors duration-500 ${
                    isCardBlue(index) ? 'outline-white' : 'outline-blue-600'
                  }`} />
                  <div className={`w-1.5 h-1.5 left-[30.75px] top-[16.60px] absolute outline outline-2 outline-offset-[-1px] transition-colors duration-500 ${
                    isCardBlue(index) ? 'outline-white' : 'outline-blue-600'
                  }`} />
                  <div className={`w-14 h-4 left-[1.10px] top-[11.44px] absolute outline outline-2 outline-offset-[-1px] transition-colors duration-500 ${
                    isCardBlue(index) ? 'outline-white' : 'outline-blue-600'
                  }`} />
                  <div className={`w-2 h-2 left-[55.92px] top-[18.86px] absolute outline outline-2 outline-offset-[-1px] transition-colors duration-500 ${
                    isCardBlue(index) ? 'outline-white' : 'outline-blue-600'
                  }`} />
                  <div className={`w-2.5 h-3.5 left-[64.63px] top-[13.60px] absolute outline outline-2 outline-offset-[-1px] transition-colors duration-500 ${
                    isCardBlue(index) ? 'outline-white' : 'outline-blue-600'
                  }`} />
                  <div className={`w-16 h-11 left-[1.10px] top-[27.60px] absolute outline outline-2 outline-offset-[-1px] transition-colors duration-500 ${
                    isCardBlue(index) ? 'outline-white' : 'outline-blue-600'
                  }`} />
                  <div className={`w-5 h-4 left-[36.09px] top-[19.17px] absolute outline outline-2 outline-offset-[-1px] transition-colors duration-500 ${
                    isCardBlue(index) ? 'outline-white' : 'outline-blue-600'
                  }`} />
                  <div className={`w-5 h-5 left-[10.08px] top-[41.66px] absolute outline outline-2 outline-offset-[-1px] transition-colors duration-500 ${
                    isCardBlue(index) ? 'outline-white' : 'outline-blue-600'
                  }`} />
                  <div className={`w-5 h-1.5 left-[34.52px] top-[42.25px] absolute outline outline-2 outline-offset-[-1px] transition-colors duration-500 ${
                    isCardBlue(index) ? 'outline-white' : 'outline-blue-600'
                  }`} />
                  <div className={`w-5 h-1.5 left-[34.52px] top-[53.65px] absolute outline outline-2 outline-offset-[-1px] transition-colors duration-500 ${
                    isCardBlue(index) ? 'outline-white' : 'outline-blue-600'
                  }`} />
                </div>
              </div>

              {/* Title */}
              <div className={`w-80 text-2xl font-bold font-['Work_Sans'] leading-loose transition-colors duration-500 ${
                isCardBlue(index) ? 'text-white' : 'text-black'
              }`}>
                {service.title}
              </div>

              {/* Description */}
              <div className={`w-80 h-24 text-lg font-normal font-['Work_Sans'] leading-7 transition-colors duration-500 ${
                isCardBlue(index) ? 'text-white' : 'text-zinc-800'
              }`}>
                {service.description}
              </div>

              {/* Learn More Link */}
              <motion.div 
                className="inline-flex justify-center items-center gap-2.5 cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleLearnMoreClick(service, index)}
              >
                <div className={`text-lg font-normal font-['Work_Sans'] leading-7 transition-all duration-500 ${
                  isCardBlue(index) ? 'text-white group-hover:font-bold' : 'text-blue-600 hover:font-bold'
                }`}>
                  Learn more
                </div>
                <div className={`w-6 h-0 border-2 transition-colors duration-500 ${
                  isCardBlue(index) ? 'border-white' : 'border-blue-600'
                }`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Service Modal */}
      <ServiceModal 
        isOpen={modalOpen}
        onClose={closeModal}
        service={selectedService}
      />

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thick;
          scrollbar-color: #2563eb #f1f5f9;
          scrollbar-gutter: stable;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          height: 12px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 6px;
          margin: 0 20px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2563eb;
          border-radius: 6px;
          transition: background-color 0.3s ease;
          border: 1px solid #f1f5f9;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #1d4ed8;
        }

        .custom-scrollbar::-webkit-scrollbar-corner {
          background: transparent;
        }

        /* Prevent horizontal scrollbar from affecting body */
        body {
          overflow-x: hidden;
        }
        
        /* Ensure the section doesn't cause horizontal overflow */
        #services {
          max-width: 100vw;
        }
      `}</style>
    </motion.section>
  );
}

export default ServicesSection;
