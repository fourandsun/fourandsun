import AboutV1 from "@/components/about-variants/AboutV1";
import AboutV2 from "@/components/about-variants/AboutV2";
import AboutV3 from "@/components/about-variants/AboutV3";

function Label({ number, title }: { number: number; title: string }) {
  return (
    <div className="sticky top-0 z-10 bg-slate-900 text-white px-6 py-3 flex items-center gap-3">
      <span className="text-xs font-mono bg-amber-500 text-slate-900 px-2 py-0.5 rounded">
        Option {number}
      </span>
      <span className="text-sm text-slate-300">{title}</span>
    </div>
  );
}

export default function AboutDemoPage() {
  return (
    <main>
      <Label number={1} title="스크롤 연동 단어 하이라이트" />
      <AboutV1 />

      <Label number={2} title="교차 슬라이드인 (큰 타이포)" />
      <AboutV2 />

      <Label number={3} title="텍스트 마스크 Reveal" />
      <AboutV3 />
    </main>
  );
}
