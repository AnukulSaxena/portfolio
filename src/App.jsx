import { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import ProjectSection from "./components/ProjectSection/ProjectSection.jsx";
import SkillSection from "./components/SkillSection/SkillSection.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ContactSection from "./components/ContactSection/ContactSection.jsx";
import Social from "./components/Social.jsx";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen scroll-smooth min-h-screen  bg-neutral-700 overflow-hidden">
      <div className="w-full h-16 bg-neutral-800"></div>
      <Social />
      <Header />
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
