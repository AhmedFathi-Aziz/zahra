"use client";

import { useEffect, useState } from "react";
import { ProductForm } from "@/components/admin/product-form";
import type { Product } from "@/lib/types/product";

type EditProductClientProps = {
  productId: string;
};

export function EditProductClient({ productId }: EditProductClientProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/admin/products/${productId}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("المنتج غير موجود");
        setProduct((await res.json()) as Product);
      })
      .catch((err) => setError(err instanceof Error ? err.message : "حدث خطأ"))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) {
    return <p className="text-center text-[var(--on-surface-variant)]">جاري التحميل...</p>;
  }

  if (error || !product) {
    return <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error || "المنتج غير موجود"}</p>;
  }

  return <ProductForm mode="edit" initial={product} />;
}
