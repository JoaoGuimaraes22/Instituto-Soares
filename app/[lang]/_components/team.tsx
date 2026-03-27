"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface TeamMember {
  name: string;
  role: string;
  specialization: string;
  description: string;
  image: string;
}

interface TeamDict {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  members: TeamMember[];
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function Team({ dict }: { dict: TeamDict }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="team"
      ref={ref}
      className="relative bg-surface px-6 py-16 md:px-8 md:py-24 xl:px-16 xl:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-16"
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
          {dict.subtitle && (
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
              {dict.subtitle}
            </p>
          )}
        </motion.div>

        {/* Two large editorial cards side by side */}
        <div className="grid gap-8 md:grid-cols-2">
          {dict.members.map((member, i) => (
            <motion.div
              key={i}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.15,
                ease,
              }}
            >
              {/* Large photo with overlay */}
              <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-surface-alt shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />

                {/* Name + role overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-px w-6 bg-primary-light" />
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-light">
                      {member.role}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {member.name}
                  </h3>
                </div>

                {/* Specialization badge */}
                <div className="absolute top-4 left-4 rounded-full bg-background/90 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur-sm">
                  {member.specialization}
                </div>
              </div>

              {/* Description below photo */}
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
