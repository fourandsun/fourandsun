import type { Metadata } from "next";
import "./globals.css";
import "pretendard/dist/web/variable/pretendardvariable.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "fourandsun — We create loving sunshine",
  description: "즐거운 연결과 오래 남는 감각을 만드는 크리에이티브 크루",
  icons: { icon: "/fourandsun-favicon.png" },
  openGraph: {
    title: "fourandsun — We create loving sunshine",
    description: "즐거운 연결과 오래 남는 감각을 만드는 크리에이티브 크루",
    siteName: "fourandsun",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "fourandsun — We create loving sunshine",
    description: "즐거운 연결과 오래 남는 감각을 만드는 크리에이티브 크루",
  },
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
