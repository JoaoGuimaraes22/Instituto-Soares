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
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    const onOpen = () => setModalOpen(true);
    const onClose = () => setModalOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("open-appointment", onOpen);
    window.addEventListener("close-appointment", onClose);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("open-appointment", onOpen);
      window.removeEventListener("close-appointment", onClose);
    };
  }, []);

  const visible = scrolled && !modalOpen;

  const openAppointment = () => {
    window.dispatchEvent(new CustomEvent("open-appointment"));
  };

  return (
    <div
      className={`fixed inset-x-2 bottom-2 z-60 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-24"
      }`}
    >
      <div className="flex gap-1.5 rounded-xl bg-foreground/95 p-1.5 shadow-2xl backdrop-blur-sm">
        <button
          onClick={openAppointment}
          className="flex-1 cursor-pointer rounded-lg bg-primary py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          {dict.ctaBook}
        </button>
        <a
          href={`tel:${dict.phone.replace(/\s/g, "")}`}
          className="flex-1 cursor-pointer rounded-lg border border-white/15 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-white/10"
        >
          {dict.ctaCall}
        </a>
      </div>
    </div>
  );
}
