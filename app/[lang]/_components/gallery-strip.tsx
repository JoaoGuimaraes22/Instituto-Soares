"use client";

import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryStripDict {
  images: GalleryImage[];
}

export default function GalleryStrip({ dict }: { dict: GalleryStripDict }) {
  // Duplicate images for seamless loop
  const images = [...dict.images, ...dict.images];

  // Split into two rows for opposite-direction scrolling
  const half = Math.ceil(dict.images.length / 2);
  const row1Source = dict.images.slice(0, half);
  const row2Source = dict.images.slice(half);
  const row1 = [...row1Source, ...row1Source];
  const row2 = [...row2Source, ...row2Source];

  return (
    <section className="overflow-hidden bg-primary-dark py-4">
      {/* Row 1 — scrolls left */}
      <div className="mb-3">
        <div
          className="animate-gallery-scroll flex"
          style={{ width: "max-content" }}
        >
          {row1.map((img, i) => (
            <div
              key={`r1-${i}`}
              className="relative mx-1.5 h-48 w-72 shrink-0 overflow-hidden rounded-lg sm:h-56 sm:w-80"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 320px, 288px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (reverse) */}
      <div>
        <div
          className="animate-gallery-scroll-reverse flex"
          style={{ width: "max-content" }}
        >
          {row2.map((img, i) => (
            <div
              key={`r2-${i}`}
              className="relative mx-1.5 h-48 w-72 shrink-0 overflow-hidden rounded-lg sm:h-56 sm:w-80"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 320px, 288px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
