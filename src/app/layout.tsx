import type { Metadata } from "next";
import "./globals.css";
import "pretendard/dist/web/variable/pretendardvariable.css";

export const metadata: Metadata = {
  title: "fourandsun — We create lasting connections",
  description: "즐거운 연결과 오래 남는 감각을 만드는 크리에이티브 크루",
  icons: { icon: "/fourandsun-favicon.png" },
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
