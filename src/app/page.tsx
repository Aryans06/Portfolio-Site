import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Cursor from "@/components/fx/Cursor";
import Preloader from "@/components/fx/Preloader";
import ScrollProgress from "@/components/fx/ScrollProgress";
import Marquee from "@/components/fx/Marquee";

export default function Home() {
  return (
    <>
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <Marquee
          items={[
            "Full Stack Developer",
            "AI Integration",
            "Open Source",
            "Performance First",
          ]}
        />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Marquee
          items={[
            "Let's Talk",
            "Open to Internships",
            "Freelance",
            "Collaboration",
          ]}
          reverse
          duration={32}
        />
        <Contact />
      </main>
    </>
  );
}
