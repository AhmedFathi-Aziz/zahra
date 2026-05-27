/* eslint-disable @next/next/no-img-element */
import { ProductCard } from "@/components/product-card";
import { SocialLinks } from "@/components/social-links";
import { getEditorialCategoryImage, getFeaturedProducts } from "@/lib/products";

export default async function EditorialPage() {
  const [ringsVisual, necklacesVisual, featuredProducts] = await Promise.all([
    getEditorialCategoryImage("rings", ["خاتم-ندى-الزهرة", "خاتم-جناح-حورس", "خاتم-عين-حورس"]),
    getEditorialCategoryImage("necklaces", ["سلسة-عين-حورس", "سلسلة-أثر", "سلسلة-مفتاح-الحياة"]),
    getFeaturedProducts(),
  ]);

  return (
    <>
      <main className="pt-[140px]">
        <section className="relative flex h-[870px] w-full items-center overflow-hidden bg-[var(--surface-container-low)]">
          <div className="absolute inset-0 h-full w-full">
            <img
              className="h-full w-full object-cover brightness-95 grayscale-[20%]"
              alt="مجموعة صيف 2024"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQL755LYF7f-E-zdNnMStKBhLEsahFVn4oOs92T1ODlRd8PpOc4IzIc1gKSwxrP0eAEjpmij8Topc0Sdg83vPGgG2Vfi9S3XhT0nXXhrqPxYDE7bYAPRfXPxALOJERXoqZP3gChtQwEtOxa44auFhI-84fSFdvWzL_3wp1ZeTKv1dVcjLLqRA_k29G0KWA0YLLJESvrQr2sY0hih1zHpPNPI6O-8Z_1OrNZNdo-fpnTZqtpr9PNs0VDuTsx2mSF1WafaZdMZPK0v4"
            />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-10">
            <div className="flex max-w-xl flex-col items-start border border-white/40 bg-[var(--surface)]/60 p-10 text-right backdrop-blur-md">
              <span className="mb-4 text-sm tracking-[0.2em] text-[var(--brand-navy)] uppercase">مجموعة صيف ٢٠٢٤</span>
              <h1 className="mb-6 font-arabic-display text-5xl leading-[1.2] text-[var(--on-surface)]">
                جمال يدوم،
                <br />
                استانلس يدوم.
              </h1>
              <p className="mb-8 max-w-md text-lg text-[var(--on-surface-variant)]">
                اكسسوارات استانلس مقاومة للصدأ، مصممة بدقة معمارية تجمع بين الصلابة والأناقة الخالدة.
              </p>
              <button className="bg-[var(--brand-navy)] px-10 py-4 text-sm text-white">تسوقي المجموعة</button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-10 py-20">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="group relative h-[600px] flex-[1.5] overflow-hidden border border-[var(--outline-variant)]/30">
              <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="الأقراط" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAspNR6MrH5J2sXOH4_D_mCZXY1d-n20HIukenAqmZP9w4pfgAkKuFWhySxhC1Hma_bbQedHtbQ0I_U9Ocj_cTBj6dtHcAEcHj-PYghdkxTYJoz94nVZBd6lWFZto1qtbbfuhX24E38EZqlDdJ_aAMpOrHvZ8mk9L66wjfKQB4I7qcVRLp45HAxid6-M6cakj_FUX7fXTqLjKYwCtULOGy8_ZTp_oU9E8tdkDllOXscQXce9l39LNZzyyMg8opoT-ZG3EDj_X0Za08" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/60 to-transparent" />
              <div className="absolute right-10 bottom-10">
                <h3 className="mb-2 font-arabic-display text-3xl text-white">الأقراط</h3>
                <a href="/collections" className="text-sm text-white underline underline-offset-8">استكشفي الآن</a>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <a
                href="/collections"
                className="group relative flex-1 overflow-hidden border border-[var(--outline-variant)]/30"
              >
                {ringsVisual.image ? (
                  <img
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    alt={ringsVisual.alt || "الخواتم"}
                    src={ringsVisual.image}
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/70 via-[var(--brand-navy)]/20 to-transparent" />
                <div className="absolute right-6 bottom-6">
                  <h3 className="font-arabic-display text-3xl text-white">الخواتم</h3>
                  <span className="mt-1 block text-sm text-white/80 underline underline-offset-4">استكشفي الآن</span>
                </div>
              </a>
              <a
                href="/collections"
                className="group relative flex-1 overflow-hidden border border-[var(--outline-variant)]/30"
              >
                {necklacesVisual.image ? (
                  <img
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    alt={necklacesVisual.alt || "سلاسل"}
                    src={necklacesVisual.image}
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/70 via-[var(--brand-navy)]/20 to-transparent" />
                <div className="absolute right-6 bottom-6">
                  <h3 className="font-arabic-display text-3xl text-white">سلاسل</h3>
                  <span className="mt-1 block text-sm text-white/80 underline underline-offset-4">استكشفي الآن</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-container-low)] py-20">
          <div className="mx-auto max-w-[1280px] px-10">
            <div className="mb-12 flex items-end justify-between">
              <div className="text-right">
                <span className="text-sm tracking-widest text-[var(--brand-navy)] uppercase">قطع مميزة</span>
                <h2 className="mt-2 font-arabic-display text-4xl text-[var(--on-surface)]">تحف مختارة من زهرة</h2>
              </div>
              <a href="/collections" className="flex items-center gap-2 text-sm text-[var(--on-surface-variant)] transition-colors hover:text-[var(--brand-navy)]">
                مشاهدة الكل
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              </a>
            </div>
            {featuredProducts.length === 0 ? (
              <div className="py-16 text-center">
                <span className="material-symbols-outlined mb-4 text-5xl text-[var(--brand-gold)]">diamond</span>
                <p className="font-arabic-display text-xl text-[var(--primary)]">لا توجد قطع مميزة حالياً</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] bg-[var(--surface)] px-4 py-16 sm:px-6 md:px-10 md:py-[120px]">
          <div className="flex flex-col items-center gap-10 md:flex-row-reverse md:items-start md:gap-[60px]">
            <div className="relative w-full min-w-0 flex-1 pb-10 sm:pb-12">
              <div className="relative aspect-[4/5] overflow-hidden border border-[var(--outline-variant)]/30 bg-[var(--surface-container-low)]">
                <img
                  className="h-full w-full object-cover object-center"
                  alt="نسمة الخلود — تحفة فنية فريدة من زهرة"
                  src="/editorial/nesmat-al-kholoud-photo.png"
                />
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
            <div className="flex-1 text-right">
              <span className="text-sm tracking-widest text-[var(--brand-navy)] uppercase">قصة علامتنا</span>
              <h2 className="mt-6 mb-8 font-arabic-display text-5xl leading-tight text-[var(--on-surface)]">فلسفة القوة والنعومة.</h2>
              <p className="mb-6 text-lg text-[var(--on-surface-variant)]">
                في &quot;زهرة&quot;، نؤمن أن الإكسسوارات ليست مجرد زينة، بل هي تعبير عن الشخصية. اخترنا الاستانلس المقاوم للصدأ لأنه يجسد التوازن المثالي
                بين القوة التي لا تلين والجمال الذي لا يبهت.
              </p>
              <p className="mb-10 text-lg text-[var(--on-surface-variant)]">
                تصاميمنا مستوحاة من العمارة الحديثة، حيث تلتقي الخطوط الحادة مع الانحناءات الرقيقة، لتقدم لكِ قطعا تدوم مدى
                الحياة وتتحدى تقلبات الموضة.
              </p>
              <button className="border border-[var(--brand-navy)] px-10 py-4 text-sm text-[var(--brand-navy)] transition-all duration-300 hover:bg-[var(--brand-navy)] hover:text-white">
                اكتشفي حرفيتنا
              </button>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--outline-variant)]/20 bg-white py-20">
          <div className="mx-auto max-w-[1280px] px-10">
            <div className="flex flex-col justify-around gap-6 md:flex-row-reverse">
              <div className="mx-auto flex max-w-[250px] flex-col items-center text-center">
                <span className="material-symbols-outlined mb-4 text-[40px] text-[var(--brand-navy)]">verified</span>
                <h5 className="mb-2 font-arabic-display text-xl text-[var(--on-surface)]">جودة مستدامة</h5>
                <p className="text-[var(--on-surface-variant)]">استانلس مقاوم للصدأ يحافظ على بريقه للأبد.</p>
              </div>
              <div className="mx-auto flex max-w-[250px] flex-col items-center text-center">
                <span className="material-symbols-outlined mb-4 text-[40px] text-[var(--brand-navy)]">local_shipping</span>
                <h5 className="mb-2 font-arabic-display text-xl text-[var(--on-surface)]">توصيل سريع</h5>
                <p className="text-[var(--on-surface-variant)]">شحن آمن وسريع لجميع المحافظات.</p>
              </div>
              <div className="mx-auto flex max-w-[250px] flex-col items-center text-center">
                <span className="material-symbols-outlined mb-4 text-[40px] text-[var(--brand-navy)]">package_2</span>
                <h5 className="mb-2 font-arabic-display text-xl text-[var(--on-surface)]">تغليف فاخر</h5>
                <p className="text-[var(--on-surface-variant)]">تصلكِ في علبة مخملية تليق بجمال اختياركِ.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--outline-variant)]/20 bg-[var(--surface-container-lowest)]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-6 py-20">
          <div className="flex flex-col items-center">
            <div className="mb-6 text-4xl tracking-widest text-[var(--brand-gold)] uppercase">ZAHRA</div>
            <p className="max-w-[450px] text-center text-[var(--on-surface-variant)]">
              وجهتكم الأولى لاكسسوارات الاستانلس المقاومة للصدأ التي تجمع بين الحداثة والخلود.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <a href="/collections" className="text-sm text-[var(--on-surface-variant)] transition-all duration-300 hover:text-[var(--brand-navy)]">المجموعات</a>
            <a className="text-sm text-[var(--on-surface-variant)] transition-all duration-300 hover:text-[var(--brand-navy)]">عن زهرة</a>
            <a className="text-sm text-[var(--on-surface-variant)] transition-all duration-300 hover:text-[var(--brand-navy)]">سياسة الخصوصية</a>
            <a className="text-sm text-[var(--on-surface-variant)] transition-all duration-300 hover:text-[var(--brand-navy)]">تواصل معنا</a>
            <a className="text-sm text-[var(--on-surface-variant)] transition-all duration-300 hover:text-[var(--brand-navy)]">الشحن والترجيع</a>
          </div>
          <div className="w-full max-w-md">
            <h6 className="mb-4 text-center text-sm tracking-wider text-[var(--on-surface)] uppercase">اشتركي في نشرتنا</h6>
            <div className="flex w-full">
              <button className="bg-[var(--brand-navy)] px-6 py-2 text-sm text-white transition-opacity hover:opacity-90">اشتراك</button>
              <input className="flex-1 border-b border-[var(--brand-navy)] bg-transparent px-4 text-right" placeholder="بريدك الإلكتروني" type="email" />
            </div>
          </div>
          <a
            href="tel:+201515268898"
            dir="ltr"
            className="text-sm tracking-[0.08em] text-[var(--brand-navy)] transition-colors hover:text-[var(--brand-gold)]"
          >
            +20 151 526 8898
          </a>
          <div className="flex gap-8">
            <SocialLinks />
          </div>
          <div className="w-full border-t border-[var(--outline-variant)]/10 pt-8 text-center">
            <p dir="ltr" className="text-sm tracking-widest text-[var(--on-surface-variant)] uppercase">© ٢٠٢٦ زهرة. THE ART OF SILENCE.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
