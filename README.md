# Dr. Büşra Yusufoğlu — Academic Personal Website

A modern, typography-forward academic portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** primitives. Designed to deploy for free on Vercel with no backend, no CMS, and no paid services.

## Stack

- **Next.js 14** App Router (statically rendered, with `generateStaticParams` for dynamic routes)
- **TypeScript** end-to-end
- **Tailwind CSS** with a custom brand palette (`ink` `#0f172a`, `paper` `#fafaf9`, `teal` `#0d9488`)
- **shadcn/ui** primitives (Button, Card, Badge, Tabs, Input, Textarea, Select) — local components, no runtime dependency
- **Inter** + **Playfair Display** via `next/font/google`
- **lucide-react** icons
- All content lives in `/data/*.ts` — typed, easy to edit, no CMS

## File tree

```
.
├── app/
│   ├── layout.tsx              # root layout, fonts, navbar/footer, SEO defaults
│   ├── globals.css             # Tailwind + CSS variables
│   ├── page.tsx                # / — hero, stats, featured research, news strip
│   ├── not-found.tsx
│   ├── about/page.tsx
│   ├── research/
│   │   ├── page.tsx            # filterable project list
│   │   └── [slug]/page.tsx     # individual project (generateStaticParams)
│   ├── publications/page.tsx   # filter by year/type/topic, grouped by year
│   ├── team/page.tsx
│   ├── teaching/page.tsx
│   ├── news/
│   │   ├── page.tsx            # category-filtered list
│   │   └── [slug]/page.tsx
│   ├── cv/page.tsx             # inline web CV + PDF download placeholder
│   └── contact/
│       ├── page.tsx            # office, socials, Maps iframe
│       └── contact-form.tsx    # mailto-powered form (no backend)
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── section-header.tsx
│   ├── stat-card.tsx           # animated count-up via IntersectionObserver
│   ├── tag-pill.tsx
│   ├── fade-in.tsx             # IntersectionObserver-based reveal
│   ├── publication-card.tsx
│   ├── project-card.tsx
│   ├── team-member-card.tsx
│   ├── news-card.tsx
│   └── ui/                     # shadcn primitives (button, card, badge, tabs, input, textarea, select)
├── data/
│   ├── profile.ts              # name, title, bio, social links, stats, research areas
│   ├── research.ts             # 4 research projects
│   ├── publications.ts         # 12 publications (mix of journal/conference/book chapter)
│   ├── team.ts                 # PI + 8 current + 3 alumni
│   ├── news.ts                 # 6 news items
│   ├── teaching.ts             # 3 current + 3 past courses + philosophy
│   └── cv.ts                   # education, positions, awards, grants, service
├── lib/utils.ts                # cn(), formatDate()
├── public/                     # add /images/profile.jpg and /files/cv.pdf here
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── components.json             # shadcn config
└── package.json
```

## Local setup

This repository **already contains all generated files**. You do not need to run `create-next-app` again — just install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

> If you prefer to start from a clean scaffold and copy the generated files in manually, follow the canonical setup instructions instead:
>
> 1. `npx create-next-app@latest busra-yusufoglu-site --typescript --tailwind --app --eslint --no-src-dir --import-alias "@/*"`
> 2. `cd busra-yusufoglu-site`
> 3. `npx shadcn@latest init` (accept defaults: New York / Slate / CSS variables yes)
> 4. `npm install lucide-react @radix-ui/react-slot @radix-ui/react-tabs class-variance-authority clsx tailwind-merge tailwindcss-animate`
> 5. Copy the contents of `app/`, `components/`, `data/`, `lib/`, plus the root config files (`tailwind.config.ts`, `next.config.mjs`, `components.json`) into the new project.
> 6. `npm run dev`

## Adding real content

All copy lives in `/data/*.ts`. Each file is fully typed, so your editor will autocomplete fields as you go.

- **Profile + bio + stats**: `data/profile.ts`
- **Research projects** (slugs, descriptions, questions, methods): `data/research.ts`
- **Publications** (with DOI/PDF links, topics, types): `data/publications.ts`
- **Team** (current + alumni): `data/team.ts`
- **News & updates** (with slugs for individual pages): `data/news.ts`
- **Teaching** (courses + philosophy): `data/teaching.ts`
- **CV** (education, positions, awards, grants, service): `data/cv.ts`

### Images

Place photos in the repo as follows (JPG recommended; a `scripts/prepare-images.mjs` helper converts WebP/PNG to JPG):

| File | Person |
|------|--------|
| `public/images/busra-yusufoglu.jpg` | Dr. Büşra Yusufoğlu (also used on home & team PI) |
| `public/images/team/yanki-basaran.jpg` | Yankı Başaran |
| `public/images/team/yigit-toraman.jpg` | Yiğit Toraman |
| `public/images/team/sukran-kaya.jpg` | Şükran Kaya |
| `public/images/team/gulbahar-karakas.jpg` | Gülbahar Karakaş |
| `public/images/team/batuhan-karakus.jpg` | Batuhan Karakuş |
| `public/images/team/emir-sirmaoglu.jpg` | Emir Sırmaoğlu |
| `public/images/team/semih-eroglu.jpg` | Semih Eroğlu |
| `public/images/team/muhammet-enes-pamukcu.jpg` | Muhammet Enes Pamukçu |

Recommended size: **400×400 px** square. Missing photos show initials automatically (no broken images).

```bash
node scripts/prepare-images.mjs
```

### Languages

The site supports **Turkish (default)**, **English**, and **German** via [next-intl](https://next-intl.dev):

- URLs: `/` or `/tr/...`, `/en/...`, `/de/...`
- Language switcher in the navbar (TR / EN / DE)
- Preference saved in `localStorage` and `NEXT_LOCALE` cookie
- UI strings: `messages/tr.json`, `messages/en.json`, `messages/de.json`

### PDF CV

Place the official CV at `public/files/cv.pdf` and the **Download full CV** button on `/cv` will start working immediately.

## Deploying to Vercel (free)

1. Push the repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Accept the auto-detected Next.js settings (no env vars required).
4. Click **Deploy**.

That's it — every push to `main` will redeploy automatically.

## Accessibility & SEO

- Semantic HTML (`<main>`, `<nav>`, `<article>`, `<time datetime>`, etc.)
- Visible skip-to-content link on focus
- All interactive icons have `aria-label`s
- `aria-current="page"` on the active nav link
- `generateMetadata` on every page (titles, descriptions, OpenGraph, Twitter cards)
- Static routes pre-rendered at build time (great Core Web Vitals on the Vercel free tier)

## License

Content is © Dr. Büşra Yusufoğlu. The site scaffolding is free to reuse for other academic portfolios.
