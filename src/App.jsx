import TopSection from "./components/TopSection";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import SkillsSection from "./components/SkillsSection";
import ContactMeSection from "./components/ContactMeSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="w-full min-h-screen">
      <TopSection />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ContactMeSection />
      <FooterSection />
    </div>
  );
}

export default App;