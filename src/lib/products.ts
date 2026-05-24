import productsData from "@/data/products.json";
import type { Product } from "@/lib/types/product";

const products = productsData as Product[];

function sortProducts(list: Product[]): Product[] {
  return [...list].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function getAllProducts(includeUnpublished = false): Product[] {
  const filtered = includeUnpublished ? products : products.filter((p) => p.published);
  return sortProducts(filtered);
}

export function getProductBySlug(slug: string): Product | null {
  return products.find((p) => p.slug === slug && p.published) ?? null;
}

export function getProductById(id: string): Product | null {
  return products.find((p) => p.id === id) ?? null;
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return getAllProducts()
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

export function getAllProductSlugs(): string[] {
  return getAllProducts().map((p) => p.slug);
}
