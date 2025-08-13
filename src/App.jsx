import TopSection from "./components/TopSection";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ServicesSection from "./components/ServicesSection";
import AchievementSection from "./components/AchievementSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SoftwareSection from "./components/SoftwareSection";
import ContactMeSection from "./components/ContactMeSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="w-full min-h-screen">
      <TopSection />
      <HeroSection />
      {/* <SoftwareSection /> */}
      <AboutMeSection />
      <ServicesSection />
      <AchievementSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactMeSection />
      <FooterSection />
    </div>
  );
}

export default App;
