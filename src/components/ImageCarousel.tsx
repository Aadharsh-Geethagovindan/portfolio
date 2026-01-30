"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function ImageCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const items = useMemo(() => images.filter(Boolean), [images]);
  const [idx, setIdx] = useState(0);

  if (!items.length) return null;

  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const next = () => setIdx((i) => (i + 1) % items.length);

  const current = items[idx];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/30">
      <Image
        src={current}
        alt={`${title} screenshot ${idx + 1}`}
        width={1600}
        height={900}
        className="w-full h-auto max-h-[70vh] mx-auto object-contain"
        priority
      />

      {/* Left button */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-200 backdrop-blur hover:border-[#003d99] hover:text-white"
        >
          ←
        </button>
      )}

      {/* Right button */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-200 backdrop-blur hover:border-[#003d99] hover:text-white"
        >
          →
        </button>
      )}

      {/* Dots */}
      {items.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
          {idx + 1} / {items.length}
        </div>
      )}
    </div>
  );
}
