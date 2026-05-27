import { CollectionsCatalog } from "@/components/collections-catalog";
import { SocialLinks } from "@/components/social-links";
import { getAllProducts } from "@/lib/products";

export default async function CollectionsPage() {
  const products = await getAllProducts();

  return (
    <>
      <main className="mx-auto max-w-[1280px] px-6 pt-[140px]">
        <section className="border-b border-[var(--outline-variant)] py-12">
          <nav className="mb-4">
            <span className="font-arabic-display text-sm text-[var(--on-surface-variant)]">الرئيسية / المجموعات</span>
          </nav>
          <h1 className="mb-2 font-arabic-display text-3xl text-[var(--primary)] md:text-4xl">المجموعات الحصرية</h1>
          <p className="max-w-2xl text-base text-[var(--on-surface-variant)] md:text-lg">
            استكشفي تشكيلة زهرة من اكسسوارات الاستانلس المقاومة للصدأ التي تجمع بين المتانة العالية والجمال الخالد.
          </p>
        </section>

        <CollectionsCatalog products={products} />
      </main>

      <footer className="mt-20 w-full border-t border-[var(--outline-variant)]/20 bg-[var(--surface-container-lowest)]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-6 py-20">
          <div className="text-4xl tracking-[0.15em] text-[var(--brand-gold)] uppercase">ZAHRA</div>
          <a
            href="tel:+201515268898"
            dir="ltr"
            className="text-sm tracking-[0.08em] text-[var(--secondary)] transition-colors hover:text-[var(--primary)]"
          >
            +20 151 526 8898
          </a>
          <SocialLinks />
          <div dir="ltr" className="text-sm tracking-wider text-[var(--on-surface-variant)] uppercase">
            © 2026 ZAHRA. THE ART OF SILENCE.
          </div>
        </div>
      </footer>
    </>
  );
}
