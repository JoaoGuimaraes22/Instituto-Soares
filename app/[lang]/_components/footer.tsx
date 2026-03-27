interface NavLink {
  id: string;
  label: string;
}

interface FooterDict {
  brand: string;
  tagline: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  copyright: string;
  bookCta: string;
  exploreLabel: string;
  hoursLabel: string;
  findUsLabel: string;
  madeIn: string;
  navLinks: NavLink[];
}

export default function Footer({ dict }: { dict: FooterDict }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground px-6 pt-16 pb-8 md:px-8 xl:px-16">
      {/* Primary accent line */}
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 h-0.5 w-16 bg-primary" />

        {/* Top: brand + tagline + CTA */}
        <div className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-4 block text-2xl font-bold tracking-tight text-white">
              {dict.brand}
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              {dict.tagline}
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            {dict.bookCta}
          </a>
        </div>

        {/* Middle: 3-column grid */}
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Nav links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
              {dict.exploreLabel}
            </p>
            <nav className="flex flex-col gap-2.5">
              {dict.navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="cursor-pointer text-sm text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Hours */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
              {dict.hoursLabel}
            </p>
            <p className="text-sm leading-relaxed text-white/50 whitespace-pre-line">
              {dict.hours}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
              {dict.findUsLabel}
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <span className="leading-relaxed">{dict.address}</span>
              <a
                href={`tel:${dict.phone.replace(/\s/g, "")}`}
                className="cursor-pointer transition-colors hover:text-white"
              >
                {dict.phone}
              </a>
              <a
                href={`mailto:${dict.email}`}
                className="cursor-pointer transition-colors hover:text-white"
              >
                {dict.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/25">
            {dict.copyright.replace("{year}", String(year))}
          </p>
          <p className="text-xs text-white/15">{dict.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
