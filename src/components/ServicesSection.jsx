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
      title: "Website Penetration Testing",
      description: "Comprehensive security testing to identify vulnerabilities in your web applications using standard techniques.",
      fiverr: "" // You can add your Fiverr link here later
    },
    {
      title: "General Security Consulting",
      description: "Expert cybersecurity guidance to strengthen your overall security posture and protect your digital assets from threats.",
      fiverr: "" // You can add your Fiverr link here later
    },
    {
      title: "Landing Page Design",
      description: "Professional logo, favicon, and complete landing page design in Figma with mobile-responsive layouts and brand identity.",
      fiverr: "https://www.fiverr.com/s/jj1dWQ9"
    },
    {
      title: "Website Development",
      description: "Full-stack web development using React, Vite, and Tailwind CSS with professional hosting on Hostinger or GitHub Pages.",
      fiverr: "https://www.fiverr.com/s/jj1dWQ9"
    }
  ];

  const getServiceIcon = (index, isBlue) => {
    const iconColor = isBlue ? 'white' : '#2563eb';
    
    switch (index) {
      case 0: // Website Penetration Testing - SQL/Database with security elements
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="transition-colors duration-500">
            {/* Database cylinder */}
            <ellipse cx="32" cy="18" rx="16" ry="6" stroke={iconColor} strokeWidth="2" fill="none"/>
            <ellipse cx="32" cy="26" rx="16" ry="6" stroke={iconColor} strokeWidth="2" fill="none"/>
            <ellipse cx="32" cy="34" rx="16" ry="6" stroke={iconColor} strokeWidth="2" fill="none"/>
            <path d="M16 18V34" stroke={iconColor} strokeWidth="2"/>
            <path d="M48 18V34" stroke={iconColor} strokeWidth="2"/>
            {/* SQL text */}
            <text x="32" y="28" textAnchor="middle" fill={iconColor} fontSize="8" fontFamily="monospace" fontWeight="bold">SQL</text>
            {/* Security scanner lines */}
            <path d="M52 42L58 42" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
            <path d="M52 46L56 46" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
            <path d="M52 50L60 50" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
            {/* Warning triangle */}
            <path d="M8 48L12 40L16 48Z" stroke={iconColor} strokeWidth="2" fill="none"/>
            <circle cx="12" cy="45" r="1" fill={iconColor}/>
          </svg>
        );
      
      case 1: // General Security Consulting - Simple lock
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="transition-colors duration-500">
            {/* Lock body */}
            <rect x="20" y="28" width="24" height="20" rx="4" stroke={iconColor} strokeWidth="2" fill="none"/>
            {/* Lock shackle */}
            <path d="M26 28V22C26 18.6863 28.6863 16 32 16C35.3137 16 38 18.6863 38 22V28" 
                  stroke={iconColor} strokeWidth="2" fill="none"/>
            {/* Keyhole */}
            <circle cx="32" cy="36" r="3" fill={iconColor}/>
            <rect x="31" y="36" width="2" height="6" fill={iconColor}/>
          </svg>
        );
      
      case 2: // Landing Page Design - Design tools (Figma-like)
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="transition-colors duration-500">
            <rect x="16" y="12" width="32" height="40" rx="2" stroke={iconColor} strokeWidth="2" fill="none"/>
            <rect x="20" y="18" width="24" height="4" rx="1" fill={iconColor}/>
            <rect x="20" y="26" width="16" height="2" rx="1" fill={iconColor}/>
            <rect x="20" y="30" width="20" height="2" rx="1" fill={iconColor}/>
            <rect x="20" y="34" width="12" height="2" rx="1" fill={iconColor}/>
            <circle cx="26" cy="42" r="4" stroke={iconColor} strokeWidth="2" fill="none"/>
            <rect x="32" y="40" width="8" height="4" rx="1" stroke={iconColor} strokeWidth="2" fill="none"/>
            <path d="M12 8L16 12L12 16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M52 8L48 12L52 16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      
      case 3: // Website Development - Code with hosting
        return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="transition-colors duration-500">
            <rect x="8" y="16" width="48" height="32" rx="4" stroke={iconColor} strokeWidth="2" fill="none"/>
            <rect x="8" y="16" width="48" height="8" rx="4" fill={iconColor} fillOpacity="0.2"/>
            <circle cx="14" cy="20" r="1.5" fill={iconColor}/>
            <circle cx="18" cy="20" r="1.5" fill={iconColor}/>
            <circle cx="22" cy="20" r="1.5" fill={iconColor}/>
            <path d="M16 32L20 28L16 24" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24 36H32" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
            <circle cx="44" cy="32" r="6" stroke={iconColor} strokeWidth="2" fill="none"/>
            <path d="M41 32L43 34L47 30" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      
      default:
        return null;
    }
  };

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
            Exploring My Technical{' '}
          </span>
          <span className="text-blue-600 text-3xl lg:text-5xl font-bold font-['Work_Sans'] leading-[40px] lg:leading-[50px]">
            Expertise
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
          From cybersecurity consulting to modern web development, I deliver comprehensive solutions that protect and enhance your digital presence
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
              <div className="w-80 h-20 relative overflow-hidden mb-2">
                {getServiceIcon(index, isCardBlue(index))}
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
