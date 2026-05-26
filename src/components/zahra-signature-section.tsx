const DEFAULT_SIGNATURE =
  "في كل قطعة من زهرة... تزهر قصة لا تشبه سواكِ.";

type ZahraSignatureSectionProps = {
  signature?: string;
};

export function ZahraSignatureSection({ signature }: ZahraSignatureSectionProps) {
  const text = signature?.trim() || DEFAULT_SIGNATURE;

  return (
    <section className="mt-20" aria-labelledby="zahra-signature-heading">
      <div className="relative overflow-hidden border border-[var(--brand-gold)]/25 bg-gradient-to-bl from-[var(--brand-navy)] via-[#0a2540] to-[var(--brand-navy)] px-5 py-10 text-white sm:px-8 sm:py-14 md:px-14 md:py-16">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--brand-gold)]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[var(--brand-gold)]/5 blur-2xl" />

        <div className="relative flex min-w-0 flex-col items-center gap-8 text-center sm:gap-10 md:flex-row-reverse md:items-center md:gap-16 md:text-right">
          <div className="flex shrink-0 items-center justify-center">
            <div className="flex h-28 w-28 flex-col items-center justify-center border border-dashed border-[var(--brand-gold)]/40 bg-white/5 p-4 backdrop-blur-sm sm:h-36 sm:w-36 sm:p-6 md:h-40 md:w-40">
              <span className="font-arabic-display text-2xl leading-tight text-[var(--brand-gold)] md:text-3xl">
                بصمة
              </span>
              <span className="mt-1 font-arabic-display text-xl text-white/90 md:text-2xl">&quot;زهرة&quot;</span>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <p className="text-xs tracking-[0.35em] text-[var(--brand-gold)] uppercase">ZAHRA · THE ART OF SILENCE</p>
              <h2
                id="zahra-signature-heading"
                className="mt-3 font-arabic-display text-3xl text-white md:text-4xl"
              >
                بصمة زهرة
              </h2>
            </div>
            <blockquote className="font-arabic-display text-xl leading-relaxed text-white/90 md:text-2xl md:leading-relaxed">
              &ldquo;{text}&rdquo;
            </blockquote>
            <p className="text-sm leading-relaxed text-white/50">
              كل قطعة من زهرة تحمل هوية فريدة — قصة تُروى بالتفاصيل، وتُختتم ببصمة لا تتكرر.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
