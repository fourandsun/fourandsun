import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "포앤썬 — 즐거운 연결을 만드는 크리에이티브 크루";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/fourandsun-horizontal-logo.png")
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAFAF8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            top: -180,
            left: -120,
            borderRadius: "50%",
            background: "rgba(251, 191, 36, 0.16)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 360,
            height: 360,
            right: -110,
            bottom: -180,
            borderRadius: "50%",
            background: "rgba(251, 113, 133, 0.12)",
          }}
        />
        <img
          src={logoSrc}
          alt="4&sun"
          width={760}
          height={285}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            marginTop: 34,
            color: "#64748B",
            fontSize: 24,
            fontWeight: 300,
            letterSpacing: "0.08em",
          }}
        >
          WE CREATE LOVING SUNSHINE
        </div>
        <div
          style={{
            position: "absolute",
            inset: 22,
            border: "1px solid rgba(251, 113, 133, 0.32)",
          }}
        />
      </div>
    ),
    size
  );
}
