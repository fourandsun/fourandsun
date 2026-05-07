"use client";

import { motion } from "motion/react";
import { useActiveSection } from "@/context/ActiveSectionContext";
import SectionLayout from "@/components/SectionLayout";

const ease = [0.22, 1, 0.36, 1] as const;

const paragraphs = [
  "모든 사랑은 당신과 나 사이의 거리를\n좁히는 것으로부터 시작됩니다.",
  "포앤썬은 사람과 사람, 감정과 감각,\n순간과 기억을 연결하며\n오래 마음에 머무르는 온기를 만듭니다.",
  "To make things with love,\nand leave warmth behind.",
];

function paraStyle(i: number, step: number) {
  const isActive = step === i;
  const isLast = i === paragraphs.length - 1;
  return {
    color: isActive ? (isLast ? "#f59e0b" : "#0f172a") : "#94a3b8",
    opacity: isActive ? 1 : 0.25,
    y: isActive ? 0 : 10,
    filter: isActive ? "blur(0px)" : "blur(1.5px)",
  };
}

export default function Mission() {
  const { section, step } = useActiveSection();
  const activeStep = section === 2 ? step : -1;

  return (
    <SectionLayout id="mission" label="Mission" bg="bg-[#FAFAF8]" accent="amber">
      {paragraphs.map((para, i) => (
        <motion.p
          key={i}
          animate={paraStyle(i, activeStep)}
          transition={{ duration: 0.6, ease: [0.86, 0, 0.07, 1] }}
          className={`whitespace-pre-line leading-[1.8] tracking-tight ${
            i === 2
              ? "text-sm font-light tracking-widest uppercase"
              : "text-2xl md:text-[1.65rem] font-light"
          }`}
        >
          {para}
        </motion.p>
      ))}
    </SectionLayout>
  );
}
