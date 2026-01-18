"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import type { Project } from "@/data/projects";

export default function AutoGallery({
  projects,
  speed = .25, // pixels per frame-ish; adjust to taste
}: {
  projects: Project[];
  speed?: number;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo(() => {
    // Flatten project images into gallery items
    const flat: { src: string; title: string; slug: string }[] = [];
    for (const p of projects) {
      const imgs = p.galleryImages?.length ? p.galleryImages : [p.coverImage];
      for (const src of imgs) flat.push({ src, title: p.title, slug: p.slug });
    }
    return flat;
  }, [projects]);

  // Duplicate items for seamless looping
  const loopItems = [...items, ...items];
  const pausedRef = useRef(false);
  useEffect(() => {
  const el = scrollerRef.current;
  if (!el) return;

    let raf = 0;
    let carry = 0;

    const tick = () => {
    if (!pausedRef.current) {
        carry += speed;

        const whole = Math.floor(carry);
        if (whole > 0) {
        el.scrollLeft += whole;
        carry -= whole;
        }

        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft = 0;
    }

    raf = requestAnimationFrame(tick);
    };
  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}, [speed]);

  return (
    <div className="panel overflow-hidden">
      <div className="mb-3 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-[#0066ff] uppercase">
            Gallery
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            Click any thumbnail to open the related project.
          </p>
        </div>
        <div className="text-xs text-zinc-500">
          Hover to pause
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-hidden"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        {loopItems.map((it, idx) => (
          <Link
            key={`${it.slug}-${idx}-${it.src}`}
            href={`/projects/${it.slug}`}
            className="group relative block shrink-0 overflow-hidden rounded-xl border border-zinc-800 "
             // controls thumbnail size; tweak
          >
            <Image
              src={it.src}
              alt={`${it.title} screenshot`}
              width={1400}
              height={788}
              className="h-80 w-full object-cover transition group-hover:scale-[1.02]"
              priority={idx < 2}
            />
            <div className="absolute inset-x-0 bottom-0 bg-black/55 px-3 py-2">
              <div className="text-sm font-semibold text-zinc-100">
                {it.title}
              </div>
              <div className="text-xs text-zinc-300">View project</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
