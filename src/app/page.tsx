"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  const pendingScrollTarget = useRef<string | null>(null);
  const pendingScrollUntil = useRef(0);

  const scrollTo = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    pendingScrollTarget.current = id;
    pendingScrollUntil.current = Date.now() + 900;
    setActiveId(id);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      if (pendingScrollTarget.current) {
        const target = document.getElementById(pendingScrollTarget.current);
        const targetTop = target?.getBoundingClientRect().top ?? 0;
        const isPending = Date.now() < pendingScrollUntil.current;

        if (isPending && target && Math.abs(targetTop - 80) > 12) {
          return;
        }

        pendingScrollTarget.current = null;
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.55;
      const currentId =
        SECTION_IDS.findLast((id) => {
          const section = document.getElementById(id);
          return section ? section.offsetTop <= scrollPosition : false;
        }) ?? "hero";

      setActiveId(currentId);
    };

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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
