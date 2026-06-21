"use client";

import { motion } from "motion/react";
import SectionLayout from "@/components/SectionLayout";

const keywords = [
  {
    label: "love",
    className: "left-4 top-5 border-rose-200 bg-rose-50 text-rose-600 md:left-0 md:top-0",
  },
  {
    label: "sunlight",
    className: "right-4 top-16 border-amber-200 bg-amber-50 text-amber-600 md:right-2 md:top-8",
  },
  {
    label: "play",
    className: "bottom-20 left-5 border-cyan-200 bg-cyan-50 text-cyan-700 md:bottom-8 md:left-10",
  },
  {
    label: "memory",
    className: "bottom-6 right-5 border-slate-200 bg-slate-50 text-slate-600 md:bottom-0 md:right-0",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <SectionLayout id="about" label="Philosophy" bg="bg-white" accent="rose" wide>
      <div className="relative min-h-[360px] overflow-hidden border border-rose-100 bg-[#FFFCFA] px-7 py-14 md:min-h-[360px] md:px-10 md:py-12">
        <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-amber-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-8 h-56 w-56 rounded-full bg-rose-100/45 blur-3xl" />

        {keywords.map((keyword, i) => (
          <motion.span
            key={keyword.label}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            whileInView={{
              opacity: 1,
              y: [0, -8, 0],
              filter: "blur(0px)",
            }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              opacity: { duration: 0.9, delay: 0.1 + i * 0.1, ease },
              filter: { duration: 0.9, delay: 0.1 + i * 0.1, ease },
              y: {
                duration: 3.2 + i * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className={`absolute z-20 border px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] md:px-4 md:text-[11px] ${keyword.className}`}
          >
            {keyword.label}
          </motion.span>
        ))}

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.2, ease }}
          className="absolute inset-0 z-10 mx-auto flex max-w-2xl items-center justify-center px-8 text-center text-2xl font-light leading-[1.75] tracking-tight text-slate-900 md:px-10 md:text-[1.9rem]"
        >
          사랑하는 것을 만들어 세상을 다정한 햇살로 가득 채웁니다.
        </motion.p>
      </div>
    </SectionLayout>
  );
}
