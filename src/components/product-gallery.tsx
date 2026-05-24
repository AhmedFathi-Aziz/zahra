"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ProductImage } from "@/lib/types/product";

type ProductGalleryProps = {
  images: ProductImage[];
  title: string;
};

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const sorted = [...images].sort((a, b) => a.sortOrder - b.sortOrder);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });
  const mainRef = useRef<HTMLDivElement>(null);

  const active = sorted[activeIndex] ?? sorted[0];

  const openLightbox = useCallback(() => {
    setZoomLevel(1);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setZoomLevel(1);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setActiveIndex((i) => (i > 0 ? i - 1 : i));
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i < sorted.length - 1 ? i + 1 : i));
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen, closeLightbox, sorted.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mainRef.current) return;
    const rect = mainRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin({ x, y });
  };

  if (sorted.length === 0) return null;

  return (
    <>
      <div className="space-y-4 lg:col-span-7">
        <div
          ref={mainRef}
          className="group relative aspect-[4/5] cursor-zoom-in overflow-hidden bg-[var(--surface-container)]"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setZoomOrigin({ x: 50, y: 50 })}
          onClick={openLightbox}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active?.url}
            alt={active?.alt ?? title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.8]"
            style={{ transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%` }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <button
            type="button"
            className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs tracking-wider text-[var(--brand-navy)] opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
            aria-label="تكبير الصورة"
          >
            <span className="material-symbols-outlined text-[18px]">zoom_in</span>
            تكبير
          </button>
        </div>

        {sorted.length > 1 ? (
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
            {sorted.map((img, index) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`aspect-square overflow-hidden bg-[var(--surface-container)] transition-all ${
                  activeIndex === index
                    ? "ring-2 ring-[var(--brand-gold)] ring-offset-2"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.url} alt={img.alt} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {lightboxOpen && active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="معرض الصور"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="إغلاق"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          {sorted.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((i) => (i > 0 ? i - 1 : sorted.length - 1));
                  setZoomLevel(1);
                }}
                className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8"
                aria-label="الصورة السابقة"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((i) => (i < sorted.length - 1 ? i + 1 : 0));
                  setZoomLevel(1);
                }}
                className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-8"
                aria-label="الصورة التالية"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
            </>
          ) : null}

          <div
            className="relative flex max-h-[90vh] max-w-[90vw] flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="overflow-auto"
              onWheel={(e) => {
                e.preventDefault();
                setZoomLevel((z) => Math.min(4, Math.max(1, z + (e.deltaY > 0 ? -0.2 : 0.2))));
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.url}
                alt={active.alt ?? title}
                className="max-h-[80vh] max-w-[85vw] object-contain transition-transform duration-200"
                style={{ transform: `scale(${zoomLevel})` }}
                draggable={false}
              />
            </div>
            <div className="mt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(1, z - 0.5))}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <span className="material-symbols-outlined">remove</span>
              </button>
              <span className="text-sm text-white/70">{Math.round(zoomLevel * 100)}%</span>
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.min(4, z + 0.5))}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            {sorted.length > 1 ? (
              <p className="mt-2 text-sm text-white/50">
                {activeIndex + 1} / {sorted.length}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
