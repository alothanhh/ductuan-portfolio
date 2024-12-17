'use client'
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
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
      <Introduction />
      <SkillMarquee />
      <Experience />
      <Projects />
      <Contact />
    </main >
  );
}
