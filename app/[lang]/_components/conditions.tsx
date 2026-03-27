"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

type Dict = {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  items: { icon: string; title: string; description: string }[];
};

const ease = [0.16, 1, 0.3, 1] as const;

/* Line-drawn medical SVG icons — white on primary circle */
const icons: Record<string, React.ReactNode> = {
  spine: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" d="M12 2v1m0 4v1m0 4v1m0 4v1m0 4v1" />
      <rect x="9" y="3" width="6" height="3" rx="1.5" />
      <rect x="9.5" y="8" width="5" height="3" rx="1.5" />
      <rect x="9" y="13" width="6" height="3" rx="1.5" />
      <rect x="9.5" y="18" width="5" height="3" rx="1.5" />
    </svg>
  ),
  neck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <circle cx="12" cy="6" r="4" />
      <path strokeLinecap="round" d="M12 10v4" />
      <path strokeLinecap="round" d="M8 14c0 0 1-2 4-2s4 2 4 2" />
      <path strokeLinecap="round" d="M6 18c0-2 2.5-4 6-4s6 2 6 4" />
      <path strokeLinecap="round" d="M6 18v3h12v-3" />
    </svg>
  ),
  nerve: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" d="M12 3v6" />
      <circle cx="12" cy="11" r="2" />
      <path strokeLinecap="round" d="M12 13v2l-4 6" />
      <path strokeLinecap="round" d="M12 15l4 6" />
      <path strokeLinecap="round" d="M10 9l-4-3" />
      <path strokeLinecap="round" d="M14 9l4-3" />
      <circle cx="12" cy="3" r="1" fill="currentColor" />
    </svg>
  ),
  posture: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <circle cx="12" cy="4" r="2.5" />
      <path strokeLinecap="round" d="M12 6.5v4" />
      <path strokeLinecap="round" d="M12 10.5c0 0 0 3-1 5s-2 4-2 5.5" />
      <path strokeLinecap="round" d="M12 10.5c0 0 0 3 1 5s2 4 2 5.5" />
      <path strokeLinecap="round" d="M8 9l4 1.5 4-1.5" />
      {/* guide line */}
      <path strokeLinecap="round" strokeDasharray="2 2" d="M18 2v20" className="opacity-40" />
    </svg>
  ),
  skin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 3c0 4-3 6-3 9s3 5 3 9" />
      <path strokeLinecap="round" d="M8 7c1 1 2 1.5 4 1.5s3-.5 4-1.5" />
      <path strokeLinecap="round" d="M7 17c1.5-1 3-1.5 5-1.5s3.5.5 5 1.5" />
      <circle cx="10" cy="12" r="0.75" fill="currentColor" />
      <circle cx="14" cy="10" r="0.75" fill="currentColor" />
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2 6.5L20.5 12l-6.5 2L12 22l-2-8-6.5-2L10 8.5z" />
      <circle cx="18" cy="5" r="1.5" />
      <circle cx="6" cy="18" r="1" />
    </svg>
  ),
};

export default function Conditions({ dict }: { dict: Dict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="conditions"
      className="relative py-24 sm:py-32 bg-surface-alt overflow-hidden"
    >
      {/* Decorative spine dots — right edge */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 opacity-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-primary" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4"
          >
            {dict.badge}
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease }}
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[0.95]">
              {dict.titleLine1}
              <br />
              <span className="text-primary">{dict.titleLine2}</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "3rem" } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease }}
            className="h-0.5 bg-primary rounded-full mt-6 mb-5"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease }}
            className="text-muted text-base sm:text-lg leading-relaxed"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dict.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.7, ease }}
              className="group relative bg-surface rounded-2xl p-7 border border-black/5 hover:border-primary/15 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-white mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rounded-2xl">
                {icons[item.icon] || icons.spine}
              </div>

              <h3 className="font-display text-xl text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>

              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-primary to-primary-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
