"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type AdminProductActionsProps = {
  productId: string;
  slug: string;
  published: boolean;
};

export function AdminProductActions({ productId, slug, published }: AdminProductActionsProps) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!confirm("هل أنت متأكد من حذف هذه التحفة؟")) return;
    setDeleting(true);
    try {
      await fetch(`/api/admin/products/${productId}`, { method: "DELETE" });
      router.refresh();
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="flex items-center gap-2">
      {published ? (
        <Link
          href={`/products/${slug}`}
          target="_blank"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--on-surface-variant)] transition-colors hover:bg-[var(--surface-container)] hover:text-[var(--primary)]"
          title="عرض في المتجر"
        >
          <span className="material-symbols-outlined text-[20px]">visibility</span>
        </Link>
      ) : null}
      <Link
        href={`/admin/products/${productId}/edit`}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--on-surface-variant)] transition-colors hover:bg-[var(--surface-container)] hover:text-[var(--primary)]"
        title="تعديل"
      >
        <span className="material-symbols-outlined text-[20px]">edit</span>
      </Link>
      <button
        type="button"
        onClick={handleDelete}
        disabled={deleting}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-red-400 transition-colors hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
        title="حذف"
      >
        <span className="material-symbols-outlined text-[20px]">delete</span>
      </button>
    </div>
  );
}
