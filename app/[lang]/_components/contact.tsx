"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface ContactMapDict {
  address: string;
  mapsEmbedUrl: string;
  mapTitle: string;
}

interface ContactDict {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  body: string;
  bookCta: string;
  callCta: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  mapLink: string;
  map: ContactMapDict;
}

export default function Contact({ dict }: { dict: ContactDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const openAppointment = () => {
    window.dispatchEvent(new Event("open-appointment"));
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-surface-alt px-6 py-16 md:px-8 md:py-24 xl:px-16 xl:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {dict.badge}
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {dict.titleLine1}
          </h2>
          <p className="mt-1 font-display text-4xl font-bold tracking-tight text-muted sm:text-5xl">
            {dict.titleLine2}
          </p>
        </motion.div>

        {/* Two-column layout: info left, map right */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left — Contact info + CTAs */}
          <motion.div
            className="flex flex-col gap-5 rounded-2xl border border-black/5 bg-surface p-6 shadow-sm lg:p-8"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="text-sm leading-relaxed text-muted">{dict.body}</p>

            {/* Phone */}
            <a
              href={`tel:${dict.phone.replace(/\s/g, "")}`}
              className="group -mx-3 flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-primary/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-dark"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.1 3.4 2 2 0 0 1 3.08 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  {dict.phone}
                </div>
                <div className="text-xs text-muted">{dict.hours}</div>
              </div>
            </a>

            {/* Address */}
            <a
              href={dict.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group -mx-3 flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-primary/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-dark"
                >
                  <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  {dict.address}
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${dict.email}`}
              className="group -mx-3 flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-primary/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-dark"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  {dict.email}
                </div>
              </div>
            </a>

            {/* CTA buttons */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={openAppointment}
                className="flex-1 cursor-pointer rounded-full bg-primary py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98]"
              >
                {dict.bookCta}
              </button>
              <a
                href={`tel:${dict.phone.replace(/\s/g, "")}`}
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-black/8 bg-surface py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:text-primary"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.1 3.4 2 2 0 0 1 3.08 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
                </svg>
                {dict.callCta}
              </a>
            </div>
          </motion.div>

          {/* Right — Map */}
          <motion.div
            className="overflow-hidden rounded-2xl border border-black/5 shadow-sm"
            style={{ minHeight: "420px" }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <iframe
              src={dict.map.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={dict.map.mapTitle}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
