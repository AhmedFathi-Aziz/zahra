/* eslint-disable @next/next/no-img-element */
const products = [
  {
    title: "خاتم الأفق الهندسي",
    desc: "فولاذ مطلي بذهب عيار ١٨",
    price: "٤٥٠ ج.م",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYYMy8ItoUCNrb1o5eP_OIKlOqtH9vsjwRq62_LBaeNZM0p0KiIpcmil7zE-HwVrEyHP7GwI1UsfAbK-yyva0ctcbY5Ggmee_xF8pdm_sdJu6dTrLsYzSaSCMVO4MUXiluhaLM_bzzQFzOH3wYvkOg7FcMC4EnexLT9KSfdgtOG6tHnyLhoaJ-tkZX9EcXNaTiERJD-BT0JpRNIYo6PD_aUcbsEX1W5ApnskhLrSM_xyxzY6lpXdd7z6hSFpJ4r4f91WCidPROJiI",
  },
  {
    title: "أقراط الكسوف الفضية",
    desc: "فولاذ مصقول عالي الجودة",
    price: "٣٨٠ ج.م",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDp8FjA8FiozpJbRJyLThjOyNg1JRp7m2bV7_j0oQvPQOG321SZtaJ_yFVdBoD1Msy_IwGEZZnnh8GlMz_q4cFPZPq3lkjpFpPx-6uvJtO0w6kgSHXa18BjEKppP75XMNYRH0J8rNeId9W10S6Iy9SGbRRId35x-q3KKROvtfEAwDCbngBHlUW5XJrlLA3DQwgvIqLL_0Wcg-AnTifACgzQfgr39jcen7vpPHSo9fOotDG3fW-h-K-PK7ayBPRnGPZ6tbPrNdBu5ns",
  },
  {
    title: "قلادة الضوء العائمة",
    desc: "فولاذ مطلي بذهب وردي",
    price: "٥٢٠ ج.م",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmNdhVX-14YgTdEDmKAnMHeFgFYo7XnQI3UGWGZITS3S31FqyFCORd-_xfnIXH0Hndt994PogfB1EVIsQbuWFps7FBeSqC6lmGJYl-Mtc-m4DKeKYn8ZCCnwXN9DH3ZIwD03r678itm52ur2DsGfMH6shUnWBI4EmNa-IFaFMZ-e479Ur2kyd0_u7gV8HYm8NvEwvWnJaRN2AlMTfwos0tBntPD3dGMfSADyFHV7cYWzn1IUDmBIlUR7sFC2X80W8pPNmikNsTRjs",
  },
  {
    title: "سوار الهيكل الذهبي",
    desc: "فولاذ مطلي بذهب عيار ١٨",
    price: "٦٠٠ ج.م",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwLi6X9A0YGX21G9iBDefEjhW3Wp1_iX0Bqdu8Cvt7QsENKoOkA4FLfIdOMxl5dqLn8Evc0P_8Ll8aXX5p5rqjsF5rS1uPY8I01Yei5Vf3q4hB-_q9vlk7CQ7Cp3gFPiT6FnTkD7hlHIzXwfea3BcNP9tnC8_TfqigXt2HFdkSx99zJJsvmvUo6CD24ayQ08bDoYEdOhzEUxvG0FC2MYV0lRzktwasoy6sXS8xnlbmt-CPrmMfs2dVTX9Y4zUVntcTKWxbU-POZlc",
  },
  {
    title: "أقراط المنشور المصغرة",
    desc: "فولاذ مصقول",
    price: "٢٥٠ ج.م",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlPO7es6bMdOd9IcQxmBiuLZy72pxu2DT-XeqzTKdeRVchpYKBgAjgCYC7vffNiyu2MbLfSAyb4f3baVhXDv2ckWqGlKcZk2u94tT1-2YZjyB1vY2wQuu29otljLpCftBNPOM3R2Bm4NeVJmd2x0fL3DTi0LSQOr7biMNFRvlr67b10NV8kXaKvdoAWyI_OXRT41_BFnUVYiyjPfLB0N9L-gGjvxbUMRUMVZ6lrniINDS4JaUN2fVxIpAhap2-dUaBgIRtMJzBwMU",
  },
  {
    title: "قلادة الطبقات المتوازية",
    desc: "فولاذ مطلي بذهب عيار ١٨",
    price: "٤٨٠ ج.م",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUXFQUDJryii9QlnnPG-6soC0hKY3KfOR84dAWdF81xAVWPbn6Caad4-Y-xAKcs2p66_1AOjr077WmRmyvQKyMqyh8JyPAau19-L5wvXOD4scLJGCsBz9UG-UMl5In3I0OPa1okulI2NC54qPy-Q79kyNGDNQsR51HTCUNj2NOWe8AXnhY-cmvH_0icZDLDbYp1B8_cYnpOIuTfPeREe-0IBSAL6DIH401osQui3fSj5hz-0WMNJNJrUHkAWNboKwlR4rOIxySlFk",
  },
];

export default function CollectionsPage() {
  return (
    <>
      <main className="mx-auto max-w-[1280px] px-6 pt-20">
        <section className="border-b border-[var(--outline-variant)] py-12">
          <nav className="mb-4">
            <span className="font-arabic-display text-sm text-[var(--on-surface-variant)]">الرئيسية / المجموعات</span>
          </nav>
          <h1 className="mb-2 font-arabic-display text-3xl text-[var(--primary)] md:text-4xl">المجموعات الحصرية</h1>
          <p className="max-w-2xl text-base text-[var(--on-surface-variant)] md:text-lg">
            استكشفي تشكيلة زهرة من الإكسسوارات الفولاذية المطلية التي تجمع بين المتانة العالية والجمال الخالد.
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

            <div>
              <h3 className="mb-4 font-arabic-display text-base text-[var(--primary)]">السعر</h3>
              <div className="relative pt-1">
                <input className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-[var(--outline-variant)] accent-[var(--secondary)]" type="range" />
                <div className="mt-2 flex justify-between text-sm text-[var(--on-surface-variant)]">
                  <span>٠ ج.م</span>
                  <span>٥٠٠٠ ج.م</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-arabic-display text-base text-[var(--primary)]">اللون</h3>
              <div className="space-y-3">
                {[
                  ["#D4AF37", "ذهب أصفر"],
                  ["#E5E4E2", "فضي"],
                  ["#B76E79", "ذهب وردي"],
                ].map(([swatch, label]) => (
                  <label key={label} className="group flex cursor-pointer items-center gap-3">
                    <span className="h-5 w-5 rounded-full border border-[var(--outline-variant)]" style={{ backgroundColor: swatch }} />
                    <span className="text-sm text-[var(--on-surface-variant)] transition-colors group-hover:text-[var(--primary)]">{label}</span>
                    <input className="mr-auto rounded-sm border-[var(--outline-variant)] text-[var(--secondary)]" type="checkbox" />
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-grow">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm text-[var(--on-surface-variant)]">عرض ٢٤ منتج</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[var(--on-surface-variant)]">ترتيب حسب:</span>
                <select className="cursor-pointer bg-transparent p-0 text-sm text-[var(--primary)]">
                  <option>الأحدث</option>
                  <option>السعر: من الأقل للأعلى</option>
                  <option>السعر: من الأعلى للأقل</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div key={product.title} className="group relative">
                  <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-[var(--surface-container-low)]">
                    <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={product.image} alt={product.title} />
                    <div className="absolute inset-0 flex items-end justify-center bg-[var(--secondary)]/5 pb-6 opacity-0 transition-opacity group-hover:opacity-100">
                      <button className="bg-[var(--secondary)] px-8 py-3 text-sm text-[var(--on-secondary)] transition-all hover:bg-[var(--primary)]">
                        إضافة سريعة
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="mb-1 font-arabic-display text-xl text-[var(--primary)]">{product.title}</h3>
                    <p className="mb-2 text-sm text-[var(--on-surface-variant)]">{product.desc}</p>
                    <span className="font-semibold text-[var(--secondary)]">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 flex items-center justify-center gap-4">
              <button className="flex h-10 w-10 items-center justify-center border border-[var(--outline-variant)] text-[var(--secondary)] transition-all hover:border-[var(--secondary)]">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
              <button className="flex h-10 w-10 items-center justify-center bg-[var(--secondary)] text-sm text-[var(--on-secondary)]">١</button>
              <button className="flex h-10 w-10 items-center justify-center border border-[var(--outline-variant)] text-sm text-[var(--on-surface-variant)] transition-all hover:border-[var(--secondary)] hover:text-[var(--secondary)]">٢</button>
              <button className="flex h-10 w-10 items-center justify-center border border-[var(--outline-variant)] text-sm text-[var(--on-surface-variant)] transition-all hover:border-[var(--secondary)] hover:text-[var(--secondary)]">٣</button>
              <button className="flex h-10 w-10 items-center justify-center border border-[var(--outline-variant)] text-[var(--secondary)] transition-all hover:border-[var(--secondary)]">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 w-full border-t border-[var(--outline-variant)]/20 bg-[var(--surface-container-lowest)]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-6 py-20">
          <div className="text-4xl tracking-[0.15em] text-[var(--brand-gold)] uppercase">ZAHRA</div>

          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            <a className="text-sm text-[var(--on-surface-variant)] opacity-80 transition-all hover:text-[var(--primary)] hover:opacity-100" href="#">Sustainability</a>
            <a className="text-sm text-[var(--on-surface-variant)] opacity-80 transition-all hover:text-[var(--primary)] hover:opacity-100" href="#">Shipping & Returns</a>
            <a className="text-sm text-[var(--on-surface-variant)] opacity-80 transition-all hover:text-[var(--primary)] hover:opacity-100" href="#">Privacy Policy</a>
            <a className="text-sm text-[var(--on-surface-variant)] opacity-80 transition-all hover:text-[var(--primary)] hover:opacity-100" href="#">Terms of Service</a>
            <a className="text-sm text-[var(--on-surface-variant)] opacity-80 transition-all hover:text-[var(--primary)] hover:opacity-100" href="#">Contact</a>
          </nav>

          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-[var(--secondary)]">اشتركي ليصلك جديدنا وعروضنا الحصرية.</p>
            <div className="flex w-full max-w-sm border-b border-[var(--secondary)] pb-1">
              <input className="w-full border-none bg-transparent p-0 text-center" placeholder="البريد الإلكتروني" type="email" />
              <button className="material-symbols-outlined text-[var(--secondary)]">arrow_back</button>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-6 border-t border-[var(--outline-variant)]/20 pt-8">
            <div className="flex gap-8">
              <a className="text-sm text-[var(--secondary)] transition-colors hover:text-[var(--primary)]" href="#">Instagram</a>
              <a className="text-sm text-[var(--secondary)] transition-colors hover:text-[var(--primary)]" href="#">Twitter</a>
              <a className="text-sm text-[var(--secondary)] transition-colors hover:text-[var(--primary)]" href="#">Pinterest</a>
            </div>
            <div dir="ltr" className="text-sm tracking-wider text-[var(--on-surface-variant)] uppercase">© 2024 ZAHRA. THE ART OF SILENCE.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
