# Image Prompts for Instituto Soares

Generated for AI image tools (Midjourney, DALL-E, Flux, Gemini, etc.)

## Tips
- Generate all images in one category before moving to the next for visual consistency
- Use the same seed/style reference across a category if your tool supports it
- The clinic is run by a Portuguese-Brazilian couple: Netto (male, chiropractic) and Roberta (female, aesthetics)
- All subjects should appear as warm, approachable Southern European/Brazilian professionals in their 30s-40s
- Clinic aesthetic: modern, clean, warm neutral tones, natural light, minimalist Portuguese interior
- Save as WebP at 80% quality
- Save images to the project's `public/` directory matching the exact paths listed

---

## Hero / Banner (1 image)

### hero-1.webp
- **Used in**: hero.tsx (hardcoded `src="/hero/hero-1.webp"`)
- **Display size**: full viewport width, `sizes="100vw"`, min-height 100dvh
- **Alt text**: (decorative background)

> Professional lifestyle photography of a male chiropractor performing a spinal adjustment on a patient lying face down on a modern treatment table. The practitioner wears a clean white polo, hands positioned precisely on the patient's upper back. Shot from a slightly elevated side angle showing both practitioner and patient. Modern clinical treatment room with warm neutral walls, soft natural light from a large window on the left side, clean minimalist Portuguese interior. Shallow depth of field on the background. Warm, calm, trustworthy atmosphere. High-end editorial healthcare photography. 1920x1080 landscape. Photorealistic. No text, no watermarks, no logos.

Save as: `public/hero/hero-1.jpg`

---

## About / Story (1 image)

### about-1.webp
- **Used in**: about section (`dict.about.image`)
- **Display size**: aspect-4/3 on mobile, aspect-square on desktop, `sizes="(max-width: 1024px) 100vw, 50vw"`
- **Alt text**: (about the clinic)

> Professional brand photography of the interior of a modern chiropractic and aesthetics clinic. A warm, inviting reception area with a small wooden desk, two comfortable waiting chairs, indoor plants, and soft natural light. Clean white walls with subtle warm wood accents. A shelf with neatly arranged skincare products visible in the background. The space feels welcoming, hygienic, and family-run — not sterile or corporate. Portuguese residential building converted into a clinic. Documentary editorial style, natural lighting. 1200x1200 square composition. Photorealistic. No text, no watermarks, no logos.

Save as: `public/about/about-1.jpg`

---

## Services (6 images)

### adjustment.webp
- **Used in**: services section, Chiropractic category
- **Display size**: h-40 container, `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"`
- **Alt text**: Spinal Adjustment

> Close-up professional photography of a male chiropractor's hands performing a precise spinal adjustment on a patient's upper back. Focus on the hands and the vertebral area. Patient lying face down on a padded white treatment table. Clean, clinical setting with soft diffused lighting. Warm skin tones, professional and reassuring atmosphere. Shallow depth of field. Medical editorial photography style. 800x500 landscape. Photorealistic. No text, no watermarks.

Save as: `public/services/adjustment.jpg`

---

### massage.webp
- **Used in**: services section, Chiropractic category
- **Display size**: h-40 container, 33vw on desktop
- **Alt text**: Therapeutic Massage IS

> Professional photography of a therapeutic deep tissue massage in progress. A male therapist's hands working on a patient's shoulder and upper back area. The patient is lying face down, relaxed, with a white towel draped across the lower back. Warm ambient lighting from the side, modern treatment room with clean neutral tones. Emphasis on the skill and care of the hands. Relaxing yet professional atmosphere. Shallow depth of field on hands. 800x500 landscape. Photorealistic. No text, no watermarks.

Save as: `public/services/massage.jpg`

---

### pain-relief.webp
- **Used in**: services section, Chiropractic category
- **Display size**: h-40 container, 33vw on desktop
- **Alt text**: Pain Relief Session

> Professional healthcare photography showing a male practitioner assessing a patient's lower back and lumbar region. The patient is seated on the edge of a treatment table while the practitioner gently palpates the spine area, explaining the assessment. Both visible from the side. Modern treatment room with natural light, clean white and warm wood interior. The patient's expression shows trust and relief. Medium shot, slightly warm color grading. 800x500 landscape. Photorealistic. No text, no watermarks.

Save as: `public/services/pain-relief.jpg`

---

### facial.webp
- **Used in**: services section, Aesthetics category
- **Display size**: h-40 container, 33vw on desktop
- **Alt text**: Deep Facial Cleansing

> Professional aesthetics photography of a female specialist performing a deep facial cleansing treatment on a female client. The client is lying comfortably on a treatment bed with eyes closed, a headband keeping hair back. The specialist wears gloves and is carefully working on the client's cheek area with professional tools. Soft LED ring light creating even illumination on the face. Clean, modern aesthetics room with white surfaces and minimal decor. Serene, spa-like atmosphere. Close to medium shot. 800x500 landscape. Photorealistic. No text, no watermarks.

Save as: `public/services/facial.jpg`

---

### laser.webp
- **Used in**: services section, Aesthetics category
- **Display size**: h-40 container, 33vw on desktop
- **Alt text**: Laser Hair Removal

> Professional photography of a diode laser hair removal session. A female aesthetics specialist operating a modern laser handpiece on a client's leg area. The client is lying on a padded treatment bed, wearing protective eyewear. The specialist wears gloves and professional attire. Modern clinical room with clean white surfaces and professional equipment. Cool LED lighting mixed with natural light. Focus on the technology and the care of the practitioner. Professional and comfortable atmosphere. 800x500 landscape. Photorealistic. No text, no watermarks.

Save as: `public/services/laser.jpg`

---

### microblading.webp
- **Used in**: services section, Aesthetics category
- **Display size**: h-40 container, 33vw on desktop
- **Alt text**: Microblading & Lashes

> Close-up professional photography of a female aesthetics specialist performing eyebrow microblading on a female client. Extreme attention to detail — the specialist's gloved hand holds a microblading pen near the client's brow area. The client has eyes closed, headband on, lying comfortably. Ring light creating even, shadow-free illumination on the brow area. Clean white treatment room. Focus on precision and artistry. Beauty editorial photography style with warm tones. 800x500 landscape. Photorealistic. No text, no watermarks.

Save as: `public/services/microblading.jpg`

---

## People / Portraits (2 images)

### netto.webp
- **Used in**: team section (`dict.team.members[0].image`)
- **Display size**: aspect-3/4 portrait, `sizes="(max-width: 768px) 100vw, 50vw"`
- **Alt text**: Netto Soares — Chiropractic Specialist

> Professional environmental portrait of a male chiropractor in his late 30s with a warm, confident smile. Short dark hair, light stubble, athletic build. Wearing a clean white polo shirt. Standing in his treatment room with arms relaxed at his sides or lightly crossed. Soft natural light from a window on the left. Modern, minimal clinical background with a treatment table partially visible. The expression conveys trust, competence, and approachability. Portuguese-Brazilian appearance. Shot from waist up, slight three-quarter angle. Shallow depth of field. Editorial portrait photography. 800x1067 portrait (3:4). Photorealistic. No text, no watermarks.

Save as: `public/team/netto.jpg`

---

### roberta.webp
- **Used in**: team section (`dict.team.members[1].image`)
- **Display size**: aspect-3/4 portrait, `sizes="(max-width: 768px) 100vw, 50vw"`
- **Alt text**: Roberta Soares — Advanced Aesthetics Specialist

> Professional environmental portrait of a female aesthetics specialist in her mid-30s with a warm, genuine smile. Dark hair pulled back neatly, minimal natural makeup, clear skin. Wearing a clean white lab coat or professional aesthetics tunic. Standing in her treatment room with skincare products on a shelf behind her, slightly out of focus. Soft natural light from a window. The expression conveys warmth, expertise, and genuine care. Portuguese-Brazilian appearance. Shot from waist up, slight three-quarter angle. Shallow depth of field. Editorial portrait photography. 800x1067 portrait (3:4). Photorealistic. No text, no watermarks.

Save as: `public/team/roberta.jpg`

---

## Gallery / Lifestyle (6 images)

### gallery-1.webp
- **Used in**: galleryStrip section
- **Display size**: w-72 h-48 (sm: w-80 h-56), `sizes="(min-width: 640px) 320px, 288px"`
- **Alt text**: Clinic interior

> Professional interior photography of a modern chiropractic clinic's main corridor. Clean white walls, warm wood flooring, subtle recessed lighting. A treatment room door is open revealing a clean padded table inside. Indoor green plant in a ceramic pot near the entrance. Minimalist Portuguese interior design. Natural light from a window at the end of the corridor. Clean, inviting, hygienic atmosphere. Wide angle. 800x560 landscape. Photorealistic. No text, no watermarks.

Save as: `public/gallery/gallery-1.jpg`

---

### gallery-2.webp
- **Used in**: galleryStrip section
- **Display size**: w-72 h-48 (sm: w-80 h-56)
- **Alt text**: Treatment room

> Professional interior photography of a chiropractic treatment room. A modern padded adjustment table in the center, clean white walls, warm overhead lighting. Small side table with towels neatly folded. A framed anatomical spine poster on the wall. Natural light filtering through semi-transparent curtains. Everything spotlessly clean and organized. Warm neutral color palette. Medium-wide angle. 800x560 landscape. Photorealistic. No text, no watermarks.

Save as: `public/gallery/gallery-2.jpg`

---

### gallery-3.webp
- **Used in**: galleryStrip section
- **Display size**: w-72 h-48 (sm: w-80 h-56)
- **Alt text**: Chiropractic session

> Professional lifestyle photography of a chiropractic session in progress. A male practitioner standing beside a treatment table, hands on a patient's upper back, performing an adjustment. Both shot from a medium distance showing the full treatment room context. Natural light, clean modern interior. The mood is calm and professional. Documentary editorial style. 800x560 landscape. Photorealistic. No text, no watermarks.

Save as: `public/gallery/gallery-3.jpg`

---

### gallery-4.webp
- **Used in**: galleryStrip section
- **Display size**: w-72 h-48 (sm: w-80 h-56)
- **Alt text**: Aesthetics treatment room

> Professional interior photography of a modern aesthetics treatment room. A padded reclining bed in the center, LED magnifying lamp on a flexible arm nearby. Clean white surfaces, organized skincare products on glass shelves, soft ambient lighting. A small trolley with professional tools and products. The space feels clinical yet welcoming — spa meets medical. 800x560 landscape. Photorealistic. No text, no watermarks.

Save as: `public/gallery/gallery-4.jpg`

---

### gallery-5.webp
- **Used in**: galleryStrip section
- **Display size**: w-72 h-48 (sm: w-80 h-56)
- **Alt text**: Reception area

> Professional interior photography of a small, welcoming clinic reception area. A wooden reception counter with a small vase of fresh flowers. Two comfortable upholstered waiting chairs against the wall. Warm lighting, clean white walls with a subtle logo sign (out of focus). A coffee machine or water dispenser visible in the corner. The feeling is warm, family-run, and professional. Portuguese residential building style. 800x560 landscape. Photorealistic. No text, no watermarks.

Save as: `public/gallery/gallery-5.jpg`

---

### gallery-6.webp
- **Used in**: galleryStrip section
- **Display size**: w-72 h-48 (sm: w-80 h-56)
- **Alt text**: Consultation

> Professional lifestyle photography of a consultation between a male practitioner and a female patient. They are seated facing each other in a consultation area — the practitioner gestures while explaining something, the patient listens attentively. A desk between them with papers or a tablet. Natural light from a nearby window. Warm, trusting interaction captured candidly. Medium shot showing both from the side. 800x560 landscape. Photorealistic. No text, no watermarks.

Save as: `public/gallery/gallery-6.jpg`

---

## Summary

| Category | Count | Dimensions |
|---|---|---|
| Hero / Banner | 1 | 1920x1080 |
| About / Story | 1 | 1200x1200 |
| Services | 6 | 800x500 |
| People / Portraits | 2 | 800x1067 |
| Gallery / Lifestyle | 6 | 800x560 |
| **Total** | **16** | |
