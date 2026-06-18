"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export default function GlobalCursorGlow() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const pointerX = useMotionValue(-240);
  const pointerY = useMotionValue(-240);
  const pointerOpacity = useMotionValue(0);
  const glowScale = useMotionValue(1);
  const springX = useSpring(pointerX, { stiffness: 72, damping: 26 });
  const springY = useSpring(pointerY, { stiffness: 72, damping: 26 });
  const springOpacity = useSpring(pointerOpacity, { stiffness: 120, damping: 24 });
  const springScale = useSpring(glowScale, { stiffness: 90, damping: 28 });
  const glowX = useTransform(springX, (value) => value - 128);
  const glowY = useTransform(springY, (value) => value - 128);
  const ringX = useTransform(pointerX, (value) => value - 12);
  const ringY = useTransform(pointerY, (value) => value - 12);
  const lastPointerRef = useRef({ x: -240, y: -240, time: 0 });
  const settleTimerRef = useRef<number | null>(null);
  const rippleIdRef = useRef(0);

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const now = window.performance.now();
      const last = lastPointerRef.current;
      const distance = Math.hypot(event.clientX - last.x, event.clientY - last.y);
      const elapsed = Math.max(now - last.time, 16);
      const speed = distance / elapsed;
      const nextScale = Math.min(3, Math.max(1, 1 + speed * 0.7));

      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      pointerOpacity.set(1);
      glowScale.set(nextScale);
      lastPointerRef.current = { x: event.clientX, y: event.clientY, time: now };

      if (settleTimerRef.current) {
        window.clearTimeout(settleTimerRef.current);
      }
      settleTimerRef.current = window.setTimeout(() => glowScale.set(1), 140);
    };

    const handleLeave = () => {
      pointerOpacity.set(0);
      glowScale.set(1);
    };

    const handleDown = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const id = rippleIdRef.current + 1;
      rippleIdRef.current = id;
      setRipples((current) => [
        ...current.slice(-3),
        { id, x: event.clientX, y: event.clientY },
      ]);
      window.setTimeout(() => {
        setRipples((current) => current.filter((ripple) => ripple.id !== id));
      }, 720);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerdown", handleDown);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      if (settleTimerRef.current) {
        window.clearTimeout(settleTimerRef.current);
      }
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [glowScale, pointerOpacity, pointerX, pointerY]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-30 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(154,52,18,0.26),rgba(245,158,11,0.18)_34%,rgba(251,191,36,0.1)_52%,transparent_72%)] blur-2xl"
        style={{ x: glowX, y: glowY, opacity: springOpacity, scale: springScale }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-30 h-6 w-6 rounded-full border border-yellow-100/95 bg-yellow-100/10 shadow-[0_0_8px_rgba(254,249,195,0.9),0_0_18px_rgba(250,204,21,0.62),0_0_42px_rgba(250,204,21,0.36),inset_0_0_10px_rgba(254,249,195,0.68)]"
        style={{ x: ringX, y: ringY, opacity: pointerOpacity }}
      />
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          aria-hidden="true"
          initial={{ opacity: 0.8, scale: 0.45 }}
          animate={{ opacity: 0, scale: 2.8 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed left-0 top-0 z-30 h-10 w-10 rounded-full border border-yellow-100/80 shadow-[0_0_10px_rgba(254,249,195,0.8),0_0_26px_rgba(250,204,21,0.45)]"
          style={{ x: ripple.x - 20, y: ripple.y - 20 }}
        />
      ))}
    </>
  );
}
