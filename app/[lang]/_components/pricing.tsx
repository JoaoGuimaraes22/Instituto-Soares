"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
}

interface PricingDict {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  popularLabel: string;
  cta: string;
  disclaimer: string;
  plans: Plan[];
}

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = (inView: boolean, delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
  transition: { duration: 0.5, delay, ease },
});

export default function Pricing({ dict }: { dict: PricingDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openAppointment = () => {
    window.dispatchEvent(new Event("open-appointment"));
  };

  return (
    <section id="pricing" ref={ref} className="px-6 py-16 md:px-8 md:py-24 xl:px-16 xl:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp(inView)}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {dict.badge}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {dict.titleLine1}
          </h2>
          <p className="mt-1 text-lg text-muted">{dict.titleLine2}</p>
          {dict.subtitle && (
            <p className="mt-3 max-w-xl text-muted">{dict.subtitle}</p>
          )}
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {dict.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              {...fadeUp(inView, 0.1 + i * 0.1)}
              className={[
                "relative flex flex-col rounded-2xl border p-8 transition-shadow duration-300",
                plan.popular
                  ? "border-primary bg-primary-light/10 shadow-lg"
                  : "border-surface-alt bg-background hover:shadow-md",
              ].join(" ")}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                  {dict.popularLabel}
                </span>
              )}

              <div
                className={[
                  "mb-1 text-xs font-bold uppercase tracking-widest",
                  plan.popular ? "text-primary" : "text-muted",
                ].join(" ")}
              >
                {plan.name}
              </div>
              <div className="mb-1 text-4xl font-bold tracking-tight text-foreground">
                {plan.price}
              </div>
              <div className="mb-6 text-sm text-muted">{plan.period}</div>

              <ul className="mb-8 flex flex-col gap-2.5">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-0.5 shrink-0 font-bold text-primary">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={openAppointment}
                className={[
                  "mt-auto block cursor-pointer rounded-xl py-3 text-center text-sm font-semibold transition-all duration-200",
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "border border-primary text-primary hover:bg-primary-light/10",
                ].join(" ")}
              >
                {dict.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {dict.disclaimer && (
          <motion.p {...fadeUp(inView, 0.4)} className="mt-8 text-center text-sm text-muted">
            {dict.disclaimer}
          </motion.p>
        )}
      </div>
    </section>
  );
}
