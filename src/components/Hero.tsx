"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";

function Burst({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-2xl ${className}`}
      animate={{ scale: [0.3, 2.2, 1.6], opacity: [0, 0.6, 0.1] }}
      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.2, delay, ease: "easeOut" }}
    />
  );
}

function FloatingBlob({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{ x: [0, 50, -30, 30, 0], y: [0, -40, 30, -50, 0], scale: [1, 1.15, 0.92, 1.08, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

const chars = "사랑하는 것을 만듭니다".split("");

function LoveSign() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex items-center justify-center cursor-default"
      style={{ minHeight: 180 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* lovesign 이미지 */}
      <motion.div
        animate={{ opacity: hovered ? 0 : 1, filter: hovered ? "blur(6px)" : "blur(0px)" }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute"
      >
        <Image
          src="/lovesign.png"
          alt="사랑하는 것을 만듭니다"
          width={720}
          height={200}
          style={{ width: "auto", height: 160, objectFit: "contain" }}
          priority
        />
      </motion.div>

      {/* 호버 시 텍스트 */}
      <h1
        className="text-[2.8rem] md:text-[4rem] font-medium text-slate-900 leading-[1.5] tracking-[0.04em] select-none"
        aria-label="사랑하는 것을 만듭니다"
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            animate={{
              opacity: hovered ? 1 : 0,
              y: hovered ? 0 : 12,
              filter: hovered ? "blur(0px)" : "blur(6px)",
            }}
            transition={{
              duration: 1.4,
              delay: hovered ? i * 0.05 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </h1>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* ambient blobs */}
      <FloatingBlob className="w-[700px] h-[700px] bg-amber-200/35 -top-40 -left-40" delay={0} />
      <FloatingBlob className="w-[600px] h-[600px] bg-rose-200/30 -bottom-32 -right-32" delay={5} />
      <FloatingBlob className="w-[500px] h-[500px] bg-pink-100/40 top-1/3 -right-40" delay={10} />

      {/* 모서리 bursts */}
      <Burst className="w-80 h-80 bg-amber-300 -top-10 -left-10"     delay={0} />
      <Burst className="w-72 h-72 bg-rose-300  -top-10 -right-10"    delay={1.0} />
      <Burst className="w-80 h-80 bg-pink-300  -bottom-10 -left-10"  delay={2.0} />
      <Burst className="w-72 h-72 bg-orange-300 -bottom-10 -right-10" delay={0.6} />

      {/* 중앙 glow */}
      <motion.div
        className="absolute rounded-full blur-3xl bg-rose-200"
        style={{ top: "50%", left: "50%", translateX: "-50%", translateY: "-50%", width: 380, height: 380 }}
        animate={{ scale: [1, 1.6, 1.2, 1], opacity: [0.25, 0.5, 0.3, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] tracking-[0.3em] uppercase text-slate-600 mb-10"
        >
          fourandsun
        </motion.p>

        <LoveSign />

        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-sm text-slate-600 tracking-[0.15em]"
        >
          we create loving sunshine
        </motion.p>

      </div>
    </section>
  );
}
