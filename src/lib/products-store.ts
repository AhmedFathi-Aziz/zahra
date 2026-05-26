import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import type { Product, ProductInput } from "@/lib/types/product";

const DATA_PATH = path.join(process.cwd(), "src", "data", "products.json");

export async function readProducts(): Promise<Product[]> {
  const raw = await fs.readFile(DATA_PATH, "utf-8");
  return JSON.parse(raw) as Product[];
}

async function writeProducts(products: Product[]): Promise<void> {
  await fs.writeFile(DATA_PATH, JSON.stringify(products, null, 2) + "\n", "utf-8");
}

export async function createProduct(input: ProductInput): Promise<Product> {
  const products = await readProducts();
  const now = new Date().toISOString();

  const product: Product = {
    ...input,
    id: randomUUID(),
    createdAt: now,
    updatedAt: now,
  };

  products.push(product);
  await writeProducts(products);
  return product;
}

export async function updateProduct(id: string, input: ProductInput): Promise<Product | null> {
  const products = await readProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;

  const updated: Product = {
    ...input,
    id,
    createdAt: products[index].createdAt,
    updatedAt: new Date().toISOString(),
  };

  products[index] = updated;
  await writeProducts(products);
  return updated;
}

export async function deleteProduct(id: string): Promise<boolean> {
  const products = await readProducts();
  const next = products.filter((p) => p.id !== id);
  if (next.length === products.length) return false;
  await writeProducts(next);
  return true;
}

export async function listAllProducts(): Promise<Product[]> {
  return readProducts();
}
