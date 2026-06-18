"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

function SignalLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0.95, scale: 0.96 }}
        animate={{
          opacity: [0.95, 0.75, 0.2, 0.72, 0.95],
          scale: [0.96, 1, 1.08, 1.02, 0.96],
          x: [0, 24, -10, 0],
          y: [0, -18, 12, 0],
        }}
        transition={{
          duration: 12,
          delay: 0.25,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute -left-24 top-[18%] h-80 w-80 rounded-full bg-amber-200/35 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.82, scale: 0.96 }}
        animate={{
          opacity: [0.82, 0.58, 0.12, 0.5, 0.82],
          scale: [0.96, 1, 1.12, 1.04, 0.96],
          x: [0, -18, 16, 0],
          y: [0, 18, -10, 0],
        }}
        transition={{
          duration: 14,
          delay: 0.45,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute right-[-8rem] top-[32%] h-72 w-72 rounded-full bg-rose-200/25 blur-3xl"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[length:72px_72px] opacity-45" />
      <motion.div
        initial={{ scaleX: 1, opacity: 0.95 }}
        animate={{
          scaleX: 1,
          opacity: [0.95, 0.65, 0.16, 0.72, 0.95],
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          delay: 0.4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{ originX: 0 }}
        className="absolute left-0 top-[27%] h-px w-full bg-gradient-to-r from-transparent via-amber-500/45 to-rose-400/20 bg-[length:220%_100%]"
      />
      <motion.div
        initial={{ scaleY: 1, opacity: 0.95 }}
        animate={{ scaleY: 1, opacity: [0.95, 0.62, 0.16, 0.7, 0.95] }}
        transition={{
          duration: 13,
          delay: 0.55,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{ originY: 0 }}
        className="absolute left-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-amber-500/45 to-rose-300/20"
      />
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.7, ease }}
        className="absolute right-[14%] top-[22%] h-28 w-28 border border-slate-900/10 bg-white/35"
      />
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.85, ease }}
        className="absolute bottom-[18%] left-[12%] h-20 w-44 border-y border-amber-500/30"
      />
      <motion.div
        initial={{ scaleX: 1, opacity: 0.9 }}
        animate={{
          scaleX: 1,
          opacity: [0.9, 0.62, 0.14, 0.7, 0.9],
          backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 11,
          delay: 0.95,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{ originX: 1 }}
        className="absolute bottom-[29%] right-0 h-px w-1/2 bg-gradient-to-l from-rose-400/45 via-amber-400/35 to-transparent bg-[length:220%_100%]"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#FAFAF8] px-8 text-slate-950"
    >
      <SignalLines />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 pt-20 md:grid-cols-[1fr_240px] md:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease }}
            className="mb-7 text-[11px] font-medium uppercase tracking-[0.28em] text-slate-500"
          >
            creative crew
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.3, delay: 0.1, ease }}
            className="max-w-4xl text-6xl font-light leading-[0.95] tracking-normal text-slate-950 sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          >
            <motion.span
              initial={{ backgroundPosition: "100% 50%" }}
              animate={{ backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"] }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="inline-block bg-gradient-to-r from-slate-950 via-slate-900 via-70% to-amber-700 bg-[length:180%_100%] bg-clip-text text-transparent"
            >
              fourandsun
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.35, ease }}
            className="mt-9 max-w-2xl text-2xl font-light leading-[1.45] tracking-normal text-slate-800 md:text-4xl"
          >
            We create lasting connections
            <span
              className="ml-0.5 inline-block h-1 w-1 rounded-full bg-orange-800 align-baseline"
              aria-hidden="true"
            />
            <span className="sr-only">.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.55, ease }}
            className="mt-5 max-w-xl text-sm font-light leading-7 text-slate-600 md:text-base"
          >
            즐거운 연결과 오래 남는 감각을 만드는 크리에이티브 크루
          </motion.p>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.75, ease }}
          className="border-l border-slate-300/70 pl-6 md:mb-5"
        >
          <p className="text-xs font-light uppercase leading-6 tracking-[0.2em] text-orange-800">
            loving sunshine, playful works
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
