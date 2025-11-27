import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "캐릭터 아틀리에 - Character Atelier",
  description: "1인 브랜드 특화 캐릭터 제작 대행 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

