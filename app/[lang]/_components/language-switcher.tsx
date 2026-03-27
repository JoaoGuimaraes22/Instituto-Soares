"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "@/i18n-config";

export default function LanguageSwitcher({
  scrolled,
}: {
  scrolled: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split("/")[1] as Locale;

  if (i18n.locales.length <= 1) return null;

  function switchLocale(locale: Locale) {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center gap-1 text-sm font-mono">
      {i18n.locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1">
          <button
            onClick={() => switchLocale(locale)}
            className={`cursor-pointer uppercase tracking-wider transition-colors ${
              currentLocale === locale
                ? "text-primary font-semibold"
                : scrolled
                  ? "text-muted hover:text-foreground"
                  : "text-muted hover:text-foreground/70"
            }`}
          >
            {locale}
          </button>
          {index < i18n.locales.length - 1 && (
            <span className="text-muted">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
