import { readProducts } from "@/lib/products-store";
import type { Product } from "@/lib/types/product";

function sortProducts(list: Product[]): Product[] {
  return [...list].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

function normalizeSlug(slug: string): string {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

export async function getAllProducts(includeUnpublished = false): Promise<Product[]> {
  const products = await readProducts();
  const filtered = includeUnpublished ? products : products.filter((p) => p.published);
  return sortProducts(filtered);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const normalized = normalizeSlug(slug);
  const products = await readProducts();
  return products.find((p) => p.slug === normalized && p.published) ?? null;
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await readProducts();
  return products.find((p) => p.id === id) ?? null;
}

export async function getRelatedProducts(product: Product, limit = 4): Promise<Product[]> {
  return (await getAllProducts())
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

export async function getAllProductSlugs(): Promise<string[]> {
  return (await getAllProducts()).map((p) => p.slug);
}
