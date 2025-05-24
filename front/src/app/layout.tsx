import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/features/header";
import { Footer } from "@/features/footer";

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
        <div className="mx-auto!important">
          <Header />
          <div className="p-4">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
