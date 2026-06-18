"use client";

import { motion } from "motion/react";
import Image from "next/image";
import SectionLayout from "@/components/SectionLayout";
import { useActiveSection } from "@/context/ActiveSectionContext";
import haeilLogo from "../../assets/works/haeil/logo-dark.png";
import haeilWordmark from "../../assets/works/haeil/wordmark(dark).png";

const ease = [0.22, 1, 0.36, 1] as const;
const haeilAppStoreUrl =
  "https://apps.apple.com/kr/app/haeil-%ED%95%B4%EC%95%BC%ED%95%A0-%EC%9D%BC/id6769830035";
const seaTurtleSoupUrl =
  "https://sea-turtle-soup-riddle.blcklamb.net/game/b2e469d2-0393-4838-9269-bdb7494c4166";

const haeilTags = [
  {
    label: "Cho-ok",
    className: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "mobile tablet app",
    className: "border-slate-200 text-slate-500",
  },
  {
    label: "TODO/Routine",
    className: "border-slate-200 text-slate-500",
  },
];
const seaTurtleSoupTags = [
  {
    label: "Chap-jeong",
    className: "border-cyan-200 bg-cyan-50 text-cyan-700",
  },
  {
    label: "riddle",
    className: "border-slate-200 text-slate-500",
  },
  {
    label: "interactive story",
    className: "border-slate-200 text-slate-500",
  },
];

export default function Made() {
  const { scrollTo } = useActiveSection();

  return (
    <SectionLayout id="works" label="Works" bg="bg-[#FAFAF8]" accent="amber" wide>
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.2, delay: 0.1, ease }}
        className="overflow-hidden border border-emerald-200/80 bg-white"
      >
        <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative flex min-h-80 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_28%_25%,rgba(6,78,59,0.34),transparent_34%),radial-gradient(circle_at_72%_62%,rgba(134,239,172,0.32),transparent_40%),linear-gradient(135deg,#ecfdf5,#fff)] p-8 md:p-10">
            <div className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-green-300/20 blur-3xl" />
            <div className="relative text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-900/55">
                work 01
              </p>
              <div className="mt-6 flex items-center justify-center gap-5">
                <Image
                  src={haeilLogo}
                  alt="해일"
                  className="h-auto w-20 shrink-0 md:w-24"
                  priority
                />
                <Image
                  src={haeilWordmark}
                  alt="Haeil"
                  className="h-auto w-36 md:w-44"
                  priority
                />
              </div>
              <p className="mt-5 text-[11px] font-light uppercase tracking-[0.22em] text-emerald-900/60">
                TODO · Routine · Schedule
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-12 p-8 md:p-10">
            <div>
              <div className="flex flex-wrap gap-2">
                {haeilTags.map((tag) =>
                  tag.label === "Cho-ok" ? (
                    <button
                      key={tag.label}
                      type="button"
                      onClick={() => scrollTo("crew")}
                      className={`border px-3 py-1 text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 hover:border-emerald-300 hover:bg-emerald-100 ${tag.className}`}
                    >
                      {tag.label}
                    </button>
                  ) : (
                    <span
                      key={tag.label}
                      className={`border px-3 py-1 text-[11px] uppercase tracking-[0.16em] ${tag.className}`}
                    >
                      {tag.label}
                    </span>
                  )
                )}
              </div>
              <p className="mt-8 text-xl font-light leading-[1.8] tracking-tight text-slate-900 md:text-2xl">
                해야할 일을 정리하고, 해결하는 앱
              </p>
              <p className="mt-5 text-sm font-light leading-7 text-slate-600">
                Paper로 할 일을 묶고, Schedule로 일정을 살피고, Wave로 지금 집중할 일을 하나씩 해결합니다. 흩어진 생각을 손에 잡히는 흐름으로 바꾸는 초옥의 첫 번째 작업입니다.
              </p>
            </div>
            <a
              href={haeilAppStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="w-fit border border-slate-300 px-4 py-3 text-xs font-light uppercase tracking-[0.18em] text-slate-700 transition-colors duration-300 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
            >
              View on App Store
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.2, delay: 0.15, ease }}
        className="overflow-hidden border border-cyan-200/80 bg-white"
      >
        <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative flex min-h-80 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_28%_24%,rgba(14,116,144,0.45),transparent_34%),radial-gradient(circle_at_72%_68%,rgba(15,23,42,0.36),transparent_42%),linear-gradient(135deg,#ecfeff,#ffffff)] p-8 md:p-10">
            <div className="pointer-events-none absolute -left-20 bottom-8 h-60 w-60 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 top-6 h-52 w-52 rounded-full border border-white/45" />
            <div className="pointer-events-none absolute -right-6 top-20 h-36 w-36 rounded-full border border-white/35" />
            <div className="pointer-events-none absolute right-28 top-36 h-24 w-24 rounded-full border border-cyan-50/40" />
            <div className="pointer-events-none absolute -left-10 bottom-4 h-44 w-44 rounded-full border border-white/30" />
            <div className="pointer-events-none absolute left-12 bottom-16 h-28 w-28 rounded-full border border-cyan-50/35" />
            <div className="pointer-events-none absolute left-24 top-10 h-12 w-12 rounded-full border border-white/45" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-56 -translate-x-1/2 rotate-[-8deg] bg-gradient-to-r from-transparent via-white/55 to-transparent" />
            <div className="pointer-events-none absolute bottom-16 left-1/2 h-px w-64 -translate-x-1/2 rotate-[6deg] bg-gradient-to-r from-transparent via-cyan-50/50 to-transparent" />
            <div className="relative text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-900/55">
                work 02
              </p>
              <h3 className="mt-6 text-4xl font-light leading-tight tracking-tight text-slate-950 md:text-5xl">
                바다거북수프
              </h3>
              <p className="mt-5 text-[11px] font-light uppercase tracking-[0.22em] text-cyan-900/60">
                question, infer, uncover
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-12 p-8 md:p-10">
            <div>
              <div className="flex flex-wrap gap-2">
                {seaTurtleSoupTags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`border px-3 py-1 text-[11px] uppercase tracking-[0.16em] ${tag.className}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-xl font-light leading-[1.8] tracking-tight text-slate-900 md:text-2xl">
                질문을 따라 숨은 이야기를 찾아가는 추리 게임
              </p>
              <p className="mt-5 text-sm font-light leading-7 text-slate-600">
                동료들과 제주도 워케이션에서 했던 바다거북수프 게임의 추억을 가득 담아 만든 챕정의 첫 번째 프로젝트입니다. 주어진 상황을 단서 삼아 질문을 던지고, 대답을 모아 사건의 전말을 밝혀갑니다. 짧은 문장 사이에 숨은 맥락을 추론하는 재미를 즐겨보세요.
              </p>
            </div>
            <a
              href={seaTurtleSoupUrl}
              target="_blank"
              rel="noreferrer"
              className="w-fit border border-slate-300 px-4 py-3 text-xs font-light uppercase tracking-[0.18em] text-slate-700 transition-colors duration-300 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
            >
              Play the riddle
            </a>
          </div>
        </div>
      </motion.div>
    </SectionLayout>
  );
}
