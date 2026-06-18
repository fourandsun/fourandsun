"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import FloatingScrollDown from "@/components/FloatingScrollDown";
import GlobalCursorGlow from "@/components/GlobalCursorGlow";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Made from "@/components/Made";
import Crew from "@/components/Crew";
import Contact from "@/components/Contact";
import ActiveSectionContext from "@/context/ActiveSectionContext";
import Footer from "@/components/Footer";

const SECTION_IDS = ["hero", "about", "works", "crew", "contact"];

export default function Home() {
  const [activeId, setActiveId] = useState("hero");

  const scrollTo = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.1, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const contextValue = useMemo(() => ({ activeId, scrollTo }), [activeId, scrollTo]);

  return (
    <ActiveSectionContext.Provider value={contextValue}>
      <Navbar />
      <FloatingScrollDown />
      <GlobalCursorGlow />
      <main>
        <Hero />
        <About />
        <Made />
        <Crew />
        <Contact />
      </main>
      <Footer />
    </ActiveSectionContext.Provider>
  );
}
