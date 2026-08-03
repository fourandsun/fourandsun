"use client";

import { motion } from "motion/react";
import SectionLayout from "@/components/SectionLayout";

const ease = [0.22, 1, 0.36, 1] as const;

const members = [
  {
    name: "Cho-ok",
    role: "Crew Lead",
    mark: "love",
    number: 1,
    isLeader: true,
    note: "온 세상을 사랑으로 가득 차게 만들고 싶다는 목표로 포앤썬 크루를 만들었습니다. 즐거운 연결을 만드는 작품을 만듭니다.",
  },
  {
    name: "Dong32",
    role: "Impact Creator",
    mark: "visual",
    number: 2,
    isLeader: false,
    note: "만들고 싶은 걸 만들면서, 세상에 필요한 것들을 채워나갑니다. 자유로운 도전으로 작게 시작해 큰 결과를 만듭니다.",
  },
  {
    name: "Chap-jeong",
    role: "Product & Experience",
    mark: "product",
    number: 3,
    isLeader: false,
    note: "크루에 들어오기도 전에 제품부터 만들었습니다. 세상을 즐겁게 하는 영향력 있는 제품을 만듭니다.",
  },
  {
    name: "Inho",
    role: "Composer & Guitarist",
    mark: "music",
    number: 4,
    isLeader: false,
    note: "멜로디와 기타로 장면의 온도를 만듭니다. 해일의 Wave를 비롯해 오래 마음에 머무는 음악을 만들고 연주합니다.",
  },
];

function CrewMark({
  number,
  type,
}: {
  number: number;
  type: (typeof members)[number]["mark"];
}) {
  const label = String(number).padStart(2, "0");

  if (type === "love") {
    return (
      <div className="relative h-[72px] w-[72px] overflow-hidden border border-rose-100 bg-rose-50/60 transition-colors duration-500 group-hover:border-amber-200 group-hover:bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(251,191,36,0.55),transparent_27%),radial-gradient(circle_at_28%_32%,rgba(251,113,133,0.35),transparent_24%),radial-gradient(circle_at_72%_32%,rgba(251,113,133,0.35),transparent_24%)]" />
        <div className="absolute left-1/2 top-6 h-8 w-8 -translate-x-1/2 rotate-45 border-b border-r border-rose-300/80" />
        <div className="absolute left-2 top-2 h-14 w-14 rounded-full border border-amber-200/80" />
        <div className="absolute left-0 top-9 h-px w-full bg-rose-300/70" />
        <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-amber-200/70" />
        <span className="absolute bottom-2 left-2 text-[11px] font-light tracking-[0.16em] text-slate-600">
          {label}
        </span>
      </div>
    );
  }

  if (type === "product") {
    return (
      <div className="relative h-[72px] w-[72px] overflow-hidden border border-rose-100 bg-[#F8FAFC] transition-colors duration-500 group-hover:border-amber-200 group-hover:bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(0deg,rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[length:16px_16px]" />
        <div className="absolute left-3 top-3 h-7 w-7 border border-slate-300 bg-white/80" />
        <div className="absolute right-3 top-5 h-5 w-5 bg-gradient-to-br from-amber-200 to-rose-200" />
        <div className="absolute bottom-4 left-5 h-3 w-9 border border-amber-300/80 bg-amber-50" />
        <div className="absolute bottom-3 right-3 h-7 w-px rotate-[-38deg] bg-slate-500/70" />
        <div className="absolute bottom-2 right-2 h-2 w-2 bg-slate-500/70" />
        <span className="absolute bottom-2 left-2 text-[11px] font-light tracking-[0.16em] text-slate-600">
          {label}
        </span>
      </div>
    );
  }

  if (type === "visual") {
    return (
      <div className="relative h-[72px] w-[72px] overflow-hidden border border-rose-100 bg-[#FAFAF8] transition-colors duration-500 group-hover:border-amber-200 group-hover:bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(244,114,182,0.26),transparent_42%),radial-gradient(circle_at_78%_30%,rgba(251,191,36,0.45),transparent_30%)]" />
        <div className="absolute left-3 top-3 h-9 w-11 border border-rose-200/90 bg-white/55" />
        <div className="absolute left-5 top-5 h-9 w-11 border border-amber-200/90 bg-amber-50/50" />
        <div className="absolute bottom-4 left-4 h-px w-9 bg-slate-400/70" />
        <div className="absolute bottom-7 left-4 h-px w-6 bg-slate-300/80" />
        <div className="absolute right-3 top-3 h-8 w-px rotate-[34deg] bg-rose-300/80" />
        <span className="absolute bottom-2 left-2 text-[11px] font-light tracking-[0.16em] text-slate-600">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-[72px] w-[72px] overflow-hidden border border-rose-100 bg-[#FAFAF8] transition-colors duration-500 group-hover:border-amber-200 group-hover:bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgba(251,191,36,0.42),transparent_30%),linear-gradient(135deg,rgba(244,114,182,0.22),transparent_48%)]" />
      <div className="absolute left-4 top-3 h-12 w-12 rounded-full border border-rose-200/90" />
      <div className="absolute left-7 top-6 h-6 w-6 rounded-full border border-amber-300/80" />
      <div className="absolute right-4 top-4 h-10 w-px rotate-[28deg] bg-slate-500/70" />
      <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-slate-500/70" />
      <div className="absolute bottom-5 left-3 h-px w-12 bg-rose-300/70" />
      <span className="absolute bottom-2 left-2 text-[11px] font-light tracking-[0.16em] text-slate-600">
        {label}
      </span>
    </div>
  );
}

export default function Crew() {
  return (
    <SectionLayout id="crew" label="Crew" bg="bg-white" accent="rose" wide>
      <div>
        <motion.p
          initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease }}
          className="mb-8 max-w-2xl text-xl font-light leading-[1.8] tracking-tight text-slate-900 md:text-2xl"
        >
          포앤썬은 사랑하는 것을 만들고, 그 마음이 누군가에게 다정한 햇살처럼
          닿기를 바라는 크루입니다.
        </motion.p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.0, delay: i * 0.12, ease }}
              className={[
                "group bg-white p-6 transition-colors duration-500 hover:bg-amber-50/40",
                member.isLeader
                  ? "border-2 border-rose-300 hover:border-amber-300"
                  : "border border-rose-300 hover:border-amber-300",
              ].join(" ")}
            >
              <CrewMark number={member.number} type={member.mark} />
              <h3 className="mt-8 text-xl font-light tracking-tight text-slate-900">
                {member.name}
              </h3>
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-amber-500">
                {member.role}
              </p>
              <p className="mt-5 text-sm font-light leading-7 text-slate-600">
                {member.note}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
