export type ProductCategory = "rings" | "earrings" | "necklaces" | "bracelets";

export type ProductImage = {
  id: string;
  url: string;
  alt: string;
  sortOrder: number;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductSize = {
  value: string;
  inStock: boolean;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  collection?: string;
  shortDescription: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  category: ProductCategory;
  images: ProductImage[];
  specs: ProductSpec[];
  sizes: ProductSize[];
  colors: string[];
  careInstructions?: string;
  packagingInfo?: string;
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ProductInput = Omit<Product, "id" | "createdAt" | "updatedAt">;

export const PRODUCT_CATEGORIES: { value: ProductCategory; label: string }[] = [
  { value: "rings", label: "خواتم" },
  { value: "earrings", label: "أقراط" },
  { value: "necklaces", label: "قلادات" },
  { value: "bracelets", label: "أساور" },
];

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  rings: "خواتم",
  earrings: "أقراط",
  necklaces: "قلادات",
  bracelets: "أساور",
};
