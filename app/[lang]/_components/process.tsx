"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

type Dict = {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  steps: { number: string; title: string; description: string }[];
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function Process({ dict }: { dict: Dict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="process"
      className="relative py-24 sm:py-32 bg-surface overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header — centered */}
        <div className="text-center max-w-2xl mx-auto mb-20">
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
              {dict.titleLine1}{" "}
              <span className="text-primary">{dict.titleLine2}</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "3rem" } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease }}
            className="h-0.5 bg-primary rounded-full mt-6 mb-5 mx-auto"
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

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <motion.div
              className="absolute top-7 left-[10%] right-[10%] h-px bg-black/10"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 1.2, ease }}
              style={{ originX: 0 }}
            />
            {/* Animated progress line */}
            <motion.div
              className="absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary via-primary-light to-primary"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.8, duration: 1.5, ease }}
              style={{ originX: 0 }}
            />

            <div className="grid grid-cols-5 gap-4">
              {dict.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.5 + i * 0.15,
                    duration: 0.7,
                    ease,
                  }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Number circle */}
                  <div className="relative mb-6">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-lg font-semibold relative z-10"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{
                        delay: 0.6 + i * 0.15,
                        duration: 0.5,
                        ease,
                      }}
                    >
                      {step.number}
                    </motion.div>
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary/20"
                      initial={{ scale: 1, opacity: 0 }}
                      animate={
                        inView
                          ? { scale: [1, 1.6, 1.6], opacity: [0, 0.3, 0] }
                          : {}
                      }
                      transition={{
                        delay: 0.8 + i * 0.15,
                        duration: 1,
                        ease: "easeOut",
                      }}
                    />
                  </div>

                  <h3 className="font-display text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden">
          <div className="relative pl-10">
            {/* Vertical line */}
            <motion.div
              className="absolute left-[15px] top-0 bottom-0 w-px bg-black/10"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.4, duration: 1, ease }}
              style={{ originY: 0 }}
            />
            {/* Animated progress line */}
            <motion.div
              className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary-light to-primary"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.8, duration: 1.5, ease }}
              style={{ originY: 0 }}
            />

            <div className="space-y-10">
              {dict.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.5 + i * 0.12,
                    duration: 0.7,
                    ease,
                  }}
                  className="relative"
                >
                  {/* Number circle — positioned on the vertical line */}
                  <motion.div
                    className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold z-10"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{
                      delay: 0.6 + i * 0.12,
                      duration: 0.4,
                      ease,
                    }}
                  >
                    {step.number}
                  </motion.div>

                  <div className="pt-0.5">
                    <h3 className="font-display text-lg text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
