<!--- Modern, sleek README tailored to the app's theme -->
# Vault — Users

![Vault Banner](public/icon.png)

A modern, minimal Next.js app that lists users with images, names and emails. This repository follows a clean, sleek design language — light and dark modes, crisp typography, and a calm emerald accent color to match the site's UI.

---

**Quick Links**
- **Code:** This repo contains the app source under the `app/` folder.
- **API:** The server route for sending emails is at [app/api/send-email/route.js](app/api/send-email/route.js#L1).
- **DB connection:** See [lib/connectDB.js](lib/connectDB.js#L1).
- **User model:** See [models/user.js](models/user.js#L1).

---

**Brand & Theme**
- Primary accent: Tailwind `emerald-800` (matching site headings and accents).
- Light background with dark-mode support (see `app/globals.css`).
- Fonts: Geist sans + Geist mono (configured in `app/layout.js`).

---

## Demo

Open the app locally and view the Users page to see the Vault UI (icon, header, and the compact user grid).

---

## Features

- Minimal, responsive user grid component (`app/components/UserGrid.jsx`).
- Next.js App Router pages in `app/` (server components where appropriate).
- Mongoose-based `User` model and a small DB connection helper in `lib/connectDB.js`.
- Simple email route at `app/api/send-email/route.js` for transactional emails.

---

## Tech Stack

- Next.js (App Router)
- React (Server + Client components)
- Node.js
- MongoDB via Mongoose
- Tailwind CSS utility classes (used in the UI)

---

## Local Setup

1. Install dependencies

```bash
npm install
```

2. Environment variables

Create a `.env.local` in the project root with at least:

```
MONGODB_URI=your-mongodb-connection-string
EMAIL_API_KEY=your-email-provider-key
```

3. Run the dev server

```bash
npm run dev
# Visit http://localhost:3000
```

4. Seed / demo data

Use your MongoDB GUI or scripts to create a few `User` documents with `{ name, email, image }` so the grid renders sample cards.

---

## API Notes

- `POST` to the email endpoint at `/api/send-email` to trigger the app's email handler (see [app/api/send-email/route.js](app/api/send-email/route.js#L1)).
- The endpoint expects a JSON body aligned with the email helper used by the app.

---

## Folder Overview

- `app/` — Next.js app routes, components, and pages.
- `emails/` — JSX templates for in-app transactional emails (e.g. `AppUpdate.jsx`).
- `lib/` — Database connection and helpers.
- `models/` — Mongoose models (`user.js`).
- `public/` — Static assets (icons, images).

---

## Styling & Visual Guidance

To keep the README aligned with the live site, prefer:
- Colors: use `emerald-800` for primary accents and `zinc-50` for cards/backgrounds in light mode.
- Dark mode: use black backgrounds and light text as configured in `app/globals.css`.
- Typography: Geist fonts (declared in `app/layout.js`) for headings and monospace for code snippets.

---

## Contributing

Contributions are welcome. Recommended flow:

1. Fork the repo
2. Create a feature branch
3. Open a PR with a clear description and screenshots if UI changes are included

Please run formatting and lint checks before opening a PR.

---

## Next Steps & Suggestions

- Add CI (GitHub Actions) for linting, type checks, and tests.
- Add a demo script to auto-seed example users for reviewers.
- Provide a small storybook or component preview for `UserGrid` to showcase variants.

---

## License

This project is provided under the MIT License — update as needed for your organization.

---

Thanks for building with Vault — Users. If you'd like, I can also:

- add a CI workflow,
- create a seeder script,
- or polish the repository description and badges.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
