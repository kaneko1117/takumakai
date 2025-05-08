import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "琢磨会",
  description: "入会者募集中",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
