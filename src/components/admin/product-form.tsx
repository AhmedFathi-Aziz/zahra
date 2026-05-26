"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { slugify } from "@/lib/slug";
import {
  PRODUCT_CATEGORIES,
  type Product,
  type ProductCategory,
  type ProductImage,
  type ProductInput,
  type ProductSize,
  type ProductSpec,
} from "@/lib/types/product";

type ProductFormProps = {
  initial?: Product;
  mode: "create" | "edit";
};

function emptyForm(): ProductInput {
  return {
    slug: "",
    title: "",
    collection: "",
    shortDescription: "",
    description: "",
    price: 0,
    compareAtPrice: undefined,
    category: "rings",
    images: [],
    specs: [],
    sizes: [],
    colors: [],
    careInstructions: "",
    packagingInfo: "",
    zahraSignature: "",
    featured: false,
    published: true,
  };
}

export function ProductForm({ initial, mode }: ProductFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<ProductInput>(initial ?? emptyForm());
  const [slugEdited, setSlugEdited] = useState(Boolean(initial?.slug));
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const updateField = <K extends keyof ProductInput>(key: K, value: ProductInput[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleTitleChange = (title: string) => {
    updateField("title", title);
    if (!slugEdited) {
      updateField("slug", slugify(title));
    }
  };

  const uploadFiles = useCallback(async (files: FileList | File[]) => {
    const list = Array.from(files).filter((f) => f.type.startsWith("image/"));
    if (list.length === 0) return;

    setUploading(true);
    setError("");

    try {
      const uploaded: ProductImage[] = [];

      for (const file of list) {
        const body = new FormData();
        body.append("file", file);
        const res = await fetch("/api/admin/upload", { method: "POST", body });
        if (!res.ok) {
          const data = (await res.json()) as { error?: string };
          throw new Error(data.error ?? "فشل رفع الصورة");
        }
        const { url } = (await res.json()) as { url: string };
        uploaded.push({
          id: crypto.randomUUID(),
          url,
          alt: form.title || file.name,
          sortOrder: form.images.length + uploaded.length,
        });
      }

      setForm((prev) => ({ ...prev, images: [...prev.images, ...uploaded] }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "فشل رفع الصورة");
    } finally {
      setUploading(false);
    }
  }, [form.images.length, form.title]);

  const removeImage = (id: string) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((img) => img.id !== id).map((img, i) => ({ ...img, sortOrder: i })),
    }));
  };

  const moveImage = (id: string, direction: "up" | "down") => {
    setForm((prev) => {
      const images = [...prev.images].sort((a, b) => a.sortOrder - b.sortOrder);
      const index = images.findIndex((img) => img.id === id);
      if (index === -1) return prev;
      const swapIndex = direction === "up" ? index - 1 : index + 1;
      if (swapIndex < 0 || swapIndex >= images.length) return prev;
      [images[index], images[swapIndex]] = [images[swapIndex], images[index]];
      return {
        ...prev,
        images: images.map((img, i) => ({ ...img, sortOrder: i })),
      };
    });
  };

  const addSpec = () => updateField("specs", [...form.specs, { label: "", value: "" }]);
  const updateSpec = (index: number, field: keyof ProductSpec, value: string) => {
    const specs = [...form.specs];
    specs[index] = { ...specs[index], [field]: value };
    updateField("specs", specs);
  };
  const removeSpec = (index: number) => updateField("specs", form.specs.filter((_, i) => i !== index));

  const addSize = () => updateField("sizes", [...form.sizes, { value: "", inStock: true }]);
  const updateSize = (index: number, field: keyof ProductSize, value: string | boolean) => {
    const sizes = [...form.sizes];
    sizes[index] = { ...sizes[index], [field]: value };
    updateField("sizes", sizes);
  };
  const removeSize = (index: number) => updateField("sizes", form.sizes.filter((_, i) => i !== index));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    if (!form.title.trim()) {
      setError("اسم التحفة مطلوب");
      setSaving(false);
      return;
    }
    if (form.images.length === 0) {
      setError("أضف صورة واحدة على الأقل");
      setSaving(false);
      return;
    }
    if (form.price <= 0) {
      setError("السعر يجب أن يكون أكبر من صفر");
      setSaving(false);
      return;
    }

    const payload: ProductInput = {
      ...form,
      slug: form.slug || slugify(form.title),
      specs: form.specs.filter((s) => s.label && s.value),
      sizes: form.sizes.filter((s) => s.value),
      colors: form.colors.filter(Boolean),
      compareAtPrice: form.compareAtPrice && form.compareAtPrice > 0 ? form.compareAtPrice : undefined,
      zahraSignature: form.zahraSignature?.trim() || undefined,
    };

    try {
      const url = mode === "create" ? "/api/admin/products" : `/api/admin/products/${initial!.id}`;
      const method = mode === "create" ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "فشل حفظ المنتج");
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "فشل حفظ المنتج");
    } finally {
      setSaving(false);
    }
  };

  const sortedImages = [...form.images].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <section className="relative overflow-hidden rounded-2xl border border-[var(--brand-gold)]/25 bg-gradient-to-bl from-[var(--brand-navy)] via-[#0a2540] to-[var(--brand-navy)] p-8 text-white">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[var(--brand-gold)]/10 blur-3xl" />
        <div className="relative">
          <p className="mb-2 text-sm tracking-[0.3em] text-[var(--brand-gold)]">ZAHRA · THE ART OF SILENCE</p>
          <h1 className="font-arabic-display text-3xl md:text-4xl">
            {mode === "create" ? "إضافة تحفة فنية جديدة" : "تعديل التحفة"}
          </h1>
          <p className="mt-3 max-w-xl text-white/60">
            كل قطعة في زهرة تحكي قصة. أضف تفاصيلها بعناية كما تستحق تحفة فنية حقيقية.
          </p>
        </div>
      </section>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      ) : null}

      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-8 lg:col-span-3">
          <FormSection title="الهوية" icon="diamond">
            <Field label="اسم التحفة *">
              <input
                type="text"
                value={form.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="مثال: خاتم الأورورا الاستانلس"
                className={inputClass}
              />
            </Field>
            <Field label="المجموعة">
              <input
                type="text"
                value={form.collection ?? ""}
                onChange={(e) => updateField("collection", e.target.value)}
                placeholder="مثال: مجموعة الأورورا"
                className={inputClass}
              />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="الفئة">
                <select
                  value={form.category}
                  onChange={(e) => updateField("category", e.target.value as ProductCategory)}
                  className={inputClass}
                >
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="الرابط (slug)">
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => {
                    setSlugEdited(true);
                    updateField("slug", e.target.value);
                  }}
                  placeholder="aurora-ring"
                  dir="ltr"
                  className={inputClass}
                />
              </Field>
            </div>
          </FormSection>

          <FormSection title="الوصف" icon="description">
            <Field label="وصف مختصر">
              <input
                type="text"
                value={form.shortDescription}
                onChange={(e) => updateField("shortDescription", e.target.value)}
                placeholder="استانلس 316L مقاوم للصدأ"
                className={inputClass}
              />
            </Field>
            <Field label="القصة الكاملة">
              <textarea
                value={form.description}
                onChange={(e) => updateField("description", e.target.value)}
                rows={5}
                placeholder="اكتب قصة التحفة... ما الذي يجعلها مميزة؟"
                className={`${inputClass} resize-y`}
              />
            </Field>
            <Field label="بصمة زهرة">
              <textarea
                value={form.zahraSignature ?? ""}
                onChange={(e) => updateField("zahraSignature", e.target.value)}
                rows={3}
                placeholder='مثال: في كل قطعة من زهرة... تزهر قصة لا تشبه سواكِ.'
                className={`${inputClass} resize-y`}
              />
              <p className="mt-1.5 text-xs text-[var(--on-surface-variant)]">
                تظهر في صفحة المنتج ضمن قسم بصمة زهرة. اتركها فارغة لاستخدام النص الافتراضي للعلامة.
              </p>
            </Field>
          </FormSection>

          <FormSection title="الأسعار" icon="payments">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="السعر (ج.م) *">
                <input
                  type="number"
                  min={0}
                  value={form.price || ""}
                  onChange={(e) => updateField("price", Number(e.target.value))}
                  className={inputClass}
                />
              </Field>
              <Field label="السعر قبل الخصم (اختياري)">
                <input
                  type="number"
                  min={0}
                  value={form.compareAtPrice ?? ""}
                  onChange={(e) =>
                    updateField("compareAtPrice", e.target.value ? Number(e.target.value) : undefined)
                  }
                  className={inputClass}
                />
              </Field>
            </div>
          </FormSection>

          <FormSection title="المواصفات" icon="list_alt">
            <div className="space-y-3">
              {form.specs.map((spec, i) => (
                <div key={i} className="flex gap-3">
                  <input
                    type="text"
                    value={spec.label}
                    onChange={(e) => updateSpec(i, "label", e.target.value)}
                    placeholder="المعدن"
                    className={`${inputClass} flex-1`}
                  />
                  <input
                    type="text"
                    value={spec.value}
                    onChange={(e) => updateSpec(i, "value", e.target.value)}
                    placeholder="استانلس 316L"
                    className={`${inputClass} flex-1`}
                  />
                  <button type="button" onClick={() => removeSpec(i)} className={iconBtnClass}>
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </button>
                </div>
              ))}
              <button type="button" onClick={addSpec} className={addBtnClass}>
                <span className="material-symbols-outlined text-[18px]">add</span>
                إضافة مواصفة
              </button>
            </div>
          </FormSection>

          <FormSection title="المقاسات" icon="straighten">
            <div className="space-y-3">
              {form.sizes.map((size, i) => (
                <div key={i} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={size.value}
                    onChange={(e) => updateSize(i, "value", e.target.value)}
                    placeholder="٥"
                    className={`${inputClass} w-24`}
                  />
                  <label className="flex items-center gap-2 text-sm text-[var(--on-surface-variant)]">
                    <input
                      type="checkbox"
                      checked={size.inStock}
                      onChange={(e) => updateSize(i, "inStock", e.target.checked)}
                      className="rounded border-[var(--outline-variant)] text-[var(--brand-gold)]"
                    />
                    متوفر
                  </label>
                  <button type="button" onClick={() => removeSize(i)} className={iconBtnClass}>
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </button>
                </div>
              ))}
              <button type="button" onClick={addSize} className={addBtnClass}>
                <span className="material-symbols-outlined text-[18px]">add</span>
                إضافة مقاس
              </button>
            </div>
          </FormSection>

          <FormSection title="العناية والتغليف" icon="inventory_2">
            <Field label="تعليمات العناية">
              <textarea
                value={form.careInstructions ?? ""}
                onChange={(e) => updateField("careInstructions", e.target.value)}
                rows={3}
                className={`${inputClass} resize-y`}
              />
            </Field>
            <Field label="التغليف">
              <textarea
                value={form.packagingInfo ?? ""}
                onChange={(e) => updateField("packagingInfo", e.target.value)}
                rows={3}
                className={`${inputClass} resize-y`}
              />
            </Field>
          </FormSection>
        </div>

        <div className="space-y-8 lg:col-span-2">
          <FormSection title="معرض الصور" icon="photo_library">
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                void uploadFiles(e.dataTransfer.files);
              }}
              onClick={() => fileInputRef.current?.click()}
              className={`cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-all ${
                dragOver
                  ? "border-[var(--brand-gold)] bg-[var(--brand-gold)]/5"
                  : "border-[var(--outline-variant)] hover:border-[var(--brand-gold)]/50"
              }`}
            >
              <span className="material-symbols-outlined mb-3 text-4xl text-[var(--brand-gold)]">add_photo_alternate</span>
              <p className="font-arabic-display text-lg text-[var(--primary)]">
                {uploading ? "جاري الرفع..." : "اسحب الصور أو انقر للرفع"}
              </p>
              <p className="mt-1 text-xs text-[var(--on-surface-variant)]">PNG, JPG, WebP — حتى 8MB</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => e.target.files && void uploadFiles(e.target.files)}
              />
            </div>

            {sortedImages.length > 0 ? (
              <div className="mt-6 space-y-3">
                {sortedImages.map((img, i) => (
                  <div key={img.id} className="group flex items-center gap-3 rounded-xl border border-[var(--outline-variant)]/50 bg-[var(--surface-container-low)] p-2">
                    <div className="relative h-20 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.url} alt={img.alt} className="h-full w-full object-cover" />
                      {i === 0 ? (
                        <span className="absolute bottom-0 left-0 right-0 bg-[var(--brand-navy)]/80 py-0.5 text-center text-[10px] text-[var(--brand-gold)]">
                          الغلاف
                        </span>
                      ) : null}
                    </div>
                    <input
                      type="text"
                      value={img.alt}
                      onChange={(e) => {
                        const images = form.images.map((item) =>
                          item.id === img.id ? { ...item, alt: e.target.value } : item,
                        );
                        updateField("images", images);
                      }}
                      placeholder="وصف الصورة"
                      className={`${inputClass} flex-1 text-sm`}
                    />
                    <div className="flex flex-col gap-1">
                      <button type="button" onClick={() => moveImage(img.id, "up")} disabled={i === 0} className={iconBtnClass}>
                        <span className="material-symbols-outlined text-[18px]">keyboard_arrow_up</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => moveImage(img.id, "down")}
                        disabled={i === sortedImages.length - 1}
                        className={iconBtnClass}
                      >
                        <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                      </button>
                    </div>
                    <button type="button" onClick={() => removeImage(img.id)} className={`${iconBtnClass} text-red-500`}>
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                ))}
              </div>
            ) : null}
          </FormSection>

          <FormSection title="الإعدادات" icon="tune">
            <label className="flex cursor-pointer items-center justify-between rounded-xl border border-[var(--outline-variant)]/50 px-4 py-3">
              <div>
                <p className="text-sm font-medium text-[var(--primary)]">نشر في المتجر</p>
                <p className="text-xs text-[var(--on-surface-variant)]">يظهر للزوار في صفحة المجموعات</p>
              </div>
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => updateField("published", e.target.checked)}
                className="h-5 w-5 rounded border-[var(--outline-variant)] text-[var(--brand-gold)]"
              />
            </label>
            <label className="flex cursor-pointer items-center justify-between rounded-xl border border-[var(--outline-variant)]/50 px-4 py-3">
              <div>
                <p className="text-sm font-medium text-[var(--primary)]">تحفة مميزة</p>
                <p className="text-xs text-[var(--on-surface-variant)]">تظهر في الأقسام البارزة</p>
              </div>
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) => updateField("featured", e.target.checked)}
                className="h-5 w-5 rounded border-[var(--outline-variant)] text-[var(--brand-gold)]"
              />
            </label>
            <Field label="الألوان (مفصولة بفاصلة)">
              <input
                type="text"
                value={form.colors.join("، ")}
                onChange={(e) =>
                  updateField(
                    "colors",
                    e.target.value
                      .split(/[,،]/)
                      .map((c) => c.trim())
                      .filter(Boolean),
                  )
                }
                placeholder="فضي، ذهبي"
                className={inputClass}
              />
            </Field>
          </FormSection>

          <div className="sticky bottom-6 flex flex-col gap-3">
            <button
              type="submit"
              disabled={saving || uploading}
              className="w-full rounded-xl bg-[var(--brand-navy)] py-4 text-sm tracking-widest text-white uppercase transition-all hover:bg-[var(--secondary)] disabled:opacity-50"
            >
              {saving ? "جاري الحفظ..." : mode === "create" ? "حفظ التحفة" : "تحديث التحفة"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/admin")}
              className="w-full rounded-xl border border-[var(--outline-variant)] py-3 text-sm text-[var(--on-surface-variant)] transition-colors hover:border-[var(--primary)]"
            >
              إلغاء
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

function FormSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-[var(--outline-variant)]/40 bg-white p-6 shadow-sm">
      <h2 className="mb-5 flex items-center gap-2 font-arabic-display text-xl text-[var(--primary)]">
        <span className="material-symbols-outlined text-[var(--brand-gold)]">{icon}</span>
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-[var(--on-surface-variant)]">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-[var(--outline-variant)] bg-[var(--surface-container-low)] px-4 py-2.5 text-sm text-[var(--on-surface)] outline-none transition-colors focus:border-[var(--brand-gold)] focus:ring-1 focus:ring-[var(--brand-gold)]/30";

const iconBtnClass =
  "flex h-9 w-9 items-center justify-center rounded-lg text-[var(--on-surface-variant)] transition-colors hover:bg-[var(--surface-container)] disabled:opacity-30";

const addBtnClass =
  "flex items-center gap-2 rounded-lg border border-dashed border-[var(--outline-variant)] px-4 py-2.5 text-sm text-[var(--on-surface-variant)] transition-colors hover:border-[var(--brand-gold)] hover:text-[var(--primary)]";
