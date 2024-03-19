import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";

const vazir = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "تسکو گیم",
  description: "Created by Habib.dev and contributors from github!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={vazir.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
