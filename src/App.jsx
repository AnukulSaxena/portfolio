import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import ProjectSection from './components/ProjectSection/ProjectSection.jsx'
import SkillSection from './components/SkillSection/SkillSection.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen p-5 bg-neutral-700'>
      <Header />
      <HeroSection />
      <ProjectSection />
      <SkillSection />
    </div>

  )
}

export default App
