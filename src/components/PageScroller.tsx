"use client";

import { useRef, useEffect, useCallback, ReactNode, useState } from "react";
import { animate, motion, AnimatePresence } from "motion/react";

const EASE = [0.86, 0, 0.07, 1] as const;
const DURATION = 1.1;

interface Props {
  children: ReactNode;
  sectionSteps: number[];
  onChange: (section: number, step: number) => void;
  goToRef: React.MutableRefObject<((i: number) => void) | null>;
  advanceRef: React.MutableRefObject<((dir: 1 | -1) => void) | null>;
}

export default function PageScroller({ children, sectionSteps, onChange, goToRef, advanceRef }: Props) {
  const sectionRef = useRef(0);
  const stepRef = useRef(0);
  const isAnimating = useRef(false);
  const lastActionTime = useRef(0);
  const [transitioning, setTransitioning] = useState(false);
  const totalSections = sectionSteps.length;
  const THROTTLE_MS = 700;

  // 새로고침 시 스크롤 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
    sectionRef.current = 0;
    stepRef.current = 0;
    onChange(0, 0);
  }, []);

  const goToSection = useCallback((sectionIndex: number, step = 0) => {
    if (isAnimating.current) return;
    if (sectionIndex < 0 || sectionIndex >= totalSections) return;

    const startY = window.scrollY;
    const targetY = sectionIndex * window.innerHeight;
    if (Math.abs(startY - targetY) < 10) return;

    isAnimating.current = true;
    setTransitioning(true);
    sectionRef.current = sectionIndex;
    stepRef.current = step;
    onChange(sectionIndex, step);

    animate(startY, targetY, {
      duration: DURATION,
      ease: EASE,
      onUpdate: (v) => window.scrollTo(0, v),
      onComplete: () => {
        isAnimating.current = false;
        setTransitioning(false);
      },
    });
  }, [totalSections, onChange]);

  const advance = useCallback((dir: 1 | -1) => {
    if (isAnimating.current) return;
    const now = Date.now();
    if (now - lastActionTime.current < THROTTLE_MS) return;
    lastActionTime.current = now;

    const section = sectionRef.current;
    const step = stepRef.current;
    const maxStep = sectionSteps[section] - 1;

    if (dir === 1) {
      if (step < maxStep) {
        // 다음 단락
        stepRef.current = step + 1;
        onChange(section, step + 1);
      } else {
        // 다음 섹션
        goToSection(section + 1, 0);
      }
    } else {
      if (step > 0) {
        // 이전 단락
        stepRef.current = step - 1;
        onChange(section, step - 1);
      } else {
        // 이전 섹션 (마지막 step으로)
        const prevSection = section - 1;
        if (prevSection >= 0) {
          goToSection(prevSection, sectionSteps[prevSection] - 1);
        }
      }
    }
  }, [sectionSteps, onChange, goToSection]);

  goToRef.current = (i) => goToSection(i, 0);
  advanceRef.current = advance;

  // Wheel
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      advance(e.deltaY > 0 ? 1 : -1);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [advance]);

  // Touch
  useEffect(() => {
    let startY = 0;
    const onStart = (e: TouchEvent) => { startY = e.touches[0].clientY; };
    const onEnd = (e: TouchEvent) => {
      const diff = startY - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 60) advance(diff > 0 ? 1 : -1);
    };
    window.addEventListener("touchstart", onStart);
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [advance]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown"].includes(e.key)) { e.preventDefault(); advance(1); }
      if (["ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); advance(-1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance]);

  // Resize
  useEffect(() => {
    const onResize = () => window.scrollTo(0, sectionRef.current * window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {children}
      <AnimatePresence>
        {transitioning && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(251,191,36,0.08) 0%, rgba(244,114,182,0.05) 50%, transparent 70%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
