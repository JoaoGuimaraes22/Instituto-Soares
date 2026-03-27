"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface Stat {
  value: string;
  label: string;
}

interface AboutDict {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  body: string;
  image: string;
  stats: Stat[];
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function About({ dict }: { dict: AboutDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const paragraphs = dict.body.split("\n\n").filter(Boolean);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-surface px-6 py-16 md:px-8 md:py-24 xl:px-16 xl:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {dict.badge}
            </p>
            <h2 className="mb-8 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              <span className="block text-foreground">{dict.titleLine1}</span>
              <span className="block text-primary">{dict.titleLine2}</span>
            </h2>

            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted md:text-base">
                  {p}
                </p>
              ))}
            </div>

            {dict.stats.length > 0 && (
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-primary/10 pt-8">
                {dict.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease }}
                  >
                    <div className="text-2xl font-bold text-primary sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs font-medium leading-tight text-muted">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Image column */}
          <motion.div
            className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-md lg:aspect-square"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <Image
              src={dict.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
