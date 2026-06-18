import type { Metadata } from "next";
import "./globals.css";
import "pretendard/dist/web/variable/pretendardvariable.css";

export const metadata: Metadata = {
  title: "4&sun — we create loving sunshine",
  description: "FourAndSun 조직 개발자로 등록하고 함께 성장하세요.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
