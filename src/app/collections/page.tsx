import { ProductCard } from "@/components/product-card";
import { getAllProducts } from "@/lib/products";
import { toArabicNumerals } from "@/lib/format";

export default async function CollectionsPage() {
  const products = getAllProducts();

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

        <div className="flex flex-col gap-6 py-10 md:flex-row-reverse">
          <aside className="w-full flex-shrink-0 space-y-10 md:w-64">
            <div>
              <h3 className="mb-4 font-arabic-display text-base text-[var(--primary)]">الفئة</h3>
              <div className="flex flex-wrap gap-2">
                <button className="rounded-full bg-[var(--secondary)] px-4 py-2 text-sm text-[var(--on-secondary)]">الكل</button>
                <button className="rounded-full border border-[var(--outline-variant)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--on-surface-variant)] hover:border-[var(--primary)]">أقراط</button>
                <button className="rounded-full border border-[var(--outline-variant)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--on-surface-variant)] hover:border-[var(--primary)]">خواتم</button>
                <button className="rounded-full border border-[var(--outline-variant)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--on-surface-variant)] hover:border-[var(--primary)]">أساور</button>
              </div>
            </div>
          </aside>

          <div className="flex-grow">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm text-[var(--on-surface-variant)]">
                عرض {toArabicNumerals(products.length)} {products.length === 1 ? "منتج" : "منتج"}
              </span>
            </div>

            {products.length === 0 ? (
              <div className="py-20 text-center">
                <span className="material-symbols-outlined mb-4 text-5xl text-[var(--brand-gold)]">diamond</span>
                <p className="font-arabic-display text-xl text-[var(--primary)]">قريباً — تحف جديدة</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
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
          <div dir="ltr" className="text-sm tracking-wider text-[var(--on-surface-variant)] uppercase">
            © 2024 ZAHRA. THE ART OF SILENCE.
          </div>
        </div>
      </footer>
    </>
  );
}
