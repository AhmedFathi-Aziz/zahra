"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { toArabicNumerals } from "@/lib/format";
import { PRODUCT_CATEGORIES, type Product, type ProductCategory } from "@/lib/types/product";

type CollectionsCatalogProps = {
  products: Product[];
};

export function CollectionsCatalog({ products }: CollectionsCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [products, activeCategory]);

  const activeLabel =
    activeCategory === "all"
      ? "الكل"
      : PRODUCT_CATEGORIES.find((c) => c.value === activeCategory)?.label ?? "";

  return (
    <div className="flex flex-col gap-6 py-10 md:flex-row-reverse">
      <aside className="w-full flex-shrink-0 space-y-10 md:w-64">
        <div>
          <h3 className="mb-4 font-arabic-display text-base text-[var(--primary)]">الفئة</h3>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                activeCategory === "all"
                  ? "bg-[var(--secondary)] text-[var(--on-secondary)]"
                  : "border border-[var(--outline-variant)] bg-[var(--surface)] text-[var(--on-surface-variant)] hover:border-[var(--primary)]"
              }`}
            >
              الكل
            </button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  activeCategory === cat.value
                    ? "bg-[var(--secondary)] text-[var(--on-secondary)]"
                    : "border border-[var(--outline-variant)] bg-[var(--surface)] text-[var(--on-surface-variant)] hover:border-[var(--primary)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <div className="min-w-0 flex-grow">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-sm text-[var(--on-surface-variant)]">
            عرض {toArabicNumerals(filtered.length)} {filtered.length === 1 ? "منتج" : "منتج"}
            {activeCategory !== "all" ? ` — ${activeLabel}` : ""}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <span className="material-symbols-outlined mb-4 text-5xl text-[var(--brand-gold)]">diamond</span>
            <p className="font-arabic-display text-xl text-[var(--primary)]">
              {activeCategory === "all" ? "قريباً — تحف جديدة" : `لا توجد منتجات في فئة «${activeLabel}» حالياً`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
