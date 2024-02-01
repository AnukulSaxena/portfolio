import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import ProjectSection from './components/ProjectSection/ProjectSection.jsx'
import SkillSection from './components/SkillSection/SkillSection.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import Footer from './components/Footer.jsx'
import ContactSection from './components/ContactSection/ContactSection.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen min-h-screen pt-20 bg-neutral-700'>
      <Header />
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <Footer />
    </div>

  )
}

export default App
