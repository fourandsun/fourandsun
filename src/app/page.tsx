"use client";

import { useCallback, useRef, useState } from "react";
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

const SECTION_STEPS = [1, 1, 1, 1, 1];
type ScrollOptions = {
  allowDuringAnimation?: boolean;
  duration?: number;
  skipThrottle?: boolean;
};

export default function Home() {
  const [state, setState] = useState({ section: 0, step: 0 });
  const goToRef = useRef<((i: number, options?: ScrollOptions) => boolean) | null>(null);
  const advanceRef = useRef<((dir: 1 | -1, options?: ScrollOptions) => boolean) | null>(null);

  const goTo = (i: number, options?: ScrollOptions) => goToRef.current?.(i, options) ?? false;
  const advance = (dir: 1 | -1, options?: ScrollOptions) => advanceRef.current?.(dir, options) ?? false;
  const handleChange = useCallback((section: number, step: number) => {
    setState({ section, step });
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ ...state, goTo, advance }}>
      <Navbar />
      <Footer />
      <FloatingScrollDown totalSections={SECTION_STEPS.length} />
      <PageScroller
        sectionSteps={SECTION_STEPS}
        onChange={handleChange}
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
