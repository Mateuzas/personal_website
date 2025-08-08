import { motion } from 'framer-motion';
import { useState } from 'react';
import skillsImage from '../../assets/IMG_4987.jpg';
import certificationImage from '../../assets/IMG_3265.png';
import educationImage from '../../assets/images.jpg';

const sections = [
  {
    key: 'skills',
    label: 'Main Skills',
    image: skillsImage,
    content: (
      <>
        <motion.div 
          className="text-black text-lg lg:text-xl font-semibold font-['Work_Sans'] uppercase tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.div>
        <motion.div 
          className="text-left max-w-[572px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-blue-600 text-3xl lg:text-5xl font-bold font-['Work_Sans']">3+ Year's Experience</span>
          <br />
          <span className="text-neutral-800 text-3xl lg:text-5xl font-bold font-['Work_Sans']">in Cybersecurity</span>
        </motion.div>
        <motion.div 
          className="max-w-[620px] text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-neutral-800 text-base lg:text-lg font-normal font-['Work_Sans'] leading-normal">
            Hello there! I'm <span className="font-bold">Matas Tijusas</span>. I specialize in cybersecurity and web application testing, and I'm deeply passionate and committed to my craft. With <span className="font-bold">3+ years</span> of experience as a cybersecurity student and professional.
          </span>
        </motion.div>
        <div className="w-full max-w-[620px] space-y-6 mt-6">
          {/* Skill 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-neutral-800 text-lg lg:text-xl font-semibold font-['Work_Sans'] mb-2">
              Penetration Testing & Security Assessment
            </div>
            <div className="w-full h-4 bg-zinc-100 rounded-[10px] relative overflow-hidden">
              <motion.div 
                className="h-full bg-blue-600 rounded-[10px]"
                initial={{ width: 0 }}
                animate={{ width: "95%" }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </div>
          </motion.div>
          {/* Skill 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-neutral-800 text-lg lg:text-xl font-semibold font-['Work_Sans'] mb-2">
              Web Application Security Testing
            </div>
            <div className="w-full h-4 bg-zinc-100 rounded-[10px] relative overflow-hidden">
              <motion.div 
                className="h-full bg-blue-600 rounded-[10px]"
                initial={{ width: 0 }}
                animate={{ width: "90%" }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>
          </motion.div>
          {/* Skill 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="text-neutral-800 text-lg lg:text-xl font-semibold font-['Work_Sans'] mb-2">
              Vulnerability Research & Analysis
            </div>
            <div className="w-full h-4 bg-zinc-100 rounded-[10px] relative overflow-hidden">
              <motion.div 
                className="h-full bg-blue-600 rounded-[10px]"
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 1, delay: 0.9 }}
              />
            </div>
          </motion.div>
        </div>
      </>
    ),
  },
  {
    key: 'certifications',
    label: 'Certifications',
    image: certificationImage,
    content: (
      <>
        <motion.div 
          className="text-black text-lg lg:text-xl font-semibold font-['Work_Sans'] uppercase tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Certifications
        </motion.div>
        <motion.div 
          className="text-left max-w-[572px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-blue-600 text-3xl lg:text-5xl font-bold font-['Work_Sans']">Industry Recognized</span>
          <br />
          <span className="text-neutral-800 text-3xl lg:text-5xl font-bold font-['Work_Sans']">Certifications</span>
        </motion.div>
        <motion.div 
          className="max-w-[620px] text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-neutral-800 text-base lg:text-lg font-normal font-['Work_Sans'] leading-normal">
            I have earned several industry-recognized certifications that validate my expertise in cybersecurity. These certifications demonstrate my commitment to staying current with the latest security practices and methodologies.
          </span>
        </motion.div>
        <div className="w-full max-w-[620px] space-y-4 mt-6">
          {/* Certification 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-neutral-800 text-lg lg:text-xl font-semibold font-['Work_Sans'] mb-2">
              🏆 CompTIA Security+ (Expected 2025)
            </div>
            <div className="text-gray-600 text-base font-['Work_Sans']">
              Fundamental cybersecurity certification covering network security, compliance, and operational security principles.
            </div>
          </motion.div>
          {/* Certification 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-neutral-800 text-lg lg:text-xl font-semibold font-['Work_Sans'] mb-2">
              🔐 Certified Ethical Hacker (CEH) - In Progress
            </div>
            <div className="text-gray-600 text-base font-['Work_Sans']">
              Advanced certification focused on ethical hacking methodologies and penetration testing techniques.
            </div>
          </motion.div>
          {/* Certification 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="text-neutral-800 text-lg lg:text-xl font-semibold font-['Work_Sans'] mb-2">
              🎯 OSCP (Offensive Security Certified Professional) - Planned
            </div>
            <div className="text-gray-600 text-base font-['Work_Sans']">
              Hands-on penetration testing certification requiring practical exploitation of vulnerabilities in real environments.
            </div>
          </motion.div>
        </div>
      </>
    ),
  },
  {
    key: 'education',
    label: 'Education',
    image: educationImage,
    content: (
      <>
        <motion.div 
          className="text-black text-lg lg:text-xl font-semibold font-['Work_Sans'] uppercase tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Education
        </motion.div>
        <motion.div 
          className="text-left max-w-[572px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-blue-600 text-3xl lg:text-5xl font-bold font-['Work_Sans']">Academic Foundation</span>
          <br />
          <span className="text-neutral-800 text-3xl lg:text-5xl font-bold font-['Work_Sans']">in Cybersecurity</span>
        </motion.div>
        <motion.div 
          className="max-w-[620px] text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-neutral-800 text-base lg:text-lg font-normal font-['Work_Sans'] leading-normal">
            My educational background provides a strong foundation in cybersecurity principles, methodologies, and emerging technologies. I have focused on both theoretical knowledge and practical applications.
          </span>
        </motion.div>
        <div className="w-full max-w-[620px] space-y-4 mt-6">
          {/* Education 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-neutral-800 text-lg lg:text-xl font-semibold font-['Work_Sans'] mb-2">
              🎓 Bachelor of Science in Cybersecurity
            </div>
            <div className="text-gray-600 text-base font-['Work_Sans']">
              Comprehensive program covering cybersecurity fundamentals, risk management, and security architecture design.
            </div>
          </motion.div>
          {/* Education 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-neutral-800 text-lg lg:text-xl font-semibold font-['Work_Sans'] mb-2">
              🔍 Network Security & Digital Forensics
            </div>
            <div className="text-gray-600 text-base font-['Work_Sans']">
              Specialized coursework in network defense strategies and digital evidence analysis techniques.
            </div>
          </motion.div>
          {/* Education 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="text-neutral-800 text-lg lg:text-xl font-semibold font-['Work_Sans'] mb-2">
              🌐 Web Application Security & Penetration Testing
            </div>
            <div className="text-gray-600 text-base font-['Work_Sans']">
              Advanced studies in web application vulnerabilities, secure coding practices, and penetration testing methodologies.
            </div>
          </motion.div>
        </div>
      </>
    ),
  },
  {
    key: 'more',
    label: 'More about me',
    image: skillsImage,
    content: (
      <>
        <motion.div 
          className="text-black text-lg lg:text-xl font-semibold font-['Work_Sans'] uppercase tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          More about me
        </motion.div>
        <motion.div 
          className="text-left max-w-[572px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-blue-600 text-3xl lg:text-5xl font-bold font-['Work_Sans']">Beyond Cybersecurity</span>
          <br />
          <span className="text-neutral-800 text-3xl lg:text-5xl font-bold font-['Work_Sans']">Personal Interests</span>
        </motion.div>
        <motion.div 
          className="max-w-[620px] text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-neutral-800 text-base lg:text-lg font-normal font-['Work_Sans'] leading-normal">
            When I'm not diving deep into cybersecurity, I'm someone who loves exploring life in all its fascinating forms. I believe that having diverse interests makes me a better problem-solver and more creative thinker.
          </span>
        </motion.div>
        <div className="w-full max-w-[620px] space-y-4 mt-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-neutral-800 text-lg lg:text-xl font-semibold font-['Work_Sans'] mb-2">
              🎵 Music & Arts
            </div>
            <div className="text-gray-600 text-base font-['Work_Sans']">
              I enjoy discovering new music genres and attending live performances. Art galleries and creative spaces inspire me.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-neutral-800 text-lg lg:text-xl font-semibold font-['Work_Sans'] mb-2">
              🌍 Travel & Culture
            </div>
            <div className="text-gray-600 text-base font-['Work_Sans']">
              Exploring different cultures and places helps me see the world from new perspectives.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="text-neutral-800 text-lg lg:text-xl font-semibold font-['Work_Sans'] mb-2">
              📚 Continuous Learning
            </div>
            <div className="text-gray-600 text-base font-['Work_Sans']">
              Always curious about new subjects, from philosophy to cooking to understanding how things work.
            </div>
          </motion.div>
        </div>
      </>
    ),
  },
];

function AboutMeSection() {
  const [activeSection, setActiveSection] = useState('skills');
  const current = sections.find(s => s.key === activeSection);

  return (
    <motion.section 
      id="about" 
      className="py-20 px-4 lg:px-20 bg-gray-50"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Container for the two-column layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 max-w-7xl mx-auto">
        
        {/* Left side - Image */}
        <motion.div 
          className="relative flex-shrink-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img 
            className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full absolute -z-10"
            src="https://placehold.co/400x400" 
            alt="Background circle"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.img 
            key={current.key}
            className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-[150px] lg:rounded-[175px] object-cover relative z-10"
            src={current.image}
            alt={current.label}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div 
          className="flex-1 flex flex-col justify-start items-start gap-6 lg:gap-8 text-center lg:text-left lg:pl-12"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Section Content */}
          {current.content}
          
          {/* Buttons at the bottom */}
          <div className="flex flex-wrap gap-3 lg:gap-4 mt-8 justify-start">
            {sections.map(section => (
              <motion.button
                key={section.key}
                className={`px-6 py-3 rounded-[50px] text-lg font-semibold font-['Work_Sans'] whitespace-nowrap ${
                  activeSection === section.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white outline outline-1 outline-blue-600 text-blue-600'
                }`}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: activeSection === section.key ? "#1d4ed8" : "#eff6ff",
                  color: activeSection === section.key ? "#ffffff" : "#2563eb"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setActiveSection(section.key)}
                style={{
                  backgroundColor: activeSection === section.key ? "#2563eb" : "white",
                  color: activeSection === section.key ? "white" : "#2563eb"
                }}
              >
                {section.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutMeSection;