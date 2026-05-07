"use client";

import { motion } from "motion/react";
import SectionLayout from "@/components/SectionLayout";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Made() {
  return (
    <SectionLayout id="products" label="Our Works" bg="bg-white" accent="rose">
      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.1, ease }}
        className="text-2xl md:text-3xl text-slate-900 font-light leading-[1.75] tracking-tight"
      >
        우리가 만든 것들
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.25, ease }}
        className="relative group cursor-default select-none w-fit"
      >
        <span
          className="absolute inset-0 flex items-center text-4xl md:text-5xl font-light text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-[2000ms] ease-in-out pointer-events-none"
          aria-hidden
        >
          해일
        </span>
        <p className="text-4xl md:text-5xl font-light text-[#FFBFA0] tracking-tight group-hover:opacity-0 transition-opacity duration-[2000ms] ease-in-out">
          to be continued...
        </p>
      </motion.div>
    </SectionLayout>
  );
}
