import Link from "next/link";
import Image from "next/image";

export function SiteNavbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--outline-variant)]/30 bg-[color:var(--surface)]/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-4">
        <Link href="/" className="block">
          <span className="block h-[72px] w-[72px]">
            <Image
              src="/logo-zahra-cropped.png"
              alt="شعار زهرة"
              className="h-full w-full object-contain object-center"
              width={269}
              height={231}
              priority
            />
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link className="font-arabic-display text-lg text-[var(--on-surface-variant)] transition-colors duration-300 hover:text-[var(--brand-navy)]" href="/">
            الرئيسية
          </Link>
          <Link className="font-arabic-display text-lg text-[var(--on-surface-variant)] transition-colors duration-300 hover:text-[var(--brand-navy)]" href="/collections">
            المجموعات
          </Link>
          <Link className="font-arabic-display text-lg text-[var(--on-surface-variant)] transition-colors duration-300 hover:text-[var(--brand-navy)]" href="/editorial">
            عالم زهره
          </Link>
          <Link className="font-arabic-display text-lg text-[var(--on-surface-variant)] transition-colors duration-300 hover:text-[var(--brand-navy)]" href="/rings/aurora">
            هدايا
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-[var(--on-surface-variant)] transition-transform duration-200 hover:text-[var(--brand-navy)] active:scale-95">
            search
          </button>
          <button className="material-symbols-outlined text-[var(--on-surface-variant)] transition-transform duration-200 hover:text-[var(--brand-navy)] active:scale-95">
            person
          </button>
          <button className="material-symbols-outlined text-[var(--on-surface-variant)] transition-transform duration-200 hover:text-[var(--brand-navy)] active:scale-95">
            shopping_bag
          </button>
        </div>
      </nav>
    </header>
  );
}
