"use client";

import { useEffect, useState } from "react";

interface AppointmentBarDict {
  ctaBook: string;
  ctaCall: string;
  phone: string;
}

export default function AppointmentBar({
  dict,
}: {
  dict: AppointmentBarDict;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openAppointment = () => {
    window.dispatchEvent(new CustomEvent("open-appointment"));
  };

  return (
    <div
      className={`fixed inset-x-2 bottom-2 z-60 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-24"
      }`}
    >
      <div className="flex gap-2 rounded-2xl bg-foreground/95 p-2 shadow-2xl backdrop-blur-sm">
        <button
          onClick={openAppointment}
          className="flex-1 cursor-pointer rounded-xl bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          {dict.ctaBook}
        </button>
        <a
          href={`tel:${dict.phone.replace(/\s/g, "")}`}
          className="flex-1 cursor-pointer rounded-xl border border-white/15 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          {dict.ctaCall}
        </a>
      </div>
    </div>
  );
}
