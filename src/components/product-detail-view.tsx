"use client";

import Link from "next/link";
import { useState } from "react";
import { formatPrice } from "@/lib/format";
import type { Product, ProductSize } from "@/lib/types/product";
import { ProductGallery } from "@/components/product-gallery";
import { ZahraSignatureSection } from "@/components/zahra-signature-section";

type ProductDetailProps = {
  product: Product;
  related: Product[];
};

export function ProductDetailView({ product, related }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(
    product.sizes.find((s) => s.inStock) ?? null,
  );

  const whatsappMessage = encodeURIComponent(
    `مرحباً، أريد طلب "${product.title}"${selectedSize ? ` - مقاس ${selectedSize.value}` : ""} من ZAHRA`,
  );

  return (
  <>
      <main className="mx-auto w-full max-w-[1280px] overflow-x-hidden px-4 pb-20 pt-[120px] sm:px-6 sm:pt-[140px]">
        <nav className="mb-8 sm:mb-12">
          <ol className="flex min-w-0 flex-row-reverse flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--on-surface-variant)]">
            <li className="shrink-0">
              <Link className="hover:text-[var(--primary)]" href="/">
                الرئيسية
              </Link>
            </li>
            <li className="shrink-0">/</li>
            <li className="shrink-0">
              <Link className="hover:text-[var(--primary)]" href="/collections">
                المجموعات
              </Link>
            </li>
            <li className="shrink-0">/</li>
            <li className="min-w-0 break-words font-semibold text-[var(--primary)]">{product.title}</li>
          </ol>
        </nav>

        <div className="grid min-w-0 grid-cols-1 items-start gap-8 sm:gap-12 lg:grid-cols-12">
          <ProductGallery images={product.images} title={product.title} />

          <div className="flex min-w-0 flex-col gap-8 lg:sticky lg:top-32 lg:col-span-5">
            <div className="space-y-4">
              {product.collection ? (
                <span className="text-sm tracking-widest text-[var(--secondary)] uppercase">{product.collection}</span>
              ) : null}
              <h1 className="font-arabic-display text-4xl text-[var(--on-surface)] md:text-5xl">{product.title}</h1>
              <div className="mt-2 flex items-center gap-4">
                <span className="font-arabic-display text-3xl text-[var(--primary)]">{formatPrice(product.price)}</span>
                {product.compareAtPrice && product.compareAtPrice > product.price ? (
                  <span className="text-xl text-[var(--outline)] line-through">{formatPrice(product.compareAtPrice)}</span>
                ) : null}
              </div>
            </div>

            {product.description ? (
              <div className="border-t border-[var(--outline-variant)] pt-6">
                <p className="whitespace-pre-line leading-relaxed text-[var(--on-surface-variant)]">{product.description}</p>
              </div>
            ) : null}

            {product.sizes.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-[var(--primary)] uppercase">المقاس</label>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.value}
                      type="button"
                      disabled={!size.inStock}
                      onClick={() => setSelectedSize(size)}
                      className={`flex h-12 w-12 items-center justify-center border text-sm transition-all ${
                        !size.inStock
                          ? "cursor-not-allowed border-[var(--outline-variant)] line-through opacity-50"
                          : selectedSize?.value === size.value
                            ? "border-[var(--secondary)] bg-[var(--secondary)] text-[var(--on-secondary)]"
                            : "border-[var(--outline-variant)] hover:border-[var(--secondary)]"
                      }`}
                    >
                      {size.value}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="flex flex-col gap-4">
              <a
                href={`https://wa.me/201515268898?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[var(--secondary)] py-5 text-center text-sm tracking-widest text-white uppercase hover:opacity-90"
              >
                اطلب عبر واتساب
              </a>
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

        <ZahraSignatureSection signature={product.zahraSignature} />

        {(product.specs.length > 0 || product.careInstructions || product.packagingInfo) && (
          <div className="mt-20 grid grid-cols-1 gap-12 border-t border-[var(--outline-variant)] pt-12 md:grid-cols-3">
            {product.specs.length > 0 ? (
              <div className="space-y-4">
                <h3 className="font-arabic-display text-3xl text-[var(--primary)]">المواصفات</h3>
                <ul className="space-y-2 text-[var(--on-surface-variant)]">
                  {product.specs.map((spec) => (
                    <li key={spec.label} className="flex justify-between border-b border-[var(--outline-variant)]/30 pb-2">
                      <span>{spec.label}</span>
                      <span>{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {product.careInstructions ? (
              <div className="space-y-4">
                <h3 className="font-arabic-display text-3xl text-[var(--primary)]">العناية</h3>
                <p className="whitespace-pre-line text-[var(--on-surface-variant)]">{product.careInstructions}</p>
              </div>
            ) : null}
            {product.packagingInfo ? (
              <div className="space-y-4">
                <h3 className="font-arabic-display text-3xl text-[var(--primary)]">التغليف</h3>
                <p className="whitespace-pre-line text-[var(--on-surface-variant)]">{product.packagingInfo}</p>
              </div>
            ) : null}
          </div>
        )}

        {related.length > 0 ? (
          <section className="mt-20">
            <div className="mb-12 flex items-end justify-between">
              <h2 className="font-arabic-display text-3xl text-[var(--primary)] md:text-4xl">قد يعجبك أيضاً</h2>
              <Link
                className="text-sm text-[var(--on-surface-variant)] underline transition-colors hover:text-[var(--primary)]"
                href="/collections"
              >
                تسوق الكل
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {related.map((item) => {
                const cover = [...item.images].sort((a, b) => a.sortOrder - b.sortOrder)[0];
                return (
                  <Link key={item.id} href={`/products/${item.slug}`} className="group cursor-pointer">
                    <div className="relative mb-4 aspect-[3/4] overflow-hidden">
                      {cover ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          src={cover.url}
                          alt={cover.alt}
                        />
                      ) : null}
                    </div>
                    <h4 className="mb-1 text-center font-arabic-display text-xl text-[var(--primary)]">{item.title}</h4>
                    <p className="text-center text-[var(--on-surface-variant)]">{formatPrice(item.price)}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
