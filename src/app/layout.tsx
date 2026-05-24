import type { Metadata } from "next";
import { Cairo, Inter, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { RootChrome } from "@/components/root-chrome";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zahra-website-37g.pages.dev";

const siteTitle = "ZAHRA JEWELRY · مجوهرات زهره";

const siteDescription =
  "ZAHRA JEWELRY — مجوهرات زهره: إكسسوارات فاخرة من الاستانلس المقاوم للصدأ، بتصاميم معمارية راقية وبريق يدوم؛ علامة تجمع بين الأصالة والحداثة بهدوء يليق بالذوق الرفيع.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s · ZAHRA",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "ZAHRA JEWELRY",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/og-zahra-jewelry.png",
        width: 1200,
        height: 630,
        alt: "ZAHRA JEWELRY — مجوهرات زهره",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-zahra-jewelry.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "512x512", type: "image/png" }],
  },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Icon font: block avoids showing ligature names (search, person…) before the font loads */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <RootChrome>{children}</RootChrome>
      </body>
    </html>
  );
}
