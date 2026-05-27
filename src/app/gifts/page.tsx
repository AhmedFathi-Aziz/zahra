/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { SocialLinks } from "@/components/social-links";
import { ZahraSignatureSection } from "@/components/zahra-signature-section";
import { getFeaturedProducts, getProductCoverImage } from "@/lib/products";

const giftHighlights = [
  {
    icon: "package_2",
    title: "تغليف فاخر",
    text: "كل قطعة تصل في علبة زهرة مع حقيبة مجوهرات وكيس قماشي للحفظ.",
  },
  {
    icon: "redeem",
    title: "بطاقة أصالة",
    text: "بطاقة تعريف خاصة تحمل اسم القطعة وقصتها الفنية، مع بطاقة شكر من زهرة.",
  },
  {
    icon: "card_giftcard",
    title: "لمسة إضافية",
    text: "هدية رمزية من زهرة تضيف لمسة استثنائية لتجربة الاستلام.",
  },
];

export default async function GiftsPage() {
  const featured = await getFeaturedProducts();
  const heroProduct = featured[0] ?? null;
  const heroImage = heroProduct ? getProductCoverImage(heroProduct) : "/hero-main.png";

  return (
    <>
      <main className="pt-[140px]">
        <section className="mx-auto max-w-[1280px] px-4 pb-12 pt-8 sm:px-6">
          <nav className="mb-6">
            <span className="font-arabic-display text-sm text-[var(--on-surface-variant)]">الرئيسية / هدايا</span>
          </nav>

          <div className="grid min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="text-right">
              <span className="mb-4 block text-sm tracking-[0.25em] text-[var(--brand-gold)] uppercase">
                ZAHRA · GIFTS
              </span>
              <h1 className="mb-6 font-arabic-display text-4xl leading-[1.2] text-[var(--brand-navy)] md:text-5xl">
                هدايا تحكي
                <br />
                قصة لا تُنسى
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--on-surface-variant)]">
                في زهرة، الهدية ليست مجرد قطعة مجوهرات — بل تجربة كاملة من التغليف إلى اللحظة الأولى للاستلام.
                اختاري تحفة فنية تليق بمن تحبين.
              </p>
              <a
                href="https://wa.me/201515268898?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%20%D9%87%D8%AF%D9%8A%D8%A9%20%D9%85%D9%86%20ZAHRA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--brand-navy)] px-10 py-4 text-sm tracking-widest text-white uppercase transition-all hover:bg-[var(--brand-gold)]"
              >
                اطلبي هدية عبر واتساب
              </a>
            </div>

            <div className="relative min-w-0 pb-10 sm:pb-12">
              <div className="overflow-hidden border border-[var(--outline-variant)]/30 bg-[var(--surface-container-low)]">
                <div className="relative aspect-[4/5] w-full">
                  <img
                    className="h-full w-full max-w-full object-contain object-center md:object-cover"
                    src={heroImage ?? "/hero-main.png"}
                    alt={heroProduct?.title ?? "هدية من زهرة"}
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 left-0 z-10 h-32 w-32 border border-[var(--outline-variant)]/30 bg-[var(--surface)]/95 p-3 shadow-sm backdrop-blur-sm sm:-bottom-6 sm:h-40 sm:w-40 sm:p-4 md:h-44 md:w-44">
                <div className="flex h-full w-full flex-col items-center justify-center border border-dashed border-[var(--brand-gold)]/40">
                  <span className="text-center font-arabic-display text-lg text-[var(--brand-gold)] sm:text-xl">
                    بصمة
                  </span>
                  <span className="mt-1 text-center font-arabic-display text-base text-[var(--brand-navy)] sm:text-lg">
                    &quot;زهرة&quot;
                  </span>
                  <p className="mt-2 max-w-[120px] text-center text-[10px] leading-relaxed text-[var(--on-surface-variant)] sm:text-xs">
                    كل قطعة تحمل روح الفن وجمال التفاصيل.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--outline-variant)]/20 bg-[var(--surface-container-low)] py-16">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-arabic-display text-3xl text-[var(--brand-navy)] md:text-4xl">تجربة الهدية من زهرة</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[var(--on-surface-variant)]">
                صُممت كل تفاصيل التغليف لتكون جزءًا من جمال القطعة نفسها.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {giftHighlights.map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined mb-4 text-[40px] text-[var(--brand-gold)]">{item.icon}</span>
                  <h3 className="mb-3 font-arabic-display text-xl text-[var(--brand-navy)]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--on-surface-variant)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row-reverse sm:items-end sm:justify-between">
            <div className="text-right">
              <span className="text-sm tracking-widest text-[var(--brand-navy)] uppercase">اختيارات مميزة</span>
              <h2 className="mt-2 font-arabic-display text-3xl text-[var(--on-surface)] md:text-4xl">هدايا من تحفنا</h2>
            </div>
            <Link
              href="/collections"
              className="flex items-center gap-2 text-sm text-[var(--on-surface-variant)] transition-colors hover:text-[var(--brand-navy)]"
            >
              مشاهدة كل المجموعات
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            </Link>
          </div>

          {featured.length === 0 ? (
            <div className="py-16 text-center">
              <span className="material-symbols-outlined mb-4 text-5xl text-[var(--brand-gold)]">redeem</span>
              <p className="font-arabic-display text-xl text-[var(--primary)]">قريباً — هدايا جديدة</p>
              <Link href="/collections" className="mt-6 inline-block text-sm text-[var(--brand-navy)] underline">
                استكشفي المجموعات
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>

        <section className="mx-auto max-w-[1280px] px-4 pb-20 sm:px-6">
          <ZahraSignatureSection signature="في كل هدية من زهرة... تزهر لحظة لا تشبه سواكِ." />
        </section>
      </main>

      <footer className="border-t border-[var(--outline-variant)]/20 bg-[var(--surface-container-lowest)]">
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
