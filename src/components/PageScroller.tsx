"use client";

import { useRef, useEffect, useCallback, ReactNode, useState } from "react";
import { animate, motion, AnimatePresence } from "motion/react";

const EASE = [0.86, 0, 0.07, 1] as const;
const DURATION = 0.55;
const MIN_WHEEL_DELTA = 5;
const WHEEL_LOCK_MS = 950;
type ScrollOptions = {
  allowDuringAnimation?: boolean;
  duration?: number;
  skipThrottle?: boolean;
};

interface Props {
  children: ReactNode;
  sectionSteps: number[];
  onChange: (section: number, step: number) => void;
  goToRef: React.MutableRefObject<((i: number, options?: ScrollOptions) => boolean) | null>;
  advanceRef: React.MutableRefObject<((dir: 1 | -1, options?: ScrollOptions) => boolean) | null>;
}

export default function PageScroller({ children, sectionSteps, onChange, goToRef, advanceRef }: Props) {
  const sectionRef = useRef(0);
  const stepRef = useRef(0);
  const isAnimating = useRef(false);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const lastActionTime = useRef(0);
  const wheelLockedRef = useRef(false);
  const wheelLockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const totalSections = sectionSteps.length;
  const THROTTLE_MS = 700;

  const unlockWheel = useCallback(() => {
    if (wheelLockTimerRef.current) {
      clearTimeout(wheelLockTimerRef.current);
      wheelLockTimerRef.current = null;
    }
    wheelLockedRef.current = false;
  }, []);

  // 새로고침 시 스크롤 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
    sectionRef.current = 0;
    stepRef.current = 0;
    onChange(0, 0);
  }, [onChange]);

  const goToSection = useCallback((sectionIndex: number, step = 0, options?: ScrollOptions) => {
    if (isAnimating.current && !options?.allowDuringAnimation) return false;
    if (sectionIndex < 0 || sectionIndex >= totalSections) return false;

    const hadAnimation = Boolean(animationRef.current);
    animationRef.current?.stop();
    animationRef.current = null;

    const startY = window.scrollY;
    const targetY = sectionIndex * window.innerHeight;
    if (Math.abs(startY - targetY) < 10) {
      if (hadAnimation) {
        isAnimating.current = false;
        setTransitioning(false);
      }
      return false;
    }

    isAnimating.current = true;
    setTransitioning(true);
    sectionRef.current = sectionIndex;
    stepRef.current = step;
    onChange(sectionIndex, step);

    animationRef.current = animate(startY, targetY, {
      duration: options?.duration ?? DURATION,
      ease: EASE,
      onUpdate: (v) => window.scrollTo(0, v),
      onComplete: () => {
        animationRef.current = null;
        isAnimating.current = false;
        setTransitioning(false);
      },
    });
    return true;
  }, [totalSections, onChange]);

  const advance = useCallback((dir: 1 | -1, options?: ScrollOptions) => {
    if (isAnimating.current && !options?.allowDuringAnimation) return false;
    const now = Date.now();
    if (!options?.skipThrottle && now - lastActionTime.current < THROTTLE_MS) return false;
    lastActionTime.current = now;

    const section = sectionRef.current;
    const step = stepRef.current;
    const maxStep = sectionSteps[section] - 1;

    if (dir === 1) {
      if (step < maxStep) {
        // 다음 단락
        stepRef.current = step + 1;
        onChange(section, step + 1);
        return true;
      } else {
        // 다음 섹션
        return goToSection(section + 1, 0, options);
      }
    } else {
      if (step > 0) {
        // 이전 단락
        stepRef.current = step - 1;
        onChange(section, step - 1);
        return true;
      } else {
        // 이전 섹션 (마지막 step으로)
        const prevSection = section - 1;
        if (prevSection >= 0) {
          return goToSection(prevSection, sectionSteps[prevSection] - 1, options);
        }
      }
    }
    return false;
  }, [sectionSteps, onChange, goToSection]);

  useEffect(() => {
    goToRef.current = (i, options) => goToSection(i, 0, options);
    advanceRef.current = advance;

    return () => {
      goToRef.current = null;
      advanceRef.current = null;
    };
  }, [advance, advanceRef, goToRef, goToSection]);

  // Wheel
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const absDelta = Math.abs(e.deltaY);
      if (absDelta < MIN_WHEEL_DELTA) return;

      if (wheelLockedRef.current) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      const didAdvance = advance(dir, {
        skipThrottle: true,
      });
      if (!didAdvance) return;

      wheelLockedRef.current = true;
      wheelLockTimerRef.current = setTimeout(unlockWheel, WHEEL_LOCK_MS);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      unlockWheel();
    };
  }, [advance, unlockWheel]);

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
