"use client";
import WelcomeHeader from "./_components/introduction";
import HeroSection from "./_components/hero-section";
import { useRef, useState, useEffect } from "react";
import AboutMe from "./_components/about-me";
import { motion } from "framer-motion";
import Projects from "./_components/projects";
import Skills from "./_components/skills";
import Experience from "./_components/experience";
import Footer from "./_components/footer";

export default function Home() {
  const aboutMeRef = useRef<HTMLElement>(null);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (showAboutMe && shouldScroll) {
      aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
      setShouldScroll(false);
    }
  }, [showAboutMe, shouldScroll]);

  const handleGetStarted = () => {
    setShowAboutMe(true);
    setShouldScroll(true);
  };

  return (
    <main className="relative scroll-smooth">
      <section className="min-h-screen relative flex items-center justify-center">
        <HeroSection />
        <WelcomeHeader handleGetStarted={handleGetStarted} />
      </section>

      {showAboutMe && (
        <>
          <motion.section
            ref={aboutMeRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="px-5 lg:px-50"
          >
            <AboutMe />
          </motion.section>
          <Projects />
          <Skills />
          <Experience />
          <Footer />
        </>
      )}
    </main>
  );
}
