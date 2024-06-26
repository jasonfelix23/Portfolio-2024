import Image from "next/image";
import Navbar from "./_sections/Navbar";
import SocialIcons from "./_components/SocialIcons";
import Email from "./_components/Email";
import Hero from "./_sections/Hero";
import About from "./_sections/About";
import Experience from "./_sections/Experience";
import Projects from "./_sections/Projects";
import Contact from "./_sections/Contact";


export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <SocialIcons />
      <Email />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
