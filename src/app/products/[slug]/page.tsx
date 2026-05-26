import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/product-detail-view";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "المنتج غير موجود" };

  const cover = [...product.images].sort((a, b) => a.sortOrder - b.sortOrder)[0];

  return {
    title: product.title,
    description: product.shortDescription || product.description,
    openGraph: cover
      ? {
          images: [{ url: cover.url, alt: cover.alt || product.title }],
        }
      : undefined,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const related = await getRelatedProducts(product);

  return (
    <>
      <ProductDetailView product={product} related={related} />
      <footer className="border-t border-[var(--outline-variant)]/20 bg-[var(--surface-container-lowest)]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-6 py-20">
          <div className="text-4xl tracking-widest text-[var(--brand-gold)] uppercase">ZAHRA</div>
          <a
            href="tel:+201515268898"
            dir="ltr"
            className="text-sm tracking-[0.08em] text-[var(--secondary)] transition-colors hover:text-[var(--primary)]"
          >
            +20 151 526 8898
          </a>
          <p dir="ltr" className="text-sm text-[var(--on-surface-variant)] uppercase">
            © 2024 ZAHRA. THE ART OF SILENCE.
          </p>
        </div>
      </footer>
    </>
  );
}
