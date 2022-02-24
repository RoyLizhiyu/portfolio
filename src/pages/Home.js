import React from 'react'
import AboutSection from '../components/AboutSection/AboutSection'
import ContactSection from '../components/ContactSection/ContactSection'
import Hero from '../components/Hero/Hero'
import ProjectSection from '../components/ProjectSection/ProjectSection'
import SkillSection from '../components/SkillSection/SkillSection'

function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <SkillSection />
      <ProjectSection  />
      <ContactSection />
    </div>
  )
}

export default Home