import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const relatedProducts = [
  {
    name: "قلادة التاج الأبدي",
    price: "١,٢٠٠ ج.م",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCr9xHfl9rN2Cbgz5p-hwdh47VMCDngmff9Irh0PSmyN2ooNOzrhPPIJKaOwwNeLtRP8rHr891eXvqA6uQbKQSDbDWceb_JyhLpU3qegTMfLS5eSnOJkSJcis9xlxy09qf8w7iiUYZWZK04i1HSm9Ys9_3mlAjWBRVGWBeKhFnU6tpyzJ3LFHAs2pBIOr9PP6YOGkTAIVnfdJbkNmqkFirtfXgL3TihKxZRb1Bga1VV2S7hnNvmw_XotxKeSu-ta2BN-5C-5aqEYX8",
  },
  {
    name: "أقراط دائرية عصرية",
    price: "٤٥٠ ج.م",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLFu8kY2qpcUzNHRpQgBMUfr3_hpwQFabMIinrdvdjAuvk27b6Ixmrfehc2rliAIXnWklBPge4PJ50VGEcTx1StzKxIeQd_3cwqzVMqMjSxLWWs_yeS4tQ3SbxDN8z187sOn8lbdYyO1V_4htjHqPeurRmvaVvi20p0dyzoQ03jok_lLpTbzj21l_kDvxwvqupkz9Q6tcmSJmNRaf86Tcp0PcbgycEVqOXdw420BbxXOJIwalhpN-bH8tWCXHg6WKOSuEul9bopdI",
  },
  {
    name: "سوار النخبة المنسوج",
    price: "٨٩٠ ج.م",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCK1rmPbG8uheS7P0w0Km-3PG-WZBnvF3fh8fWiKmsPG6afSV6VS_L3r0aN6NXh6Rlvtw-B1vf7jUklDptaC_Zkvjw-elD1ECD2FDklXNFoRl6rhRRA4xChcauwzce4Z4dQEDDp_W5D0ngywIeNiBzJhpiu2h-I-qSO3RA2hC_76Cb1oC65VNtb6Jgl-hmgr5ajsNtIN99ML7sAF8P-11d5XjVjNxeTxiqkS64f8PrO-R-j1NQrgJjnyVp8NHxkppyWjEEgxfYhhEI",
  },
  {
    name: "مجموعة الخواتم الثلاثية",
    price: "٦٢٠ ج.م",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWIFEt48DmRhnf1vHqwA7ghGUEU5sywmTOp7ZimyZWwPAP3pjRTR7IXxoPDcgvJqQa5U1Pso2a9MIFU-i7I3yufz7AingVI6ipCxSgv49-olFyuTtGw-q2bgMKu8FkPRUukUq1q65Pon7-XcMJd2jQXtZzj4PKLs9zRlMez-0O1YUefvvZpuMYxR3C8vUqKoThgPBC-riRuFyX7aNUX1_mXP-7jLTX1_ztLQ_kOzRva3UgxTCUGhlX5cK4gmq3O4C5nAKsOLHNsKA",
  },
];

export default function AuroraRingPage() {
  return (
    <>
      <main className="mx-auto max-w-[1280px] px-6 pb-20 pt-[140px]">
        <nav className="mb-12">
          <ol className="flex flex-row-reverse items-center gap-2 text-sm text-[var(--on-surface-variant)]">
            <li><Link className="hover:text-[var(--primary)]" href="/">الرئيسية</Link></li>
            <li>/</li>
            <li><Link className="hover:text-[var(--primary)]" href="/collections">الخواتم</Link></li>
            <li>/</li>
            <li className="font-semibold text-[var(--primary)]">خاتم الأورورا الاستانلس</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="grid grid-cols-2 gap-4 lg:col-span-7">
            <div className="col-span-2 aspect-[4/5] overflow-hidden bg-[var(--surface-container)]">
              <img className="h-full w-full object-cover" alt="خاتم الأورورا" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA8o6nUIUUM2uGHzKiVddmy-0JGCvM3RiMs9v-2XvZQV5JwRarTOiiqzmhc2-3okKYuo7-vl5kBrmfqUmTE2_zstFoqr8Gewok-BHMoO3JaMy5lD4KruUucyzy7r5_bcpZpiM2V30codoN_h5JzdkycjPlahwAHsTlPPih7pfo_2pPL3gNy4L52o7cN_Ko0RN8ur6FO8XmESY1LXNEGKAXi4nU_Qx7i_ZZnjF3_CkmJ1Bz2nNUOp9XQsOAzEEnh-H_8pF2t2lEwrM" />
            </div>
            <div className="aspect-square overflow-hidden bg-[var(--surface-container)]">
              <img className="h-full w-full object-cover" alt="تفاصيل الخاتم" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlbQxKB20FF-9OR5_ASjE8RrcSyRKcq5-372Y7qBoeS25UlhAytn7KnxAVY6FK0OS7GYoiJGCMRV-GB_ozwjAp8Zv9G_i3mBjchM090QXH4KBIasP8MH09FdNNUWuTMQn8mpHiR0QnQzAFOpxsK5wWj_EU77jZdyYJnAGvMvGqjdL4EibBn4RaExCP_GNW4IV8giENupkVvEZAq9fvJr-7nsVyqf-O5I3jlZ5M0wY5yav73tWHlJ9_xJiALrvD5Dm3k8plt1Bo9Po" />
            </div>
            <div className="aspect-square overflow-hidden bg-[var(--surface-container)]">
              <img className="h-full w-full object-cover" alt="تغليف زهرة" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmIRmnJ5kpPXVXd0z_-VNZ0qgSRuG0MDbqMpnciHn5lUG3RE40gMmktZywOEkvnf0sp7kBPeIPqZz9KlL-OmncoLnmPz3ccnDSPs4l115vluav_Z2YnmlCuefyvjqUJE9s4kPaT2TVsW8xAoenuQ2E3L9GW21DmF6QdNa_jaL5c2yRNEfHGlf2_2AXSJhhnMYNpa8NogSLbbVTliGqDOFneODxxzuGRZfGJ4J_stuub7j7fi66vL_hnI-VdmnujyhSACrwZWid0uI" />
            </div>
          </div>

          <div className="sticky top-32 flex flex-col gap-8 lg:col-span-5">
            <div className="space-y-4">
              <span className="text-sm tracking-widest text-[var(--secondary)] uppercase">مجموعة الأورورا</span>
              <h1 className="font-arabic-display text-4xl text-[var(--on-surface)] md:text-5xl">خاتم الأورورا الاستانلس</h1>
              <div className="mt-2 flex items-center gap-4">
                <span className="font-arabic-display text-3xl text-[var(--primary)]">٧٥٠ ج.م</span>
                <span className="text-xl text-[var(--outline)] line-through">٩٥٠ ج.م</span>
              </div>
            </div>

            <div className="border-t border-[var(--outline-variant)] pt-6">
              <p className="leading-relaxed text-[var(--on-surface-variant)]">
                يجمع خاتم الأورورا بين المتانة المعمارية والأناقة العصرية. مصنوع من استانلس 316L المقاوم للصدأ، ليحافظ
                على لمعانه اليومي ويمنحك تحملا عاليا ضد الخدوش والعوامل الخارجية.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm text-[var(--primary)] uppercase">المقاس</label>
                <button className="text-sm text-[var(--outline)] underline">دليل المقاسات</button>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="flex h-12 w-12 items-center justify-center border border-[var(--secondary)] bg-[var(--secondary)] text-sm text-[var(--on-secondary)]">٥</button>
                <button className="flex h-12 w-12 items-center justify-center border border-[var(--outline-variant)] text-sm hover:border-[var(--secondary)]">٦</button>
                <button className="flex h-12 w-12 items-center justify-center border border-[var(--outline-variant)] text-sm hover:border-[var(--secondary)]">٧</button>
                <button className="flex h-12 w-12 cursor-not-allowed items-center justify-center border border-[var(--outline-variant)] text-sm line-through opacity-50">٨</button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button className="w-full bg-[var(--secondary)] py-5 text-sm tracking-widest text-white uppercase hover:opacity-90">
                إضافة إلى الحقيبة
              </button>
              <button className="w-full border border-[var(--secondary)] py-5 text-sm tracking-widest text-[var(--secondary)] uppercase transition-all hover:bg-[var(--secondary)] hover:text-white">
                شراء الآن
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-[var(--outline-variant)] pt-8">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[var(--secondary)]">verified</span>
                <div>
                  <h4 className="text-sm text-[var(--primary)]">ضمان الجودة</h4>
                  <p className="text-xs text-[var(--on-surface-variant)]">ضمان عامين ضد عيوب الصناعة</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[var(--secondary)]">local_shipping</span>
                <div>
                  <h4 className="text-sm text-[var(--primary)]">توصيل سريع</h4>
                  <p className="text-xs text-[var(--on-surface-variant)]">خلال ٢-٤ أيام عمل</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-[var(--outline-variant)] pt-12 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-arabic-display text-3xl text-[var(--primary)]">المواصفات</h3>
            <ul className="space-y-2 text-[var(--on-surface-variant)]">
              <li className="flex justify-between border-b border-[var(--outline-variant)]/30 pb-2"><span>المعدن</span><span>استانلس 316L</span></li>
              <li className="flex justify-between border-b border-[var(--outline-variant)]/30 pb-2"><span>الخامة</span><span>استانلس 316L مقاوم للصدأ</span></li>
              <li className="flex justify-between border-b border-[var(--outline-variant)]/30 pb-2"><span>العرض</span><span>٤ ملم</span></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-arabic-display text-3xl text-[var(--primary)]">العناية</h3>
            <p className="text-[var(--on-surface-variant)]">
              تم تصميم قطعنا لترافقك طوال اليوم. الاستانلس المقاوم للصدأ لا يحتاج لعناية خاصة، ولكننا ننصح بتنظيفه بقطعة قماش ناعمة
              وجافة للحفاظ على بريقه.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-arabic-display text-3xl text-[var(--primary)]">التغليف</h3>
            <p className="text-[var(--on-surface-variant)]">
              تصلك كل قطعة في علبة زهرة الفاخرة، مع بطاقة أصالة وحقيبة مخملية للحماية، مما يجعلها الهدية المثالية لك أو لمن تحب.
            </p>
          </div>
        </div>

        <section className="mt-20">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-arabic-display text-3xl text-[var(--primary)] md:text-4xl">قد يعجبك أيضا</h2>
            <a className="text-sm text-[var(--on-surface-variant)] underline transition-colors hover:text-[var(--primary)]" href="/collections">
              تسوق الكل
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <div key={item.name} className="group cursor-pointer">
                <div className="relative mb-4 aspect-[3/4] overflow-hidden">
                  <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.image} alt={item.name} />
                  <button className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center bg-[var(--surface)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="material-symbols-outlined text-[var(--secondary)] text-[20px]">add</span>
                  </button>
                </div>
                <h4 className="mb-1 text-center font-arabic-display text-xl text-[var(--primary)]">{item.name}</h4>
                <p className="text-center text-[var(--on-surface-variant)]">{item.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--outline-variant)]/20 bg-[var(--surface-container-lowest)]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-6 py-20">
          <div className="text-4xl tracking-widest text-[var(--brand-gold)] uppercase">ZAHRA</div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <a className="text-sm text-[var(--on-surface-variant)] uppercase transition-all duration-300 hover:text-[var(--primary)]" href="#">Sustainability</a>
            <a className="text-sm text-[var(--on-surface-variant)] uppercase transition-all duration-300 hover:text-[var(--primary)]" href="#">Shipping & Returns</a>
            <a className="text-sm text-[var(--on-surface-variant)] uppercase transition-all duration-300 hover:text-[var(--primary)]" href="#">Privacy Policy</a>
            <a className="text-sm text-[var(--on-surface-variant)] uppercase transition-all duration-300 hover:text-[var(--primary)]" href="#">Terms of Service</a>
            <a className="text-sm text-[var(--on-surface-variant)] uppercase transition-all duration-300 hover:text-[var(--primary)]" href="#">Contact</a>
          </div>
          <div className="flex w-full max-w-[400px] flex-col items-center gap-6">
            <div className="flex w-full border-b border-[var(--primary)] pb-2">
              <input className="w-full border-none bg-transparent text-center" placeholder="بريدك الإلكتروني" type="email" />
              <button className="material-symbols-outlined text-[var(--secondary)]">arrow_back</button>
            </div>
            <div className="flex gap-6">
              <a className="material-symbols-outlined text-[var(--secondary)] opacity-80 transition-opacity hover:opacity-100" href="#">public</a>
              <a className="material-symbols-outlined text-[var(--secondary)] opacity-80 transition-opacity hover:opacity-100" href="#">share</a>
              <a className="material-symbols-outlined text-[var(--secondary)] opacity-80 transition-opacity hover:opacity-100" href="#">mail</a>
            </div>
          </div>
          <a
            href="tel:+201515268898"
            dir="ltr"
            className="text-sm tracking-[0.08em] text-[var(--secondary)] transition-colors hover:text-[var(--primary)]"
          >
            +20 151 526 8898
          </a>
          <p dir="ltr" className="text-sm text-[var(--on-surface-variant)] uppercase">© 2024 ZAHRA. THE ART OF SILENCE.</p>
        </div>
      </footer>
    </>
  );
}
