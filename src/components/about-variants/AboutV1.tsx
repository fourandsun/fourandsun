"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const sentence1 = ["사랑하는", "것을", "만들고,"];
const sentence2 = ["세상을", "사랑스럽게", "만듭니다."];
const words = [...sentence1, ...sentence2];

function Word({ word, progress, index, total }: { word: string; progress: any; index: number; total: number }) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const color = useTransform(progress, [start, end], ["#cbd5e1", "#0f172a"]);

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.25em]">
      {word}
    </motion.span>
  );
}

export default function AboutV1() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });

  return (
    <section ref={ref} className="py-40 px-6 bg-gradient-to-b from-white via-rose-50/60 to-amber-50/80">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-rose-400 tracking-[0.3em] uppercase mb-10 text-center"
        >
          About
        </motion.p>

        <p className="text-4xl md:text-5xl font-bold leading-snug tracking-tight text-center">
          {words.map((word, i) => (
            <Word key={i} word={word} progress={scrollYProgress} index={i} total={words.length} />
          ))}
        </p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-lg text-slate-500 leading-relaxed text-center"
        >
          4&sun은 진심이 담긴 것들만 만듭니다.
          <br />
          작더라도 오래 남는, 좋아하는 마음이 전해지는 것들을.
        </motion.p>
      </div>
    </section>
  );
}
