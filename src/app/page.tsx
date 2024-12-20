'use client'
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SkillMarquee from "@/components/SkillMarquee";
import { ScrollContext } from "@/contexts/ScrollContext";
import { useContext } from "react";

export default function Home() {
  return (
    <main style={{
      marginTop: '70px',
      width: 'device-width',
    }}>
      <Header />
      <About />
      <SkillMarquee />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main >
  );
}
