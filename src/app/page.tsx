'use client'

import Header from '@/components/header'
import About from '@/components/Home/about'
import Contact from '@/components/Home/contact'
import Education from '@/components/Home/education'
import Experience from '@/components/Home/experience'
import Projects from '@/components/Home/projects'
import SkillMarquee from '@/components/Home/skill-marquee'

export default function Home() {
  return (
    <main
      style={{
        marginTop: '70px',
        width: 'device-width',
      }}
    >
      <Header />
      <About />
      <SkillMarquee />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
