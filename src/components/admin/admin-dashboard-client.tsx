"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { formatPrice } from "@/lib/format";
import { CATEGORY_LABELS, type Product } from "@/lib/types/product";
import { AdminProductActions } from "@/components/admin/product-actions";

export function AdminDashboardClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/products")
      .then(async (res) => {
        if (!res.ok) throw new Error("فشل تحميل المنتجات");
        setProducts((await res.json()) as Product[]);
      })
      .catch((err) => setError(err instanceof Error ? err.message : "حدث خطأ"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center text-[var(--on-surface-variant)]">جاري التحميل...</p>;
  }

  if (error) {
    return <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>;
  }

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-arabic-display text-3xl text-[var(--primary)]">تحف زهرة</h1>
          <p className="mt-1 text-[var(--on-surface-variant)]">
            {products.length} {products.length === 1 ? "تحفة" : "تحف"} في المجموعة
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--brand-navy)] px-6 py-3 text-sm tracking-widest text-white uppercase transition-colors hover:bg-[var(--secondary)]"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          إضافة تحفة
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[var(--outline-variant)] bg-white p-16 text-center">
          <span className="material-symbols-outlined mb-4 text-5xl text-[var(--brand-gold)]">diamond</span>
          <h2 className="font-arabic-display text-2xl text-[var(--primary)]">لا توجد تحف بعد</h2>
          <p className="mt-2 text-[var(--on-surface-variant)]">ابدأ بإضافة أول تحفة فنية من براند زهرة</p>
          <Link
            href="/admin/products/new"
            className="mt-6 inline-block rounded-xl bg-[var(--brand-gold)] px-8 py-3 text-sm tracking-widest text-[var(--brand-navy)] uppercase"
          >
            إضافة تحفة
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-[var(--outline-variant)]/40 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="border-b border-[var(--outline-variant)]/40 bg-[var(--surface-container-low)] text-right text-sm text-[var(--on-surface-variant)]">
                  <th className="px-4 py-3 font-normal">التحفة</th>
                  <th className="px-4 py-3 font-normal">الفئة</th>
                  <th className="px-4 py-3 font-normal">السعر</th>
                  <th className="px-4 py-3 font-normal">الحالة</th>
                  <th className="px-4 py-3 font-normal">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  const cover = [...product.images].sort((a, b) => a.sortOrder - b.sortOrder)[0];
                  return (
                    <tr key={product.id} className="border-b border-[var(--outline-variant)]/20 last:border-0">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-4">
                          <div className="h-14 w-11 flex-shrink-0 overflow-hidden rounded-lg bg-[var(--surface-container)]">
                            {cover ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={cover.url} alt={cover.alt} className="h-full w-full object-cover" />
                            ) : null}
                          </div>
                          <div>
                            <p className="font-arabic-display text-base text-[var(--primary)]">{product.title}</p>
                            {product.collection ? (
                              <p className="text-xs text-[var(--on-surface-variant)]">{product.collection}</p>
                            ) : null}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-[var(--on-surface-variant)]">
                        {CATEGORY_LABELS[product.category]}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-[var(--secondary)]">
                        {formatPrice(product.price)}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-2">
                          {product.published ? (
                            <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs text-green-700">منشور</span>
                          ) : (
                            <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">مسودة</span>
                          )}
                          {product.featured ? (
                            <span className="rounded-full bg-[var(--brand-gold)]/15 px-2.5 py-0.5 text-xs text-[var(--brand-navy)]">
                              مميز
                            </span>
                          ) : null}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <AdminProductActions productId={product.id} slug={product.slug} published={product.published} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
