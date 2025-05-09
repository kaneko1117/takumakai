import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/features/header";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
