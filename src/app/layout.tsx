import type { Metadata } from "next";

import "@/app/globals.css";
import { morabba } from "@/utils/local_font";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "صفحه اصلی",
  description: "در این صفحه محتویات صفحه اصلی قرار دارد",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${morabba.variable} max-w-7xl m-auto`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
