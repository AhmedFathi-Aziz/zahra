import { NextResponse } from "next/server";
import { createProduct, listAllProducts } from "@/lib/products-store";
import type { ProductInput } from "@/lib/types/product";

export async function GET() {
  const products = await listAllProducts();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ProductInput;
    const product = await createProduct(body);
    return NextResponse.json(product, { status: 201 });
  } catch {
    return NextResponse.json({ error: "فشل إنشاء المنتج" }, { status: 500 });
  }
}
