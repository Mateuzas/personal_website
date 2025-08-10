function TopSection() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80; // Approximate height of sticky header
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="sticky top-0 z-50 w-full px-4 md:px-10 lg:px-20 py-3.5 bg-black flex flex-col lg:flex-row justify-center items-start lg:items-center gap-4 lg:gap-8">
      <div className="flex justify-start items-center gap-4 mb-4 lg:mb-0">
        <div className="w-12 h-12 relative overflow-hidden">
          <img 
            src="/favicon_dark.png" 
            alt="Matas Tijusas Logo" 
            className="w-full h-full object-contain"
          />
        </div>
            <div className="text-white text-2xl font-black font-['Zen_Kaku_Gothic_Antique'] leading-normal whitespace-nowrap">
            Secure your website
            </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-end items-center gap-6 lg:gap-8 w-full">
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 lg:gap-8">
          <a href="#hero" onClick={(e) => handleSmoothScroll(e, 'hero')} className="text-white text-lg font-medium font-['Work_Sans'] cursor-pointer">Home</a>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="text-white text-lg font-medium font-['Work_Sans'] whitespace-nowrap cursor-pointer">About Me</a>
          <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="text-white text-lg font-medium font-['Work_Sans'] cursor-pointer">Services</a>
          <a href="#achievements" onClick={(e) => handleSmoothScroll(e, 'achievements')} className="text-white text-lg font-medium font-['Work_Sans'] cursor-pointer">Why me?</a>
          <a href="#portfolio" onClick={(e) => handleSmoothScroll(e, 'portfolio')} className="text-white text-lg font-medium font-['Work_Sans'] cursor-pointer">Portfolio</a>
          <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')} className="text-white text-lg font-medium font-['Work_Sans'] cursor-pointer">Testimonials</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="text-white text-lg font-medium font-['Work_Sans'] whitespace-nowrap cursor-pointer">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default TopSection;