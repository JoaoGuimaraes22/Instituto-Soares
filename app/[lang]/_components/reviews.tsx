"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatar: string | null;
}

interface ReviewsDict {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  items: TestimonialItem[];
}

const AVATAR_COLORS = [
  { bg: "bg-primary/15", text: "text-primary-dark" },
  { bg: "bg-accent/15", text: "text-accent" },
  { bg: "bg-blue-100", text: "text-blue-700" },
  { bg: "bg-amber-100", text: "text-amber-700" },
  { bg: "bg-rose-100", text: "text-rose-700" },
  { bg: "bg-cyan-100", text: "text-cyan-700" },
];

function getInitials(name: string): string {
  const parts = name.trim().split(" ");
  return parts.length >= 2
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : parts[0][0].toUpperCase();
}

function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TestimonialCard({
  item,
  colorIndex,
}: {
  item: TestimonialItem;
  colorIndex: number;
}) {
  const color = AVATAR_COLORS[colorIndex % AVATAR_COLORS.length];
  const initials = getInitials(item.name);

  return (
    <div className="mb-4 flex flex-col gap-4 rounded-2xl border border-black/5 bg-surface p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:border-black/10">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Quote mark */}
      <svg
        width="24"
        height="18"
        viewBox="0 0 24 18"
        fill="none"
        className="shrink-0 text-primary/20"
      >
        <path
          d="M0 18V10.8C0 7.2 1.2 4.2 3.6 1.8L5.4 0l2.4 1.8C6.6 3 5.7 4.5 5.4 6H9V18H0zm13.2 0V10.8c0-3.6 1.2-6.6 3.6-9L18.6 0l2.4 1.8C19.8 3 18.9 4.5 18.6 6H22.2V18H13.2z"
          fill="currentColor"
        />
      </svg>

      <p className="flex-1 text-sm leading-relaxed text-muted">
        {item.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-black/5 pt-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${color.bg}`}
        >
          <span className={`text-xs font-bold ${color.text}`}>{initials}</span>
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">{item.name}</p>
          {item.role && <p className="text-xs text-muted">{item.role}</p>}
        </div>
      </div>
    </div>
  );
}

function ScrollColumn({
  items,
  duration,
  globalIndexOffset,
}: {
  items: TestimonialItem[];
  duration: string;
  globalIndexOffset: number;
}) {
  const prefersReduced = useReducedMotion();
  const tripled = [...items, ...items, ...items];

  return (
    <div className="min-w-0 flex-1 overflow-hidden">
      <div
        style={
          prefersReduced
            ? {}
            : {
                animation: `testimonials-scroll-up ${duration} linear infinite`,
              }
        }
      >
        {tripled.map((item, i) => (
          <TestimonialCard
            key={i}
            item={item}
            colorIndex={(i % items.length) + globalIndexOffset}
          />
        ))}
      </div>
    </div>
  );
}

export default function Reviews({ dict }: { dict: ReviewsDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const third = Math.ceil(dict.items.length / 3);
  const col1 = dict.items.slice(0, third);
  const col2 = dict.items.slice(third, third * 2);
  const col3 = dict.items.slice(third * 2);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="bg-surface-alt px-6 py-16 md:px-8 md:py-24 xl:px-16 xl:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-12 leading-none"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {dict.badge}
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {dict.titleLine1}
          </h2>
          <h2 className="font-display text-4xl font-bold tracking-tight text-muted sm:text-5xl md:text-6xl">
            {dict.titleLine2}
          </h2>
          {dict.subtitle && (
            <p className="mt-4 max-w-md text-sm text-muted">{dict.subtitle}</p>
          )}
        </motion.div>

        {/* Scrolling columns */}
        <motion.div
          className="relative h-150 overflow-hidden md:h-175"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
        >
          {/* Fade gradients */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-linear-to-b from-surface-alt to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t from-surface-alt to-transparent" />

          {/* Mobile: single column */}
          <div className="h-full md:hidden">
            <ScrollColumn
              items={dict.items}
              duration="65s"
              globalIndexOffset={0}
            />
          </div>

          {/* Desktop: 3 columns */}
          <div className="hidden h-full gap-4 md:flex">
            <ScrollColumn
              items={col1}
              duration="20s"
              globalIndexOffset={0}
            />
            <ScrollColumn
              items={col2}
              duration="35s"
              globalIndexOffset={3}
            />
            <ScrollColumn
              items={col3}
              duration="25s"
              globalIndexOffset={6}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
