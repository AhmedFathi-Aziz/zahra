"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "المنتجات", icon: "diamond" },
  { href: "/admin/products/new", label: "إضافة تحفة", icon: "add_circle" },
];

export function AdminNav() {
  const pathname = usePathname();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <header className="border-b border-[var(--brand-gold)]/20 bg-[var(--brand-navy)] text-white">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link href="/admin" className="group flex flex-col">
            <span className="font-arabic-display text-xs tracking-[0.35em] text-[var(--brand-gold)]">ZAHRA</span>
            <span className="text-sm text-white/70 transition-colors group-hover:text-white">لوحة التحكم</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all ${
                    active
                      ? "bg-white/10 text-[var(--brand-gold)]"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{link.icon}</span>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/collections"
            target="_blank"
            className="hidden items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm text-white/70 transition-all hover:border-[var(--brand-gold)]/40 hover:text-white sm:flex"
          >
            <span className="material-symbols-outlined text-[18px]">storefront</span>
            عرض المتجر
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            خروج
          </button>
        </div>
      </div>
    </header>
  );
}
