import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero name="Young Kwon" />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
