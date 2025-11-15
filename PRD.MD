# Project: ThumpstarUSA-style Powersports Site (Next.js)

## 1) Summary & Goals

* **Goal:** Build a premium, smooth, high-performance demo website for a local retailer in the same powersports business, closely mirroring the **structure, look-and-feel, and key flows** of thumpstarusa.com.
* **Primary Outcomes:**

  * Browsable catalog (dirt bikes, pit bikes, ATVs, parts) with PDPs, specs, galleries.
  * Lead capture (contact, request-to-buy, book test ride) and optional checkout (if integrated with Shopify or similar).
  * VIN-based parts lookup (demo version with mock data).
  * CMS-ready content model; SEO & analytics; A11y; mobile-first.

## 2) Scope (MVP → Nice-to-Have)

* **MVP:** Home, Category/Collections, Product Detail (PDP), Parts (VIN search demo), Database (VIN decode demo page), Gallery, FAQ, Testimonials, About, Contact, Search, Basic Authless cart (optional), Legal pages.
* **Nice-to-have:** Compare, Dealer locator (if retailer has partners), Financing page, 360 viewer on PDP, Inventory feed, Account/Orders, Store pickup.

> **IP Note:** Use placeholders or licensed images/copy. Do **not** reuse logos/brand assets without permission. All assets in this doc listed as examples; for the demo, swap with royalty-free or licensed equivalents.

---

## 3) Sitemap & Flows

* **/** Home
* **/collections** Collections hub (by product family)
* **/dirt-bike**, **/pit-bike**, **/atv** Category landing pages (rich content + PLP)
* **/products/[handle]** Product details
* **/parts** VIN-based parts lookup (demo)
* **/database** VIN database search (demo)
* **/gallery** Lifestyle & product gallery (grid + lightbox)
* **/faq** Frequently asked questions
* **/testimonials** Customer testimonials
* **/workshop/assembly-servicing** Assembly & servicing resources
* **/graphics** Custom graphics/decals (configurable grid)
* **/about** Brand/retailer story
* **/contact** Contact & lead forms (sales, service, parts)
* **/feedback** Feedback form
* **/licensing** Licensing/permissions for content
* **/search** Search results
* **/legal/[slug]** Privacy, Terms

**Key Flows**

1. Discover → Category → Product → Lead (Contact/Request to Buy)
2. Search → Product → Spec/Media → Lead
3. VIN/Parts → Match model → Parts listing (demo)
4. Gallery/Testimonials → Brand trust → Contact

---

## 4) Page-by-Page Requirements

### Home

* Hero (full-bleed image/video), featured collections (Dirt/Pit/ATV), featured bikes carousel, highlights banner (Tri-Bar frame, linkage suspension, etc.), testimonials teaser, CTA to contact/test ride, latest gallery grid.
* Sticky header with mega-navigation, top utility bar (phone, email), site-wide search.

### Collections/Category (PLP)

* Grid of products (12/24 per page), filters (engine cc, seat height, price, status), sort. Intro copy block.

### Product Detail (PDP)

* Media gallery (9+ images), thumbnail rail, optional YouTube video, highlights cards, tabs/accordion: **Overview, Specs, Geometry, Warranty, Documents**.
* Price (or MSRP), status (In stock/Dealer only), CTAs: **Request Quote**, **Book Test Ride**, **Call**.
* Cross-sell: related models.

### Parts (VIN search)

* VIN input, model autocomplete, result table (mock), download parts list (PDF link placeholder), instructions.

### Database (VIN)

* Search box, sample results, model cards linking to specs (demo dataset).

### Gallery

* Masonry/grid, filter by tag (bikes, events, rider level), lightbox.

### FAQ

* Accordion, categories (orders, parts, assembly, maintenance). Search within page.

### Testimonials

* Cards (quote, rating, rider type), submit testimonial form (moderated, demo only).

### Workshop / Assembly & Servicing

* Step-by-step content, PDF/manual placeholders, video embeds.

### Graphics

* Grid of decal kits; detail modal with swatches (demo images).

### Contact

* Multi-form tabs (Sales, Service, Parts) with location, hours, phone, WhatsApp, email.

---

## 5) Design System (Tokens)

> Neutral, industrial aesthetic with a **neon chartreuse accent** (à la off-road brand) on black/gray. WCAG AA contrast.

### Colors (via CSS Variables)

The theme is controlled by CSS variables defined in `src/app/globals.css`. The primary brand color is a neon chartreuse.

*   **Primary/Accent (`--primary`):** `hsl(74, 100%, 47%)` (`#C6F000`)
*   **Primary Foreground (`--primary-foreground`):** `hsl(0, 0%, 7%)` (`#111111`)
*   **Dark Background (`--background` in dark mode):** `hsl(0, 0%, 4%)` (`#0A0A0A`)
*   **Dark Card BG (`--card` in dark mode):** `hsl(0, 0%, 8%)`
*   **Light Background (`--background` in light mode):** `hsl(0, 0%, 100%)` (`#FFFFFF`)
*   **Text (`--foreground`):** Dark gray for light mode, light gray for dark mode.
*   **Borders (`--border`):** Light gray for light mode, dark gray for dark mode.

### Typography

* **Headings:** *Oswald* or *Anton* (bold, automotive); fallback *Inter* for body.
* **Body:** *Inter* 16–18px base, 1.6 line-height.

### Spacing & Grid

* 8px baseline; container widths: sm 640, md 768, lg 1024, xl 1280, 2xl 1536.
* 12-col grid; cards with 20–24px padding; radius 16–20px for large surfaces.

### Elevation & Effects

* Soft shadows (hover lift), subtle glass/tinted overlays on imagery; focus styles visible.

### Components Library

* Header/MegaNav, Footer, Breadcrumbs, Button (solid/ghost), Card, Tag/Pill, Badge, Accordion/Tabs, Drawer, Modal/Lightbox, Gallery/Grid, ProductCard, SpecTable, FilterBar, Pagination, TestimonialCard, Form (Field, Validation), Toast, Skeletons, EmptyState.

---

## 6) Tech Stack & Architecture

* **Runtime:** Next.js 14+ (App Router) + TypeScript.
* **Styling:** Tailwind CSS + shadcn/ui (Buttons, Cards, Tabs, Accordion, Dialog, Toast).
* **Data:**

  * **Option A (Headless Storefront):** Shopify Storefront API (mimics thumpstar’s structure).
  * **Option B (Local CMS):** Sanity/Strapi (for demo use Sanity free plan) or **Option C:** Static JSON files in `/data` for quick demo.
* **Images:** `next/image` with remote patterns.
* **Search:** Client-side fuse.js (MVP) → Algolia/Meilisearch (future).
* **State:** Minimal (Zustand/Context) for cart, filters.
* **Forms:** React Hook Form + Zod.
* **Analytics:** GA4 + Meta Pixel (optional).
* **Deployment:** Vercel; Preview branches via Git.

**App Structure (excerpt)**

```
app/
  layout.tsx
  page.tsx                      # Home
  collections/page.tsx
  dirt-bike/page.tsx
  pit-bike/page.tsx
  atv/page.tsx
  products/[handle]/page.tsx    # PDP
  parts/page.tsx                # VIN lookup demo
  database/page.tsx
  gallery/page.tsx
  faq/page.tsx
  testimonials/page.tsx
  workshop/assembly-servicing/page.tsx
  graphics/page.tsx
  about/page.tsx
  contact/page.tsx
  search/page.tsx
components/
  header/*, footer/*, product/*, forms/*, ui/*
lib/
  shopify.ts, cms.ts, vin.ts (mock), search.ts
public/
  placeholders/* (images)
```

---

## 7) Data Model (TypeScript)

```ts
export type Media = { url: string; alt: string; width?: number; height?: number; type?: 'image'|'video' };
export type Spec = { key: string; value: string };
export type Product = {
  id: string; handle: string; title: string; subtitle?: string;
  family: 'dirt-bike'|'pit-bike'|'atv'|'part';
  price?: number; msrp?: number; status?: 'in_stock'|'dealer_only'|'sold_out';
  hero: Media; gallery: Media[]; highlights?: string[]; specs?: Spec[];
  engine_cc?: number; seat_height_mm?: number; weight_kg?: number;
};
export type Collection = { handle: string; title: string; description?: string; image?: Media; productHandles: string[] };
export type VinRecord = { vinPrefix: string; modelCode: string; modelName: string; year?: number };
```

**Mock Data**

* Provide 10–12 products across dirt/pit/ATV with gallery of 6–9 images each, plus 20–30 specs per model.
* VIN mock list: 10 records with prefix-to-model mapping.

---

## 8) Feature Requirements & Acceptance Criteria

### Global

* **Header/MegaNav**: Desktop mega with columns; mobile drawer. **AC:** Keyboard navigable; sticky; search opens within 150ms.
* **Search**: Typeahead across titles & specs. **AC:** First result <200ms on 100 items (local).
* **SEO**: Unique meta; canonical; OG/Twitter cards; JSON-LD: `Organization`, `Product`, `BreadcrumbList`.
* **A11y**: All interactive components tabbable; focus ring visible; color contrast AA; images have alt.
* **Perf budgets**: LCP ≤ 2.5s on 4G; CLS < 0.1; TTI < 3.5s; PSI Mobile ≥ 90.

### PLP

* Filters (cc, price, availability) persist in URL; sort by price/date/name. **AC:** Filter + sort reflect in query params; empty state shown.

### PDP

* Gallery with lightbox, keyboard nav; spec tabs; sticky CTAs. **AC:** Zoom on desktop; swipe on mobile; specs copyable.

### Parts & Database

* VIN search with debounce; mock results with download buttons (disabled/demo). **AC:** Invalid VIN shows helper; example VIN chips.

### Forms

* Validations; spam honeypot; success toasts. **AC:** Network failure shows retry.

---

## 9) Content & Assets Plan

* **Copy:** Neutral, non-branded demo copy. Technical specs templated per model.
* **Images:** Use placeholders (Unsplash/Pexels) or licensed. For demo: store under `/public/placeholders`.
* **Video:** Optional YouTube embeds on PDP, Workshop.

**Sample Alt Text**

* "140cc pit bike side profile in gray/fluoro accents"
* "Close-up of linkage suspension"

---

## 10) Similar-Site Takeaways (What to Emulate)

* **SSR Motorsports:** Strong spec tables per cc class, MSRP callouts, dealer focus. Emulate clean spec layout, class-based navigation.
* **Tao Motor:** Clear dealer CTAs, family focus, product categories, prominent compliance/safety pages. Emulate dealer-oriented messaging & find-a-dealer or contact-first flow.

---

## 11) Implementation Plan

1. **Scaffold** Next.js app, Tailwind, shadcn/ui, eslint/prettier.
2. **Design system** tokens → global CSS & Tailwind config.
3. **Components:** Header/Footer, ProductCard, Gallery, SpecTabs, FilterBar, Forms.
4. **Data layer:** Mock JSON; wire PLP/PDP.
5. **VIN/Parts demo:** VIN mock + results view.
6. **Pages:** Build out sitemap (above).
7. **SEO & Analytics:** next-seo, JSON-LD, GA4.
8. **Perf tuning:** images, route-level caching, code-splitting.
9. **Deploy** to Vercel; share preview URL.

---

## 12) Risks & Mitigations

* **IP/Brand risk:** Use placeholders and neutral copy. Offer retailer’s own photos/specs.
* **Data accuracy:** Specs sourced from manufacturer—mark demo content.
* **Perf regressions:** PR checks with Lighthouse CI.

---

## 13) Deliverables Checklist

* [ ] Next.js app repo (App Router, TS)
* [ ] Tailwind + shadcn theme with accent color
* [ ] Components library (cards, gallery, spec table, forms)
* [ ] Mock data (10–12 products, VIN dataset)
* [ ] All pages in sitemap wired
* [ ] SEO (sitemap.xml, robots.txt, JSON-LD)
* [ ] Deployed preview

---

## 14) Example: ProductCard.tsx (sketch)

```tsx
export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group rounded-2xl bg-white shadow-card overflow-hidden">
      <a href={`/products/${p.handle}`} className="block">
        <div className="aspect-[4/3] bg-bg-dark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.hero.url} alt={p.hero.alt} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-neutral-900">{p.title}</h3>
          {p.engine_cc && <p className="text-sm text-neutral-600">{p.engine_cc}cc</p>}
          <div className="mt-3 flex items-center justify-between">
            {p.msrp && <span className="text-base font-medium">${p.msrp.toLocaleString()}</span>}
            <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-medium">View</span>
          </div>
        </div>
      </a>
    </article>
  );
}
```

---

## 15) Example: Mock Product JSON (excerpt)

```json
{
  "id": "tsx140-gr",
  "handle": "tsx-140-gr",
  "title": "TSX 140 GR",
  "family": "pit-bike",
  "msrp": 1999,
  "status": "sold_out",
  "engine_cc": 140,
  "hero": { "url": "/placeholders/tsx140-1.webp", "alt": "TSX 140 side profile gray/fluoro" },
  "gallery": [
    { "url": "/placeholders/tsx140-2.webp", "alt": "rear three-quarter" },
    { "url": "/placeholders/tsx140-3.webp", "alt": "front three-quarter" }
  ],
  "highlights": ["Tri-Bar chassis", "Linkage suspension", "VS1 forks"],
  "specs": [
    { "key": "Engine", "value": "140cc 4-stroke" },
    { "key": "Transmission", "value": "Manual 4-speed" },
    { "key": "Front Suspension", "value": "VS1 forks" }
  ]
}
```

---

## 16) Image URL Examples (for reference; use placeholders for demo)

* thumpstar.com CDN product images:

  * [https://thumpstar.com/cdn/shop/files/TSX140-1.jpg](https://thumpstar.com/cdn/shop/files/TSX140-1.jpg)
  * [https://thumpstar.com/cdn/shop/files/TSX140-2.jpg](https://thumpstar.com/cdn/shop/files/TSX140-2.jpg)
  * [https://thumpstar.com/cdn/shop/files/TSX140-3.jpg](https://thumpstar.com/cdn/shop/files/TSX140-3.jpg)
  * [https://thumpstar.com/cdn/shop/files/TSX140-4.jpg](https://thumpstar.com/cdn/shop/files/TSX140-4.jpg)
  * [https://thumpstar.com/cdn/shop/files/TSX140-5.jpg](https://thumpstar.com/cdn/shop/files/TSX140-5.jpg)
  * [https://thumpstar.com/cdn/shop/files/TSX140-6.jpg](https://thumpstar.com/cdn/shop/files/TSX140-6.jpg)
  * [https://thumpstar.com/cdn/shop/files/TSX140-7.jpg](https://thumpstar.com/cdn/shop/files/TSX140-7.jpg)
  * [https://thumpstar.com/cdn/shop/files/TSX140-8.jpg](https://thumpstar.com/cdn/shop/files/TSX140-8.jpg)
  * [https://thumpstar.com/cdn/shop/files/TSX140-9.jpg](https://thumpstar.com/cdn/shop/files/TSX140-9.jpg)
* thumpstarusa.com model highlights (sample pattern):

  * [https://www.thumpstarusa.com/files/images/model-highlights/tsx140/frame.jpg](https://www.thumpstarusa.com/files/images/model-highlights/tsx140/frame.jpg)
  * [https://www.thumpstarusa.com/files/images/model-highlights/v5/gopro-mount.jpg](https://www.thumpstarusa.com/files/images/model-highlights/v5/gopro-mount.jpg)
  * [https://www.thumpstarusa.com/files/images/model-highlights/tsx140/wheel.jpg](https://www.thumpstarusa.com/files/images/model-highlights/tsx140/wheel.jpg)
  * [https://www.thumpstarusa.com/files/images/model-highlights/v5/suspension.jpg](https://www.thumpstarusa.com/files/images/model-highlights/v5/suspension.jpg)
  * [https://www.thumpstarusa.com/files/images/model-highlights/v5/exhaust-system.jpg](https://www.thumpstarusa.com/files/images/model-highlights/v5/exhaust-system.jpg)
  * [https://www.thumpstarusa.com/files/images/model-highlights/v5/linkage.jpg](https://www.thumpstarusa.com/files/images/model-highlights/v5/linkage.jpg)

> **Licensing:** Use links only for research; do not embed these without permission. For demo, replace with your own or stock images.

---

## 17) Similar-Site Audit (Quick)

**SSR Motorsports**

* Clear navigation by engine class; detailed spec tables; MSRP lines; news/press. Emulate spec density and cc-class filters.

**Tao Motor**

* Strong dealer-first messaging, product categories, and contact/dealer CTAs. Emulate dealer-oriented flows and family-of-products layout.

---

## 18) SEO, Analytics, Compliance

* **SEO:** Titles ≤ 60 chars, meta descriptions ≤ 155 chars, structured data for Products/Breadcrumbs/Organization, clean URLs, sitemap.xml, robots.txt.
* **Analytics:** GA4 (events: view_search_results, select_item, view_item, generate_lead), Meta Pixel optional.
* **Compliance:** Cookie banner (if analytics), privacy policy; accessibility WCAG 2.2 AA.

---

## 19) QA Checklist (selected)

* [ ] Header/nav keyboard nav & focus states
* [ ] Gallery: zoom, swipe, modal close via ESC
* [ ] Spec tables responsive (2-col → stacked)
* [ ] Filters persist via query params
* [ ] Forms validate + success/failure states
* [ ] 404/500 pages styled
* [ ] Lighthouse mobile ≥ 90

---

## 20) Future Enhancements

* Product compare, financing widget, dealer locator map, store pickup, inventory sync, PWA offline, 360 image viewer, size fit guides (seat height calculator).