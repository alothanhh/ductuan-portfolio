'use client'

import Header from '@/components/header/index'
import About from '@/components/Home/about/index'
import Contact from '@/components/Home/contact/index'
import Education from '@/components/Home/education/index'
import Experience from '@/components/Home/experience/index'
import Projects from '@/components/Home/projects/index'
import SkillMarquee from '@/components/Home/skill-marquee/index'

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
