"use client";

import { motion } from "motion/react";
import { useActiveSection } from "@/context/ActiveSectionContext";

export default function FloatingScrollDown() {
  const { activeId, scrollTo } = useActiveSection();
  const isHero = activeId === "hero";

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isHero ? 1 : 0, y: isHero ? 0 : 10 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => scrollTo("about")}
      className={`fixed bottom-16 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 group sm:bottom-10 ${
        isHero ? "" : "pointer-events-none"
      }`}
      aria-hidden={!isHero}
      aria-label="다음으로"
      tabIndex={isHero ? 0 : -1}
    >
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="w-12 h-12 rounded-full border border-slate-300/60 bg-white/70 backdrop-blur-sm flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-50/80 transition-colors duration-300 shadow-sm"
      >
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          width="16"
          height="16"
          viewBox="0 0 14 14"
          fill="none"
          className="text-slate-500 group-hover:text-amber-500 transition-colors duration-300"
        >
          <path
            d="M7 2v10M3 8l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </motion.button>
  );
}
