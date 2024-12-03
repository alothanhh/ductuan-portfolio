import Contact from "@/components/Contact";
import Introduction from "@/components/Introduction";
import SkillMarquee from "@/components/SkillMarquee";

export default function Home() {
  return (
    <main style={{
      marginTop: '70px',
      width: 'device-width',
    }}>
      <Introduction />
      <SkillMarquee />
      <Contact />
    </main>
  );
}
