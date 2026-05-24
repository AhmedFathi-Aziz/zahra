"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function SiteNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleOutsidePointerDown = (event: PointerEvent) => {
      if (!isMobileMenuOpen) return;
      const target = event.target as Node | null;
      if (!target) return;

      if (mobileMenuRef.current?.contains(target)) return;
      if (mobileMenuButtonRef.current?.contains(target)) return;

      closeMobileMenu();
    };

    document.addEventListener("pointerdown", handleOutsidePointerDown);
    return () => document.removeEventListener("pointerdown", handleOutsidePointerDown);
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--outline-variant)]/30 bg-[color:var(--surface)]/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-4 py-3 sm:px-5">
        <Link
          href="/"
          className="group flex shrink-0 items-center rounded-sm outline-none ring-offset-2 ring-offset-[color:var(--surface)] transition focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]/50"
        >
          <span className="flex h-[76px] w-auto max-w-[calc(100vw-9rem)] items-center sm:h-[88px] md:h-[104px] md:max-w-[min(440px,46vw)] lg:max-w-[480px]">
            <Image
              src="/logo-zahra-transparent.png"
              alt="شعار زهرة"
              width={371}
              height={293}
              priority
              sizes="(max-width: 640px) min(calc(100vw - 9rem), 280px), (max-width: 1024px) min(46vw, 400px), 480px"
              className="h-full w-auto object-contain object-center drop-shadow-[0_2px_4px_rgba(18,24,38,0.08)] transition-[filter,transform] duration-300 ease-out group-hover:scale-[1.02] group-hover:drop-shadow-[0_4px_20px_rgba(193,167,126,0.35)]"
            />
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link className="font-arabic-display text-base text-[var(--on-surface-variant)] transition-colors duration-300 hover:text-[var(--brand-navy)]" href="/">
            الرئيسية
          </Link>
          <Link className="font-arabic-display text-base text-[var(--on-surface-variant)] transition-colors duration-300 hover:text-[var(--brand-navy)]" href="/collections">
            المجموعات
          </Link>
          <Link className="font-arabic-display text-base text-[var(--on-surface-variant)] transition-colors duration-300 hover:text-[var(--brand-navy)]" href="/editorial">
            عالم زهره
          </Link>
          <Link className="font-arabic-display text-base text-[var(--on-surface-variant)] transition-colors duration-300 hover:text-[var(--brand-navy)]" href="/rings/aurora">
            هدايا
          </Link>
        </div>

        <div className="flex items-center gap-3.5 text-[22px] leading-none md:gap-4">
          <div className="relative md:hidden">
            <button
              ref={mobileMenuButtonRef}
              type="button"
              className="cursor-pointer text-[var(--on-surface-variant)] transition-transform duration-200 hover:text-[var(--brand-navy)] active:scale-95"
              aria-label="فتح القائمة"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navbar-menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
          <button className="material-symbols-outlined text-[var(--on-surface-variant)] transition-transform duration-200 hover:text-[var(--brand-navy)] active:scale-95">
            search
          </button>
          <Link
            href="/admin/login"
            className="text-[var(--on-surface-variant)] transition-transform duration-200 hover:text-[var(--brand-navy)] active:scale-95"
            aria-label="لوحة التحكم"
          >
            <span className="material-symbols-outlined">person</span>
          </Link>
          <button className="material-symbols-outlined text-[var(--on-surface-variant)] transition-transform duration-200 hover:text-[var(--brand-navy)] active:scale-95">
            shopping_bag
          </button>
        </div>
      </nav>
      {isMobileMenuOpen ? (
        <>
          <button
            type="button"
            aria-label="إغلاق القائمة"
            className="fixed inset-0 z-[55] bg-black/15 md:hidden"
            onClick={closeMobileMenu}
          />
          <div
            ref={mobileMenuRef}
            id="mobile-navbar-menu"
            className="fixed inset-x-4 top-[128px] z-[60] overflow-hidden rounded-2xl bg-gradient-to-b from-[color:var(--surface-container-lowest)] via-[color:var(--surface)] to-[color:var(--surface-container-low)] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm md:hidden"
          >
            <div
              dir="ltr"
              className="mb-5 flex items-center justify-between border-b border-[var(--brand-gold)]/25 pb-4"
            >
              <div className="text-left">
                <p className="font-arabic-display text-lg tracking-[0.2em] text-[var(--brand-gold)]">ZAHRA</p>
              </div>
              <span className="flex h-20 w-auto max-w-[220px] items-center sm:h-24 sm:max-w-[260px]">
                <Image
                  src="/logo-zahra-transparent.png"
                  alt="شعار زهرة"
                  width={371}
                  height={293}
                  sizes="(max-width: 640px) 220px, 280px"
                  className="h-full w-auto object-contain object-center"
                />
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <Link
                className="rounded-lg border border-transparent px-3 py-2 font-arabic-display text-base text-[var(--on-surface)] transition-all duration-300 hover:border-[var(--brand-gold)]/35 hover:bg-[color:var(--surface-container-low)] hover:text-[var(--brand-navy)]"
                href="/"
                onClick={closeMobileMenu}
              >
                الرئيسية
              </Link>
              <Link
                className="rounded-lg border border-transparent px-3 py-2 font-arabic-display text-base text-[var(--on-surface)] transition-all duration-300 hover:border-[var(--brand-gold)]/35 hover:bg-[color:var(--surface-container-low)] hover:text-[var(--brand-navy)]"
                href="/collections"
                onClick={closeMobileMenu}
              >
                المجموعات
              </Link>
              <Link
                className="rounded-lg border border-transparent px-3 py-2 font-arabic-display text-base text-[var(--on-surface)] transition-all duration-300 hover:border-[var(--brand-gold)]/35 hover:bg-[color:var(--surface-container-low)] hover:text-[var(--brand-navy)]"
                href="/editorial"
                onClick={closeMobileMenu}
              >
                عالم زهره
              </Link>
              <Link
                className="rounded-lg border border-transparent px-3 py-2 font-arabic-display text-base text-[var(--on-surface)] transition-all duration-300 hover:border-[var(--brand-gold)]/35 hover:bg-[color:var(--surface-container-low)] hover:text-[var(--brand-navy)]"
                href="/rings/aurora"
                onClick={closeMobileMenu}
              >
                هدايا
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
