"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { SiteNavbar } from "@/components/site-navbar";

export function RootChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin ? <SiteNavbar /> : null}
      {children}
      {!isAdmin ? (
        <a
          href="https://wa.me/201515268898?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%20%D9%85%D9%86%20ZAHRA"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="اطلب عبر واتساب"
          className="fixed bottom-6 right-6 z-[70] flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg transition-transform duration-200 hover:scale-105"
        >
          <Image
            src="/logo-zahra-transparent.png"
            alt=""
            width={371}
            height={293}
            className="h-11 w-auto max-w-[48px] object-contain"
          />
        </a>
      ) : null}
    </>
  );
}
