"use client";

import { motion } from "motion/react";
import { useActiveSection } from "@/context/ActiveSectionContext";
import SectionLayout from "@/components/SectionLayout";

const paragraphs = [
  "포앤썬은 사랑하는 것들을 만드는\n크리에이티브 크루입니다.",
  "우리는 일상 속 다정한 유희와\n온기에서 영감을 받습니다.",
  "유무형의 경계를 넘나드는 창작을 통해\n당신의 이야기와 우리의 경험을 담아냅니다.",
];

function paraStyle(isActiveSection: boolean, isLast: boolean) {
  return {
    color: isActiveSection && isLast ? "#f59e0b" : "#0f172a",
    opacity: isActiveSection ? 1 : 0,
    y: isActiveSection ? 0 : 16,
    filter: isActiveSection ? "blur(0px)" : "blur(8px)",
  };
}

export default function About() {
  const { section } = useActiveSection();
  const isActiveSection = section === 1;

  return (
    <SectionLayout id="about" label="About" bg="bg-white" accent="rose">
      {paragraphs.map((para, i) => (
        <motion.p
          key={i}
          animate={paraStyle(isActiveSection, i === paragraphs.length - 1)}
          transition={{ duration: 1.5, delay: isActiveSection ? i * 0.72 : 0, ease: [0.22, 1, 0.36, 1] }}
          className="whitespace-pre-line text-2xl md:text-[1.65rem] font-light leading-[1.8] tracking-tight"
        >
          {para}
        </motion.p>
      ))}
    </SectionLayout>
  );
}
