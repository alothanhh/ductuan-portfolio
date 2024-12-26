'use client'

import Header from '@/components/Header'
import About from '@/components/Home/About'
import Contact from '@/components/Home/Contact'
import Education from '@/components/Home/Education'
import Experience from '@/components/Home/Experience'
import SkillMarquee from '@/components/SkillMarquee'

import Projects from './projects/page'

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
