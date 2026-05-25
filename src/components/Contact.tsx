"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col px-8 bg-[#FAFAF8]">

      {/* 상단 — 콘텐츠 */}
      <div className="flex-1 flex items-center">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid md:grid-cols-[160px_1fr] gap-12 md:gap-24 items-start">

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease }}
              className="md:pt-1"
            >
              <p className="text-[11px] tracking-[0.25em] text-slate-500 uppercase">
                Contact
              </p>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.2, ease }}
                style={{ originY: 0 }}
                className="absolute -left-6 top-1 h-full w-px bg-rose-200 hidden md:block"
              />
              <div className="flex flex-col max-w-xl gap-10">
                <motion.a
                  href="mailto:hello@fourandsun.com"
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.1, ease }}
                  className="text-2xl md:text-3xl font-light text-slate-900 leading-[1.75] tracking-tight hover:text-amber-500 transition-colors duration-500 w-fit"
                >
                  hello@fourandsun.com
                </motion.a>

                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: 0.8, ease }}
                  className="text-base select-none text-rose-300"
                >
                  ☀
                </motion.span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
