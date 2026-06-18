"use client";

import { motion } from "motion/react";
import SectionLayout from "@/components/SectionLayout";

const principles = [
  {
    title: "사랑하는 것을 만듭니다",
    body: "포앤썬은 좋아하는 마음에서 출발해 오래 바라보고 싶은 경험을 만드는 크리에이티브 크루입니다.",
  },
  {
    title: "다정한 유희를 관찰합니다",
    body: "일상 속 작은 온기, 장난스러운 감각, 마음이 움직이는 순간을 놓치지 않고 기록합니다.",
  },
  {
    title: "감정과 기억을 연결합니다",
    body: "사람과 사람, 감정과 감각, 순간과 기억 사이의 거리를 좁히는 창작을 이어갑니다.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <SectionLayout id="about" label="About" bg="bg-white" accent="rose" wide>
      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.2, ease }}
        className="max-w-2xl text-2xl font-light leading-[1.75] tracking-tight text-slate-900 md:text-[1.8rem]"
      >
        포앤썬은 사랑하는 것들을 만들고, 그 마음이 누군가에게 다정한 햇살처럼 닿기를 바라는 팀입니다.
      </motion.p>

      <div className="grid gap-4 md:grid-cols-3">
        {principles.map((item, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.0, delay: i * 0.12, ease }}
            className="border-t border-rose-200/80 pt-5"
          >
            <h3 className="text-base font-medium leading-7 text-slate-900">
              {item.title}
            </h3>
            <p className="mt-3 text-sm font-light leading-7 text-slate-600">
              {item.body}
            </p>
          </motion.article>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.0, delay: 0.25, ease }}
        className="text-sm font-light uppercase tracking-[0.22em] text-amber-500"
      >
        To make things with love, and leave warmth behind.
      </motion.p>
    </SectionLayout>
  );
}
