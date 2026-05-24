import Link from "next/link";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const cover = [...product.images].sort((a, b) => a.sortOrder - b.sortOrder)[0];

  return (
    <Link href={`/products/${product.slug}`} className="group relative block">
      <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-[var(--surface-container-low)]">
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={cover.url}
            alt={cover.alt || product.title}
          />
        ) : null}
        <div className="absolute inset-0 flex items-end justify-center bg-[var(--secondary)]/5 pb-6 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="bg-[var(--secondary)] px-8 py-3 text-sm text-[var(--on-secondary)] transition-all group-hover:bg-[var(--primary)]">
            عرض التفاصيل
          </span>
        </div>
      </div>
      <div className="text-center">
        <h3 className="mb-1 font-arabic-display text-xl text-[var(--primary)]">{product.title}</h3>
        <p className="mb-2 text-sm text-[var(--on-surface-variant)]">{product.shortDescription}</p>
        <span className="font-semibold text-[var(--secondary)]">{formatPrice(product.price)}</span>
      </div>
    </Link>
  );
}
