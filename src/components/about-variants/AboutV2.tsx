"use client";

import { motion } from "motion/react";

const lines = [
  { text: "사랑하는 것을", from: -80 },
  { text: "만들고,", from: 80 },
  { text: "세상을 사랑스럽게", from: -80 },
  { text: "만듭니다.", from: 80 },
];

export default function AboutV2() {
  return (
    <section className="py-40 px-8 bg-gradient-to-b from-white via-rose-50/60 to-amber-50/80 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-rose-400 tracking-[0.3em] uppercase mb-14"
        >
          About
        </motion.p>

        <div className="flex flex-col gap-2">
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                initial={{ x: line.from, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`text-5xl md:text-7xl font-bold tracking-tight leading-tight ${
                  i % 2 === 0 ? "text-slate-900" : "text-amber-500"
                }`}
              >
                {line.text}
              </motion.p>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-lg text-slate-500 leading-relaxed"
        >
          4&sun은 진심이 담긴 것들만 만듭니다.
          <br />
          작더라도 오래 남는, 좋아하는 마음이 전해지는 것들을.
        </motion.p>
      </div>
    </section>
  );
}
