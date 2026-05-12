/* eslint-disable @next/next/no-img-element */
const bestSellers = [
  {
    title: 'سوار "أورا" الهندسي',
    price: "٤٥٠ ج.م",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSptFuxmo1CypEYqwSb8y64JqcmG3wvhDadMwmmMIRG86qmnonCUbx5b0LAr2CNwhNdbgfNGkzY4A9lzMWvBBiWmkK3eKj_8c64kw-iyz4-iwPEQl3B9JZLjtI2hZYP_Wy157UexPdUj-KGGjWNj6EpNNBkimeVBoLR_0jN_B7iKFUhuRKGqZEg7JUpxXVKz1QnP7xyP_1etxnRuCznvyT4fM6SPHerwEceNj5_ZKVbNuh01siCfcLz_7kHCxk2PnG-5AVhhlwRfM",
  },
  {
    title: "أقراط دائرية مصقولة",
    price: "٢٨٠ ج.م",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClPlRH5FVCvWdlzJlloJ7zaqKAnCpc0Czgizm8YRoLXJ02VGl7MQYFnPlDrGNX5HQsWoIt48ddcJC6zyZo2ZRVU4Kskm8euYkl_vd_PDC9LycMFY-P5ULfE9fie6fWNrOZ3-s1ipUhex3_XhwZZsi2hFG0uW2Yad689H6yAztoPjY6gllBfwChzNrCV0Se_baD35q7xpDGvgI1FERWiMrL4YnHxWQxC3FKlizE3NP2wfD_eLDMADtE-bE_Q1uk429dW7x4R7YPP9w",
  },
  {
    title: 'طقم خواتم "ثريا"',
    price: "٣٥٠ ج.م",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBowO1YFyATyyXqFqT1e8zAfnkurx7Q08vAosGNYQEXnic6ITD7Tf__rRzJz0XOlS_jstPiEKPCnjOK1KxNsQ6XnunPmFnCDYMWTf3Wb8hRA8lfrIss3HszVHRWUf7GhicU11U5Uob5TrgIC2XwKCzZyjyGmM4nbbEs-FBDg-IyO06E0nq8Sq9bgHkaUR18cO6XtS-h_NgSSwpxYLxIRxa0Y8ZmdiIAHO0hAHugD7iMWq3GzzsAzxMYvNZ5ndUlTl3zLFH5e18FX88",
  },
  {
    title: 'قلادة "لينير" الفضية',
    price: "٣٩٠ ج.م",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkzTMp7cXoiXc8DqxnZf9qZbRelimW8a3xbvTQ-d1_8Jg6SybvWjlLuYUiprzZBxH2mhn10oseyK7YZs7L-qYsbgbBkZ4FqMvTg0afjiBEzAzqdxaSx9cJk_a3-tkyPmU-Hmy4UD1fJtw5IYSPfB7HC_0JGPnq0yHzQ7nhYl-HOjeLfNmOwwfIzZR7cvpcOOBrIhnfh4xeJFQY-veeBb2BVehJO4WnIiBMPWWIQJwCwcCXskfbr2Gu0-1jTOS4ykZrZJRLxzAiWEE",
  },
];

export default function EditorialPage() {
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
              <div className="group relative flex-1 overflow-hidden border border-[var(--outline-variant)]/30">
                <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="الخواتم" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUb5pn1c377YbgHGywzpQbRjJuxjP9-S3VkzxdvRzK5bGYEU2We5PwwSO2vLb8cWSfQqgBCLyNmSdNpLBljfB6nxQcjFJPAhj5Dn-5KKC5z73eZA1qPLXQnU-6Uv8HHu52UKq-OnYCnNDdCVJ4dscUjDZaN8GKOLBKDjSc1l5O0I9N5WJabtTpJebJwW8V-aXg-tiszax3yWU8kGnETx8PRmh3PjT9tRZ0njEtkN8XR6IsA3CsPHEC4qS1D1pS4n_QU6OQyUBswx8" />
                <div className="absolute inset-0 bg-[var(--brand-navy)]/30" />
                <div className="absolute right-6 bottom-6">
                  <h3 className="font-arabic-display text-3xl text-white">الخواتم</h3>
                </div>
              </div>
              <div className="group relative flex-1 overflow-hidden border border-[var(--outline-variant)]/30">
                <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="القلاائد" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSUT5el2Sbj1aoxYJ-h5yq3x-Lc4T459DvHV348FdtPtn9wVGgKp2qw2A2l9Il6FJyvGcPXLJ8mfl9VYDVpBPA0gj5hxGlBmnqdUny1WZsyg4WNJtb4MG674K-GCY-J4psqM3oWCLhlIp2tejlLlZ8i73wXO16QatyeJMt-V5kSOg9Xo5CoBlMesSnj5J5Z5yUKlG4idgxDoU7LpzLmgGRl_-drJw50il2ZJlRfMQywieL5hfAPnHRDkX16ZLY0VPh2HLiriS4q5Q" />
                <div className="absolute inset-0 bg-[var(--brand-navy)]/30" />
                <div className="absolute right-6 bottom-6">
                  <h3 className="font-arabic-display text-3xl text-white">القلاائد</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-container-low)] py-20">
          <div className="mx-auto max-w-[1280px] px-10">
            <div className="mb-12 flex items-end justify-between">
              <div className="text-right">
                <span className="text-sm tracking-widest text-[var(--brand-navy)] uppercase">الأكثر مبيعا</span>
                <h2 className="mt-2 font-arabic-display text-4xl text-[var(--on-surface)]">قطع مختارة لكِ</h2>
              </div>
              <a href="/collections" className="flex items-center gap-2 text-sm text-[var(--on-surface-variant)] transition-colors hover:text-[var(--brand-navy)]">
                مشاهدة الكل
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {bestSellers.map((item) => (
                <div key={item.title} className="group">
                  <div className="relative mb-6 aspect-[3/4] overflow-hidden border border-[var(--outline-variant)]/20 bg-white transition-all duration-300 group-hover:border-[var(--brand-navy)]">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" alt={item.title} src={item.image} />
                    <button className="absolute bottom-0 w-full translate-y-full bg-[var(--brand-navy)] py-3 text-sm text-white transition-transform duration-300 group-hover:translate-y-0">
                      إضافة للسلة
                    </button>
                  </div>
                  <div className="text-center">
                    <h4 className="font-arabic-display text-xl text-[var(--on-surface)]">{item.title}</h4>
                    <p className="mt-1 text-[var(--on-surface-variant)]">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] bg-[var(--surface)] px-10 py-[120px]">
          <div className="flex flex-col items-center gap-[60px] md:flex-row-reverse">
            <div className="relative w-full flex-1">
              <div className="aspect-[4/5] overflow-hidden border border-[var(--outline-variant)]/30">
                <img className="h-full w-full object-cover" alt="قصة العلامة" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNDIibd8oPnMm9Se_HG1twakj56pFeKvJ11uOL9i3OIOW3xT70en0U1K34huu-2YNei3aGvMmc8ROSyxy8kpO8L7mk3PVNm2yFcpnETD_SSWOk-F8nNjHMB2Ay0xLYXWUX6I221_ldvJ4I6rBEkj5AP4spH_A5FyY-B273goKcxYfg6FmN5kYic7lt5Z4GB7FWXvDZeOpH5vOH5L-azMH_gNqCY5wtK3vdrHy5saJMft-ZBktPEcwY8S5fa2MdY7KIvICidk2OggA" />
              </div>
              <div className="absolute -bottom-10 -left-10 hidden h-48 w-48 border border-[var(--outline-variant)]/30 bg-[var(--surface)] p-4 lg:block">
                <div className="flex h-full w-full items-center justify-center border border-dashed border-[var(--outline-variant)]">
                  <span className="text-center text-sm text-[var(--brand-gold)]">
                    بصمة
                    <br /> &quot;زهرة&quot;
                  </span>
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
                <p className="text-[var(--on-surface-variant)]">شحن آمن ومجاني لجميع دول الخليج.</p>
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
            <span className="material-symbols-outlined cursor-pointer text-[var(--on-surface-variant)] opacity-80 transition-all hover:text-[var(--brand-navy)] hover:opacity-100">public</span>
            <span className="material-symbols-outlined cursor-pointer text-[var(--on-surface-variant)] opacity-80 transition-all hover:text-[var(--brand-navy)] hover:opacity-100">share</span>
            <span className="material-symbols-outlined cursor-pointer text-[var(--on-surface-variant)] opacity-80 transition-all hover:text-[var(--brand-navy)] hover:opacity-100">mail</span>
          </div>
          <div className="w-full border-t border-[var(--outline-variant)]/10 pt-8 text-center">
            <p dir="ltr" className="text-sm tracking-widest text-[var(--on-surface-variant)] uppercase">© ٢٠٢٤ زهرة. THE ART OF SILENCE.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
