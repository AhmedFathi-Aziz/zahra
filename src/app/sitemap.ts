import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";

export const dynamic = "force-static";

const siteUrl = "https://zahrajw.com";

const staticRoutes = ["/", "/collections", "/editorial", "/gifts"] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/products/${encodeURIComponent(product.slug)}`,
    lastModified: new Date(product.updatedAt),
    changeFrequency: "weekly",
    priority: product.featured ? 0.9 : 0.7,
  }));

  return [...staticEntries, ...productEntries];
}
