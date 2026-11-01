# Code with Moiz: Portfolio

Next.js 14 (App Router), TypeScript, Tailwind, Framer Motion, GSAP ScrollTrigger, React Hook Form + Zod, Resend.

## Run

```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY
npm run dev
```

## Things to fill in

| What | Where |
| --- | --- |
| LinkedIn URL, confirm GitHub URL | `src/data/site.ts` (`social`) |
| Portrait photo | put in `public/images/`, set `portrait` in `src/data/site.ts` |
| Project screenshots | put in `public/images/projects/`, set `image` in `src/data/projects.ts` |
| Project GitHub repos | set `repo` in `src/data/projects.ts` |
| Real CV | replace `public/cv/Moiz-Ur-Rehman-CV.pdf` |
| Confirm internship dates | `src/data/experience.ts` |

## Contact form

`POST /api/contact` validates with Zod and sends through the Resend REST API.
Credentials are read server-side from `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
On Vercel, add these under Project Settings, then Environment Variables.
