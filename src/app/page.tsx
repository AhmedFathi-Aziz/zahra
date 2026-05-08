/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <main className="pt-20">
        <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-2">
          <div className="text-right">
            <h1 className="font-arabic-display mb-6 text-4xl leading-[1.2] text-[var(--brand-navy)] md:text-5xl">
              جوهر الأناقة الأبدية
            </h1>
            <p className="max-w-2xl text-lg leading-[1.6] text-[var(--on-surface-variant)]">
              نؤمن في زهرة أن المجوهرات ليست مجرد زينة، بل هي امتداد للقوة والجمال الذي يدوم للأبد.
            </p>
          </div>
          <div className="overflow-hidden border border-[var(--outline-variant)]/30 bg-[var(--surface-container-low)]">
            <img className="h-full w-full object-contain" alt="مجموعة مجوهرات فاخرة" src="/hero-main.png" />
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 py-20">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
            <div className="text-right md:col-span-5">
              <span className="mb-4 block font-sans text-xs tracking-[0.1em] text-[var(--brand-gold)] uppercase">قصتنا</span>
              <h2 className="font-arabic-display mb-8 text-3xl leading-[1.3] text-[var(--brand-navy)] md:text-4xl">
                رؤية تتجاوز الزمن
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-[var(--on-surface-variant)]">
                <p>بدأت رحلة زهرة من الرغبة في ابتكار قطع تجمع بين بريق الذهب وصلابة الفولاذ. نحن لا نصنع مجرد إكسسوارات؛ نحن نصمم قطعاً معمارية مصغرة ترافقك في أدق تفاصيل يومك.</p>
                <p>رؤيتنا هي تقديم &quot;الفخامة الهادئة&quot; التي لا تحتاج إلى صراخ لتُلاحظ، بل تفرض حضورها برقي تفاصيلها وجودة تصنيعها الفائقة.</p>
              </div>
            </div>
            <div className="relative md:col-span-7">
              <div className="aspect-[4/5] overflow-hidden bg-[var(--surface-container-low)]">
                <img
                  className="h-full w-full object-cover"
                  alt="عقد فولاذي بتكوين معماري"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLzSTVtegybh5MH8AZV5LaXy-ysduWgA_0dP8WEaZzIh0dIxx1bfOLaOaHyi6zyaBxcWaOgjMDgj7veVFdYVSW91D52OBhdTOoKUrpZSbolI6Z-nc2Afa8Pdnu5MpaXx5QkAA1eSeVJtYARSajtWARKdNITE9o5NSOPhdUOOSxQjqmLZJQPxjfNgJuYNhrrlLikI-zn6q0rP5CXuLdvLv3F9Rf29LSsf0P791RAFzYMw_Sud3IlnD5JoD0CP708sx8o3RotYpp3Is"
                />
              </div>
              <div className="absolute -right-10 -bottom-10 hidden aspect-square w-64 border border-[var(--outline-variant)]/30 bg-[color:var(--surface)]/80 p-4 backdrop-blur-sm md:block">
                <img
                  className="h-full w-full object-cover"
                  alt="تفاصيل فحص نقش المجوهرات"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf_YR7dzi69WL2u8IOxMpL8j2S7L6o2hteWzlOokvSiy0uRlrmtFXeFp5Z8kbgD7a2fuSKO5w-qL7roDU37aZy1GKW01ly3RBsonUnAiH3KGtazfh6JepSIahm_WWj1GusLF1Q5CliwHUVlE9JeMVdLeCwu5L911XdYACc2uwIIFKRV7PqBD4q1VS429cNkri2WwdFrCf4HG6QyB7gFquAAeH4C5r64zJkmPCWrLCZT8svIdcviwiUD4GKDCDryLXjNrNyltdf7VE"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-container-low)] py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mb-16 text-center">
              <h2 className="font-arabic-display text-3xl leading-[1.3] text-[var(--brand-navy)] md:text-4xl">
                حرفية التصنيع والطلاء
              </h2>
              <div className="mx-auto mt-6 h-px w-24 bg-[var(--brand-gold)]" />
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {[
                {
                  title: "طلاء PVD المتطور",
                  text: "نستخدم تقنية الترسيب الفيزيائي للبخار لضمان لون ذهبي يدوم لسنوات، عشر مرات أقوى من الطلاء التقليدي.",
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGI9hifaGep13g7_-i_jxsexoGhbTiSBVFWFUqbywQMKMmuus_3SzQgRUqazmVuyoTKx2cqzq7pM4khfNk4tjZRYTSNUeki9yReFy7FbKxPbLIHqsu8LJ9R3WMcaxaFXF2yXsAm4E4D5XQf5S8y2vAbEQwNydZXBsimeMtxiLC7WEVLk5VJmumEA6O3rCloaDUeoRmkkswggHPUfGcEzpe9XQiGkDPjoVjkS_VLGKr8CI4xHQxkLaexjDTGzypFyXXy4TdD4itEZk",
                  alt: "طلاء PVD للمجوهرات",
                },
                {
                  title: "تصميم معماري",
                  text: "كل قطعة تبدأ كرسم هندسي دقيق، مع مراعاة توازن الوزن وراحة الارتداء كأولوية قصوى.",
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBny20hU8RtWmrq7-hfF8MbUCCcWfYfJX4gIVOyKWT4Qe1s6megZnhnVc35FIYt4SQezypMkMNlmBYGaldVDAz80t08t2YbmcnVBUsVa--w9dq1umtqvoFV9ypUnns2pZwwujl49UivJu0aI3ZsvzZKVvSqF-x_42fTECB8_v86KDZGRpLsK7AExSqH2iMz2mdLZNPwAlJh9b77zQft_CyupM-ZuTgOwmVTNH1FZgh3gv2GQEuYDG6duyLprnNI6x39jQ0YJvDmjGk",
                  alt: "رسومات تصميم المجوهرات",
                },
                {
                  title: "صقل يدوي",
                  text: "تخضع كل قطعة لصقل يدوي دقيق للوصول إلى ملمس الحرير ولمعان الفولاذ النقي.",
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMZjw98PL2DwdcRIcri8LzzkX-QW-47ZqPu0U660VN1m-v1tU6Q9-9W0Y0HE2KKbnOYJajGRpCh9SWW-sVOBMWAk8cy5v19QRBmG-LkkPlMPjGTElFQmzEEh32w3kLJBBlQJtZu6l94jtOwIB65s9Dew-3u3TUOmmqeeM4-lWetwk8DwE_25WwLdtSVnYjD-i-cPQwI323JzMOfP4W4cN2WPEjb1kDoj16dJv0mBtVXKH30to9-DaCZwoD7heWIeIAK1hYnWtIL8s",
                  alt: "عملية الصقل اليدوي",
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center">
                  <div className="mb-8 aspect-square w-full overflow-hidden">
                    <img className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" alt={item.alt} src={item.src} />
                  </div>
                  <h3 className="font-arabic-display mb-4 text-2xl text-[var(--brand-navy)] md:text-3xl">{item.title}</h3>
                  <p className="text-base text-[var(--on-surface-variant)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 py-20">
          <h2 className="font-arabic-display mb-12 text-center text-3xl leading-[1.3] text-[var(--brand-navy)] md:text-4xl">
            لماذا الفولاذ المقاوم للصدأ؟
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2">
            <div className="flex flex-col justify-center border border-[var(--outline-variant)]/30 bg-white p-10 md:col-span-2 md:row-span-2">
              <span className="material-symbols-outlined mb-6 text-4xl text-[var(--brand-gold)]">water_drop</span>
              <h3 className="font-arabic-display mb-4 text-2xl text-[var(--brand-navy)] md:text-3xl">مقاوم تماماً للماء</h3>
              <p className="text-[var(--on-surface-variant)]">
                قطعنا مصممة لترافقك في السباحة، الاستحمام، والرياضة دون أن تفقد بريقها أو يتغير لونها. هي شريك حياتك اليومي بلا قلق.
              </p>
            </div>
            <div className="flex items-center gap-8 border border-[var(--outline-variant)]/30 bg-white p-8 md:col-span-2">
              <span className="material-symbols-outlined text-4xl text-[var(--brand-gold)]">health_and_safety</span>
              <div>
                <h3 className="font-arabic-display mb-2 text-xl text-[var(--brand-navy)] md:text-2xl">صديق للبشرة الحساسة</h3>
                <p className="text-base text-[var(--on-surface-variant)]">
                  معدن طبي 316L خالي من النيكل، مما يجعله الخيار الأمثل لمن يعانون من الحساسية.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center border border-[var(--outline-variant)]/30 bg-white p-8 text-center">
              <span className="material-symbols-outlined mb-4 text-4xl text-[var(--brand-gold)]">auto_awesome</span>
              <h3 className="mb-2 font-sans text-xs tracking-[0.1em] text-[var(--brand-navy)] uppercase">لا يحتاج عناية</h3>
              <p className="font-sans text-[13px] text-[var(--on-surface-variant)]">بريق يدوم دون الحاجة للتنظيف المستمر.</p>
            </div>
            <div className="flex flex-col justify-center border border-[var(--outline-variant)]/30 bg-white p-8 text-center">
              <span className="material-symbols-outlined mb-4 text-4xl text-[var(--brand-gold)]">eco</span>
              <h3 className="mb-2 font-sans text-xs tracking-[0.1em] text-[var(--brand-navy)] uppercase">معدن مستدام</h3>
              <p className="font-sans text-[13px] text-[var(--on-surface-variant)]">قابل لإعادة التدوير بنسبة 100% وبصمة كربونية أقل.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] border-t border-[var(--outline-variant)]/20 px-6 py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="font-arabic-display mb-6 text-3xl leading-[1.3] text-[var(--brand-navy)] md:text-4xl">
              اكتشفي مجموعتنا المختارة
            </h2>
            <p className="mb-10 text-[var(--on-surface-variant)]">انضمي إلى عالم زهرة واختاري قطعاً تعكس قوتك وأناقتك الفريدة.</p>
            <button className="bg-[var(--brand-navy)] px-12 py-4 font-sans text-xs tracking-[0.12em] text-white uppercase transition-all duration-300 hover:bg-[var(--brand-gold)] active:scale-95">
              تسوقي الآن
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--outline-variant)]/20 bg-[var(--surface-container-lowest)]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-6 py-20">
          <div className="text-4xl tracking-[0.1em] text-[var(--brand-gold)] uppercase">ZAHRA</div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <a className="font-sans text-xs text-[var(--on-surface-variant)] uppercase opacity-80 transition-all duration-300 hover:text-[var(--brand-navy)] hover:opacity-100" href="#">الاستدامة</a>
            <a className="font-sans text-xs text-[var(--on-surface-variant)] uppercase opacity-80 transition-all duration-300 hover:text-[var(--brand-navy)] hover:opacity-100" href="#">التوصيل والترجيع</a>
            <a className="font-sans text-xs text-[var(--on-surface-variant)] uppercase opacity-80 transition-all duration-300 hover:text-[var(--brand-navy)] hover:opacity-100" href="#">سياسة الخصوصية</a>
            <a className="font-sans text-xs text-[var(--on-surface-variant)] uppercase opacity-80 transition-all duration-300 hover:text-[var(--brand-navy)] hover:opacity-100" href="#">الشروط والأحكام</a>
            <a className="font-sans text-xs text-[var(--on-surface-variant)] uppercase opacity-80 transition-all duration-300 hover:text-[var(--brand-navy)] hover:opacity-100" href="#">تواصل معنا</a>
          </div>

          <div className="flex w-full flex-col items-center gap-4 border-t border-[var(--outline-variant)]/10 pt-8">
            <p dir="ltr" className="font-sans text-xs tracking-[0.1em] text-[var(--on-surface-variant)] uppercase">© 2024 ZAHRA. THE ART OF SILENCE.</p>
            <div className="flex gap-4">
              <a className="material-symbols-outlined text-[var(--on-surface-variant)] transition-colors hover:text-[var(--brand-navy)]" href="#">share</a>
              <a className="material-symbols-outlined text-[var(--on-surface-variant)] transition-colors hover:text-[var(--brand-navy)]" href="#">public</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
