"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

type Dict = {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  tagline: string;
  cta: string;
  ctaSecondary: string;
  stats: { value: string; label: string }[];
};

const ease = [0.16, 1, 0.3, 1] as const;

function SpineLine() {
  return (
    <motion.div
      className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      {Array.from({ length: 7 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-primary/40"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.4, ease }}
        />
      ))}
      <motion.div
        className="w-px bg-gradient-to-b from-primary/40 to-transparent"
        initial={{ height: 0 }}
        animate={{ height: 64 }}
        transition={{ delay: 1.5, duration: 0.8, ease }}
      />
    </motion.div>
  );
}

export default function Hero({ dict }: { dict: Dict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-[100dvh] flex flex-col overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero/hero-1.webp"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay — strong on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/70 to-foreground/30 lg:from-foreground/90 lg:via-foreground/50 lg:to-transparent" />
        {/* Bottom gradient for stats bar */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-foreground/80 to-transparent" />
      </div>

      {/* Content — fills viewport, two-column on desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-32 flex-1 flex items-center">
        <div className="flex w-full items-center justify-between gap-12">
        <div className="relative max-w-2xl pl-0 lg:pl-10">
          {/* Spine line accent */}
          <SpineLine />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease }}
            className="mb-4 sm:mb-5"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary-light border border-primary-light/30 rounded-full px-4 py-1.5 bg-primary/10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {dict.badge}
            </span>
          </motion.div>

          {/* Three-line title */}
          <div className="mb-5 sm:mb-6">
            {[dict.titleLine1, dict.titleLine2, dict.titleLine3].map(
              (line, i) => (
                <motion.h1
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease }}
                  className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.9] tracking-tight"
                >
                  {line}
                </motion.h1>
              )
            )}
          </div>

          {/* Animated accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "5rem" } : {}}
            transition={{ delay: 0.9, duration: 0.8, ease }}
            className="h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mb-4 sm:mb-5"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7, ease }}
            className="text-base sm:text-lg text-white/70 max-w-md leading-relaxed mb-6 sm:mb-8"
          >
            {dict.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.7, ease }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <button
              onClick={() =>
                window.dispatchEvent(new Event("open-appointment"))
              }
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-medium px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              {dict.cta}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              {dict.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Stats — vertical column on the right, desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8, ease }}
          className="hidden lg:flex flex-col gap-8"
        >
          {dict.stats.map((stat, i) => (
            <div key={i} className="text-right">
              <div className="text-3xl xl:text-4xl font-display text-white">
                {stat.value}
              </div>
              <div className="text-xs text-white/50 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 z-10 hidden lg:flex flex-col items-center gap-2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/40 animate-scroll-hint" />
        </div>
      </motion.div>
    </section>
  );
}
