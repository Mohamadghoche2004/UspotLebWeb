# UspotLeb — Premium Agency Website

A production-ready, premium digital agency website built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and React Router.

## Features

- **10+ pages** — Home, Services, 6 service detail pages, Portfolio, About, Contact
- **Premium dark UI** — Glassmorphism, gradients, smooth animations
- **SEO optimized** — React Helmet Async, JSON-LD structured data, sitemap, robots.txt
- **Fully responsive** — Mobile-first design for all screen sizes
- **Performance** — Route-based code splitting, lazy loading images

## Tech Stack

- React 19 + Vite 8
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Router 7
- React Helmet Async
- React Icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

Copy `.env.example` to `.env` and set your production URL:

```
VITE_SITE_URL=https://yourdomain.com
```

Update agency details in `src/data/site.config.ts` (name, contact, social links, address).

Update `public/sitemap.xml` and `public/robots.txt` with your domain before deploying.

## Project Structure

```
src/
├── app/           # Router and App shell
├── components/    # Reusable UI, layout, home sections
├── data/          # Site config, content, SEO metadata
├── hooks/         # Custom React hooks
├── lib/           # Utilities and motion variants
├── pages/         # Route page components
└── styles/        # Global CSS and Tailwind
```

## Deployment

Build the project with `npm run build` and deploy the `dist/` folder to Vercel, Netlify, or any static host.

## License

Private — All rights reserved.
