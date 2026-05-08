import type { Metadata } from "next";
import { Cairo, Inter, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { SiteNavbar } from "@/components/site-navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-arabic-body",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const kufiArabic = Noto_Kufi_Arabic({
  variable: "--font-arabic-display",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ZAHRA",
  description: "صفحة تعريفية لعلامة زهرة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${inter.variable} ${cairo.variable} ${kufiArabic.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/logo-zahra-transparent.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-zahra-transparent.png" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteNavbar />
        {children}
      </body>
    </html>
  );
}
