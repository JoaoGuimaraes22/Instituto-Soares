"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface ScheduleItem {
  day: string;
  hours: string;
}

interface HoursDict {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  hoursLabel: string;
  schedule: ScheduleItem[];
  note: string;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hours({ dict }: { dict: HoursDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Schedule is Mon(0)–Sun(6); JS getDay() is Sun(0)–Sat(6)
  const jsDay = new Date().getDay();
  const todayIndex = jsDay === 0 ? 6 : jsDay - 1;

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.5, delay, ease },
  });

  return (
    <section
      id="hours"
      ref={ref}
      className="bg-surface-alt px-6 py-16 md:px-8 md:py-24 xl:px-16 xl:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div className="mb-12" {...fadeUp(0)}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {dict.badge}
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            <span className="block text-foreground">{dict.titleLine1}</span>
            <span className="block text-primary/30">{dict.titleLine2}</span>
          </h2>
          {dict.subtitle && (
            <p className="mt-4 max-w-lg text-sm text-muted">{dict.subtitle}</p>
          )}
        </motion.div>

        <div className="mx-auto max-w-xl space-y-6">
          {/* Hours table */}
          <motion.div
            className="rounded-2xl border border-primary/10 bg-background p-6 shadow-sm"
            {...fadeUp(0.1)}
          >
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
              {dict.hoursLabel}
            </h3>
            <div className="divide-y divide-surface-alt">
              {dict.schedule.map((item, i) => {
                const isToday = i === todayIndex;
                return (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-3 ${
                      isToday ? "rounded-lg bg-primary/5 -mx-3 px-3" : ""
                    }`}
                  >
                    <span className={`text-sm font-medium ${isToday ? "text-primary" : "text-foreground"}`}>
                      {item.day}
                      {isToday && <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />}
                    </span>
                    <span className={`text-sm ${isToday ? "font-medium text-primary" : "text-muted"}`}>
                      {item.hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Note info box */}
          {dict.note && (
            <motion.div
              className="flex gap-3 rounded-2xl border border-primary/10 bg-primary/5 p-5"
              {...fadeUp(0.2)}
            >
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <p className="text-sm leading-relaxed text-muted">{dict.note}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
