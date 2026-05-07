"use client";

import { motion } from "motion/react";

const lines = ["사랑하는 것을 만들고,", "세상을 사랑스럽게 만듭니다."];

export default function AboutV3() {
  return (
    <section className="py-40 px-6 bg-gradient-to-b from-white via-rose-50/60 to-amber-50/80">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-rose-400 tracking-[0.3em] uppercase mb-10"
        >
          About
        </motion.p>

        <div className="flex flex-col gap-3 mb-10">
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-snug"
              >
                {i === 1 ? (
                  <span className="text-amber-500">{line}</span>
                ) : (
                  line
                )}
              </motion.h2>
            </div>
          ))}
        </div>

        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            4&sun은 진심이 담긴 것들만 만듭니다.
            <br />
            작더라도 오래 남는, 좋아하는 마음이 전해지는 것들을.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
