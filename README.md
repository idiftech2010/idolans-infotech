# Idolans Info-Tech — Landing Page

A cinematic, multi-product enterprise landing page for **Idolans Info-Tech**, showcasing 5 flagship SaaS products: SCHOLARLY, ApexCare HMS, EduAI, Integritest, and One-Page App Engine.

---

## Running Locally

### Prerequisites

- [Node.js 20+](https://nodejs.org/)
- [pnpm 9+](https://pnpm.io/installation) (`npm install -g pnpm`)
- A PostgreSQL database (local or cloud)

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd <project-folder>
pnpm install
```

### 2. Environment Variables

Create a `.env` file in the root (or export these in your shell):

```env
DATABASE_URL=postgres://user:password@localhost:5432/idolans
SESSION_SECRET=your-secret-here
```

### 3. Push Database Schema

```bash
pnpm --filter @workspace/db run push
```

### 4. Run the API Server (port 5000)

```bash
pnpm --filter @workspace/api-server run dev
```

### 5. Run the Frontend (auto-assigns port)

```bash
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/idolans run dev
```

Open `http://localhost:3000` in your browser.

---

## Project Structure

```text
.
├── artifacts/
│   ├── api-server/
│   │   ├── build.mjs
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── app.ts
│   │       ├── index.ts
│   │       ├── lib/
│   │       │   └── logger.ts
│   │       ├── middlewares/
│   │       └── routes/
│   │           ├── health.ts
│   │           ├── index.ts
│   │           └── leads.ts
│   ├── idolans/
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── vite.config.ts
│   │   ├── public/
│   │   │   ├── favicon.svg
│   │   │   ├── logo.png
│   │   │   ├── opengraph.jpg
│   │   │   └── robots.txt
│   │   └── src/
│   │       ├── App.tsx
│   │       ├── index.css
│   │       ├── main.tsx
│   │       ├── assets/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── lib/
│   │       ├── pages/
│   │       └── data/
│   └── mockup-sandbox/
│       ├── index.html
│       ├── mockupPreviewPlugin.ts
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.ts
│       └── src/
├── attached_assets/
├── lib/
│   ├── api-client-react/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── custom-fetch.ts
│   │       ├── index.ts
│   │       └── generated/
│   ├── api-spec/
│   │   ├── openapi.yaml
│   │   ├── orval.config.ts
│   │   └── package.json
│   ├── api-zod/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       └── generated/
│   └── db/
│       ├── drizzle.config.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           ├── index.ts
│           └── schema/
├── scripts/
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       └── hello.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
├── vercel.json
├── render.yaml
├── DEPLOYMENT_VERCEL_RENDER.md
├── README.md
├── replit.md
├── ONE_PAGE_MARKETING_Scholarly.md
├── ONE_PAGE_MARKETING_DOC_integritest.md
├── ONE-PAGE-MARKETING-BRIEF_EduAI.md
├── ONE-PAGE-APP_Idolans Services.md
└── BRAND_MARKETING_ONE_PAGE_apexcarehms.md
```

---

## Key Commands

| Command | Description |
|---------|-------------|
| `pnpm --filter @workspace/api-server run dev` | Start API server |
| `pnpm --filter @workspace/idolans run dev` | Start frontend |
| `pnpm run typecheck` | Full TypeScript check |
| `pnpm run build` | Build all packages |
| `pnpm --filter @workspace/api-spec run codegen` | Regenerate API hooks from OpenAPI spec |
| `pnpm --filter @workspace/db run push` | Push DB schema changes |

---

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/healthz` | Health check |
| `POST` | `/api/leads` | Submit a lead/demo request |
| `GET` | `/api/leads` | List all leads (admin) |

### Lead capture payload

```json
{
  "name": "Jane Doe",
  "email": "jane@school.edu",
  "schoolName": "Greenfield Academy",
  "facilitySize": "500-1000 students",
  "appCategory": "SCHOLARLY",
  "message": "We'd like a demo of the attendance module."
}
```

---

## Hosting / Deployment

### Option 1: Replit (recommended — already configured)

Click **Publish** in the Replit toolbar. Replit handles build, TLS, and hosting automatically at your `.replit.app` domain.

### Option 2: Railway / Render / Fly.io

1. Set environment variables (`DATABASE_URL`, `SESSION_SECRET`, `PORT`, `BASE_PATH=/ `)
2. Build command: `pnpm run build`
3. Start command: `node artifacts/api-server/dist/index.mjs`
4. Serve the `artifacts/idolans/dist/public` folder as static files at `/`

### Option 3: Vercel (frontend only)

1. Set root to `artifacts/idolans/`
2. Build command: `pnpm run build`
3. Output directory: `dist/public`
4. Deploy the API server separately (Railway/Render) and set `VITE_API_URL`

---

## Tech Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
- **Backend**: Node.js 24, Express 5, TypeScript
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (server) + React Hook Form (client)
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (server CJS), Vite (frontend)

-- $env:PORT="3000"; $env:BASE_PATH="/"; pnpm --filter @workspace/idolans run dev