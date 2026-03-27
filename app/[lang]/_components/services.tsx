"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

interface ServicesDict {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  categories: ServiceCategory[];
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function Services({ dict }: { dict: ServicesDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  let cardIndex = 0;

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-background px-6 py-16 md:px-8 md:py-24 xl:px-16 xl:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          className="mb-16 max-w-xl"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {dict.badge}
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {dict.titleLine1}
          </h2>
          <p className="mt-1 text-lg text-muted">{dict.titleLine2}</p>
        </motion.div>

        {/* Categories */}
        {dict.categories.map((category, catIdx) => {
          const startIndex = cardIndex;
          cardIndex += category.items.length;

          return (
            <div key={catIdx} className={catIdx > 0 ? "mt-14" : ""}>
              {/* Category divider */}
              <motion.div
                className="mb-6 flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + catIdx * 0.15, ease }}
              >
                <div className="h-px w-8 bg-primary" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                  {category.title}
                </h3>
                <div className="h-px flex-1 bg-primary/10" />
              </motion.div>

              {/* Cards grid */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, i) => {
                  const globalIdx = startIndex + i;
                  const isHovered = hoveredIndex === `${catIdx}-${i}`;

                  return (
                    <motion.div
                      key={i}
                      className="group relative overflow-hidden rounded-2xl border border-surface-alt bg-background shadow-sm transition-all duration-500 cursor-default hover:shadow-lg"
                      initial={{ opacity: 0, y: 40 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: 0.08 * globalIdx,
                        ease,
                      }}
                      onMouseEnter={() => setHoveredIndex(`${catIdx}-${i}`)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Image */}
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className={`object-cover transition-transform duration-700 ${
                            isHovered ? "scale-105" : "scale-100"
                          }`}
                        />
                        {/* Gradient fade */}
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-foreground/60 to-transparent" />
                        {/* Title overlay on image */}
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <h4 className="text-sm font-bold text-white drop-shadow-sm">
                            {item.title}
                          </h4>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="p-5 pt-3">
                        <p className="text-sm leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
