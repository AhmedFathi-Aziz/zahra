import { NextResponse } from "next/server";
import { deleteProduct, listAllProducts, updateProduct } from "@/lib/products-store";
import type { ProductInput } from "@/lib/types/product";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const products = await listAllProducts();
  const product = products.find((p) => p.id === id);
  if (!product) {
    return NextResponse.json({ error: "المنتج غير موجود" }, { status: 404 });
  }
  return NextResponse.json(product);
}

export async function PUT(request: Request, context: RouteContext) {
  const { id } = await context.params;
  try {
    const body = (await request.json()) as ProductInput;
    const product = await updateProduct(id, body);
    if (!product) {
      return NextResponse.json({ error: "المنتج غير موجود" }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch {
    return NextResponse.json({ error: "فشل تحديث المنتج" }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const deleted = await deleteProduct(id);
  if (!deleted) {
    return NextResponse.json({ error: "المنتج غير موجود" }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
