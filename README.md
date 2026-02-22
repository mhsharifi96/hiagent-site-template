# HiAgent - Multilingual AI Automation Agency Website

Conversion-focused Next.js App Router website for **HiAgent** with multilingual support (`en`, `fa`, `ar`), RTL handling, structured SEO, case studies, blog, and lead capture.

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- TailwindCSS + custom design system tokens
- next-intl for i18n routing (`/en`, `/fa`, `/ar`)
- Framer Motion (subtle section reveal animations)
- Radix primitives (accordion, modal)
- next-themes (dark/light mode)

## Features

- Multilingual localized pages: Home, Services, Case Studies, Blog, About, Contact, Privacy, Terms
- RTL support for Persian and Arabic
- SEO foundations:
  - Per-page localized metadata
  - OpenGraph + Twitter cards
  - Canonical + hreflang alternates
  - `sitemap.xml` and `robots.txt`
  - JSON-LD for Organization, Website, and Article pages
- Dynamic routes for case studies and blog posts
- Blog content in markdown strings with TOC and reading time
- Lead capture form (`/contact`) with API validation
- Quick contact links (WhatsApp / Telegram / Email)
- Calendly integration placeholder
- Project estimator widget + architecture SVG section

## Project Structure

```txt
src/
  app/
    [locale]/
      page.tsx
      services/page.tsx
      case-studies/page.tsx
      case-studies/[slug]/page.tsx
      blog/page.tsx
      blog/[slug]/page.tsx
      about/page.tsx
      contact/page.tsx
      privacy/page.tsx
      terms/page.tsx
    api/contact/route.ts
    layout.tsx
    sitemap.ts
    robots.ts
  components/
    layout/
    sections/
    ui/
  data/
    services.ts
    case-studies.ts
    blog-posts.ts
    marketing.ts
  lib/
    site.ts
    seo.ts
    markdown.tsx
    utils.ts
messages/
  en.json
  fa.json
  ar.json
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure env vars:

```bash
cp .env.example .env.local
```

3. Run development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
npm run start
```

## Docker Compose

Build and run production server:

```bash
docker compose up --build -d
```

Or use the deployment script:

```bash
./deploy.sh
```

Open:

```txt
http://localhost:3000
```

Stop:

```bash
docker compose down
```

## Adding Blog Posts

Edit `src/data/blog-posts.ts`:

1. Add a new object with a unique `slug`
2. Add localized fields for `title`, `excerpt`, and markdown `content`
3. Add `publishedAt`, `tags`, and `category`
4. The post is automatically included in blog listing and sitemap

## Editing Translations

Translation files:

- `messages/en.json`
- `messages/fa.json`
- `messages/ar.json`

Guidelines:

1. Keep key names identical across locales
2. Localize naturally (avoid literal translation)
3. Keep CTA meaning aligned for conversion
4. Confirm RTL strings for Persian/Arabic readability

## Contact Form Integration

Current API endpoint: `src/app/api/contact/route.ts`

Replace placeholder logic with one provider:

1. Resend (`RESEND_API_KEY`)
2. SMTP (`SMTP_*` vars)
3. Database insert

## Deployment (Vercel)

1. Push project to Git provider
2. Import into Vercel
3. Set environment variables from `.env.example`
4. Deploy
5. Set production domain in `NEXT_PUBLIC_SITE_URL`

## SEO Audit Checklist

- [x] Localized metadata title/description on all pages
- [x] OpenGraph + Twitter card metadata
- [x] Canonical and hreflang alternates
- [x] JSON-LD: Organization + Website + Article
- [x] `sitemap.xml` with localized routes and dynamic content
- [x] `robots.txt` linked to sitemap
- [x] Semantic heading hierarchy (single H1 per page)
- [x] Internal linking: services -> blog, home -> case studies/blog/contact
- [x] Clean URL slugs for dynamic pages
- [x] Accessible forms, labels, focus styles, and contrast

## Design Tokens

See `src/styles/tokens.ts` for spacing, radius, type scale, and brand colors.
