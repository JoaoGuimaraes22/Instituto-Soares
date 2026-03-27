# Audit Report — Instituto Soares
_Generated: 2026-03-27_

## 🔴 Critical (must fix before launch)

- [ ] **Missing email** — `metadata.email` is empty in both EN and PT. Need real business email or remove from contact section
- [ ] **og-image.jpg is placeholder** — 336 bytes, needs real 1200x630 image for social sharing
- [ ] **favicon.ico is placeholder** — 1086 bytes, needs real business favicon
- [ ] **NEXT_PUBLIC_SITE_URL not set** — `.env.example` has `http://localhost:3000`, no `.env` file exists. Will be set by `ignite deploy`
- [ ] **NEXT_PUBLIC_FORMSPREE_ID not set** — appointment form requires Formspree integration to actually submit
- [ ] **13 images missing** — dicts reference `.webp` files that don't exist yet (images being generated as `.jpg`, need `ignite images optimize` to convert):
  - `/services/massage.webp`
  - `/services/pain-relief.webp`
  - `/services/facial.webp`
  - `/services/laser.webp`
  - `/services/microblading.webp`
  - `/team/netto.webp`
  - `/team/roberta.webp`
  - `/gallery/gallery-1.webp`
  - `/gallery/gallery-2.webp`
  - `/gallery/gallery-3.webp`
  - `/gallery/gallery-4.webp`
  - `/gallery/gallery-5.webp`
  - `/gallery/gallery-6.webp`

## 🟡 Warning (should verify with client)

- [ ] **Pricing is estimated** — €45/€75/€60 plan prices are not confirmed by the business. Verify before launch
- [ ] **Stats counter "1500+ Patients Treated"** — unverified estimate. Confirm with business or use a more conservative number
- [ ] **Stats counter "15+ Treatments Offered"** — derived from service list, verify with business
- [ ] **Founded year "2020"** — inferred from reviews (client since 2019 before own space). Verify exact year
- [ ] **No Instagram/Facebook links** — `footer` and `contact` have no social media URLs. Business likely has accounts
- [ ] **Reviews are EN translations of PT originals** — the EN reviews are translated summaries of real Portuguese reviews. This is fine for the site but they are paraphrased, not verbatim

## 🟢 Info (nice to have)

- [ ] **3 images already downloaded** — `hero-1.jpg`, `about-1.jpg`, `adjustment.jpg` exist (awaiting optimize)
- [ ] **No Google Review URL set** — needed for a "Leave a Review" CTA link (env var)
- [ ] **site.webmanifest** needs business name update — currently has default name

## ✅ Passing Checks

- ✅ **Dict parity**: EN and PT have identical structure (all keys match)
- ✅ **Image paths match**: All image paths identical between EN and PT
- ✅ **Contact data match**: Phone, address, URLs identical in both locales
- ✅ **Prices match**: €45, €75, €60 identical in both locales
- ✅ **Hours match**: Schedule times identical (day names correctly translated)
- ✅ **Maps embed URL**: Real CID-based URL, not placeholder
- ✅ **metadata.type**: Set to "Chiropractor" (valid Schema.org type)
- ✅ **metadata.name**: Real business name, not placeholder
- ✅ **metadata.phone**: Real phone number from Google Maps data
- ✅ **metadata.address**: Real address from Google Maps data
- ✅ **Reviews are real**: All 6 reviews sourced from real Google Reviews (scraped via `ignite gather`)
- ✅ **Branding consistent**: "Instituto Soares" used consistently across navbar, footer, metadata
- ✅ **No placeholder text**: No "Lorem ipsum", "Your Business", or template defaults found
- ✅ **All URLs valid**: Maps links use real CID, no broken protocols

## 📊 Summary

- **6** critical issues (email, og-image, favicon, env vars, formspree, 13 missing images)
- **6** warnings (pricing, stats, year, socials, review translations)
- **3** info items
- **13** images missing (being generated)
- **3** images present (hero, about, 1 service)

## Top 3 to Fix First

1. **Finish image generation + run `ignite images optimize`** — 13 of 16 images still missing
2. **Set up Formspree** — appointment form is non-functional without `NEXT_PUBLIC_FORMSPREE_ID`
3. **Get business email + social links** — contact section and footer need these for credibility
