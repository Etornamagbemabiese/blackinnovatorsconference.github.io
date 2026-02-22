# Black Innovators Conference at UNC

A high-end, minimalist website for the Black Innovators Conference at UNC, built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** – smooth scroll animations
- **Lucide React** – icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home – hero, quote, RSVP CTA |
| `/registration` | RSVP form (First Name, Last Name, Email, School/Company) |
| `/about` | About the conference |
| `/team` | Our People – team member cards |
| `/highlights` | Past event gallery (137 images) |
| `/experience` | What to Expect – networking, panels, career growth |
| `/speakers` | 2026 Featured Speakers & Past Guests |
| `/support` | Sponsors & Donate/Support CTA |
| `/faq` | Accordion FAQ |

## Customization

- **Team members:** Edit `src/lib/team-data.ts`
- **Speakers:** Edit `src/lib/speakers-data.ts`
- **Gallery images:** Add/remove files in `public/gallery/` and update `src/lib/gallery-images.ts`
- **Registration:** Connect the form in `src/app/registration/page.tsx` to your backend or email service

## Design

- **Background:** `#F0F4F8` (light blue/grey)
- **Headings:** Cormorant Garamond (serif)
- **Body:** Inter (sans-serif)
- **Style:** Minimalist, high whitespace, professional
