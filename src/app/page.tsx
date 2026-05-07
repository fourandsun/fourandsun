"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import PageScroller from "@/components/PageScroller";
import FloatingScrollDown from "@/components/FloatingScrollDown";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Made from "@/components/Made";
import Contact from "@/components/Contact";
import ActiveSectionContext from "@/context/ActiveSectionContext";
import Footer from "@/components/Footer";

const SECTION_STEPS = [1, 3, 3, 1, 1];

export default function Home() {
  const [state, setState] = useState({ section: 0, step: 0 });
  const goToRef = useRef<((i: number) => void) | null>(null);
  const advanceRef = useRef<((dir: 1 | -1) => void) | null>(null);

  const goTo = (i: number) => goToRef.current?.(i);
  const advance = (dir: 1 | -1) => advanceRef.current?.(dir);

  return (
    <ActiveSectionContext.Provider value={{ ...state, goTo, advance }}>
      <Navbar />
      <FloatingScrollDown totalSections={SECTION_STEPS.length} />
      <PageScroller
        sectionSteps={SECTION_STEPS}
        onChange={(section, step) => setState({ section, step })}
        goToRef={goToRef}
        advanceRef={advanceRef}
      >
        <main>
          <Hero />
          <About />
          <Mission />
          <Made />
          <Contact />
        </main>
      </PageScroller>
    </ActiveSectionContext.Provider>
  );
}
