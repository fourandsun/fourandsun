"use client";

import { motion, AnimatePresence } from "motion/react";
import { useActiveSection } from "@/context/ActiveSectionContext";

interface Props {
  totalSections: number;
}

export default function FloatingScrollDown({ totalSections }: Props) {
  const { section, advance, goTo } = useActiveSection();
  const isLast = section >= totalSections - 1;

  return (
    <motion.button
      key={isLast ? "top" : "down"}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => isLast ? goTo(0) : advance(1)}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 group"
      aria-label={isLast ? "맨 위로" : "다음으로"}
    >
      <motion.div
        animate={isLast ? { y: 0 } : { y: [0, 7, 0] }}
        transition={{ duration: 1.8, repeat: isLast ? 0 : Infinity, ease: "easeInOut" }}
        className="w-12 h-12 rounded-full border border-slate-300/60 bg-white/70 backdrop-blur-sm flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-50/80 transition-colors duration-300 shadow-sm"
      >
        <AnimatePresence mode="wait">
          {isLast ? (
            <motion.svg
              key="up"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              width="16"
              height="16"
              viewBox="0 0 14 14"
              fill="none"
              className="text-slate-500 group-hover:text-amber-500 transition-colors duration-300"
            >
              <path
                d="M7 12V2M3 6l4-4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="down"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}
