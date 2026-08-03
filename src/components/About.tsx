"use client";

import { motion } from "motion/react";
import type { CSSProperties } from "react";
import SectionLayout from "@/components/SectionLayout";

const keywords = [
  {
    label: "LOVE",
    color: "#F2A8B0",
  },
  {
    label: "SUNLIGHT",
    color: "#F5E6A3",
  },
  {
    label: "PLAY",
    color: "#A8D8D0",
  },
  {
    label: "MEMORY",
    color: "#C4B8E8",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <SectionLayout id="about" label="WHAT WE LOVE" bg="bg-white" accent="rose" wide>
      <div className="relative overflow-hidden border border-rose-100 bg-[#FFFCFA] px-7 py-16 md:px-10 md:py-20">
        <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-amber-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-8 h-56 w-56 rounded-full bg-rose-100/45 blur-3xl" />

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.2, ease }}
          className="relative z-10 mx-auto max-w-2xl text-center text-2xl font-light leading-[1.75] tracking-tight text-slate-900 md:text-[1.9rem]"
        >
          사랑하는 것을 만들고, 그 온기가 햇살처럼 퍼지기를 바랍니다.
        </motion.p>

        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {keywords.map((keyword, i) => (
            <motion.span
              key={keyword.label}
              initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.9, delay: 0.12 + i * 0.08, ease }}
              style={{ "--keyword-hover": keyword.color } as CSSProperties}
              className="rounded-md border border-slate-200 bg-white/70 px-4 py-2 text-[10px] font-medium tracking-[0.18em] text-slate-700 transition-colors duration-500 hover:border-transparent hover:bg-[var(--keyword-hover)] hover:text-slate-900 md:px-5 md:py-3 md:text-[11px]"
            >
              {keyword.label}
            </motion.span>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
