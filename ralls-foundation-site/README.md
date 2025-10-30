Ralls Family Foundation website

Tech stack
- Next.js App Router, Tailwind v4, Framer Motion
- React Hook Form + Zod validation

Getting started
1. Install dependencies
```bash
npm install
```
2. Run the dev server
```bash
npm run dev
```
3. Open http://localhost:3000

Key pages
- / – Home with mission and CTA
- /about – Mission, vision, values, founders
- /stories – Stories & impact
- /press – Press releases
- /contact – Contact form
- /apply – Grant application form

Grant submissions
- API: POST /api/applications
- Local storage: submissions.json at project root (for preview). In production, connect to your database or form service.
