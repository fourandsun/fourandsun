"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

interface Props {
  id?: string;
  label: string;
  bg?: string;
  children: ReactNode;
  accent?: "rose" | "amber";
  wide?: boolean;
}

export default function SectionLayout({
  id,
  label,
  bg = "bg-white",
  children,
  accent = "rose",
  wide = false,
}: Props) {
  const lineColor = accent === "amber" ? "bg-amber-300/50" : "bg-rose-200";
  const markColor = accent === "amber" ? "text-amber-400" : "text-rose-300";

  return (
    <section id={id} className={`scroll-mt-20 px-8 py-28 md:py-36 ${bg}`}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-[160px_1fr] gap-12 md:gap-24 items-start">

          {/* Left — label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease }}
            className="md:pt-2"
          >
            <p className="text-[11px] tracking-[0.25em] text-slate-500 uppercase">
              {label}
            </p>
          </motion.div>

          {/* Right — content */}
          <div className="relative">
            {/* Vertical accent line */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2, ease }}
              style={{ originY: 0 }}
              className={`absolute -left-6 top-1 h-full w-px ${lineColor} hidden md:block`}
            />

            <div className={`flex flex-col gap-10 ${wide ? "max-w-3xl" : "max-w-xl"}`}>
              {children}

              {/* Sun mark */}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.8, ease }}
                className={`text-base select-none ${markColor}`}
              >
                ☀
              </motion.span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
