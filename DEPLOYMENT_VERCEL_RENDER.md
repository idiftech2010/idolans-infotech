# Complete migration plan: localhost to Vercel + Render

This document explains how to move the Idolans Info-Tech app from local development to a production setup with:

- Vercel for the React/Vite frontend
- Render for the Express API + database-backed services
- PostgreSQL for the database layer

The target architecture is:

- Frontend: https://your-app.vercel.app
- API: https://your-api.onrender.com
- Database: managed PostgreSQL (for example Neon, Supabase Postgres, or Render Postgres)

---

## 1. Prepare the repository for deployment

### 1.1 Push the project to GitHub

Make sure the repo is committed and pushed to GitHub.

```bash
git add .
git commit -m "Prepare app for production deployment"
git push origin main
```

### 1.2 Confirm the app still builds locally

Run the full build once more before deployment:

```bash
pnpm install
PORT=3000 BASE_PATH=/ pnpm --dir artifacts/idolans build
pnpm --filter @workspace/api-server run build
```

If the frontend build fails, fix those issues before deploying.

---

## 2. Move the database to a managed PostgreSQL service

Your app currently expects a PostgreSQL connection string via `DATABASE_URL`.

### Recommended options

- Neon
- Supabase Postgres
- Render Postgres
- Railway Postgres

### What to do

1. Create a new PostgreSQL database.
2. Copy the production connection string.
3. Keep it safe in your deployment environment variables.

Example format:

```env
DATABASE_URL=postgres://user:password@host:5432/dbname
```

### Important

Run your schema migration in production once the database is ready.

```bash
pnpm --filter @workspace/db run push
```

If your database provider requires SSL, update your connection string accordingly.

---

## 3. Deploy the backend to Render

Render is a good fit for the Express API.

### 3.1 Create a new Web Service on Render

1. Sign in to Render.
2. Click New + > Web Service.
3. Connect your GitHub repository.
4. Select the repo.

### 3.2 Configure the service

Use these settings:

- Root Directory: leave blank or set to repo root
- Environment: Node
- Build Command:

```bash
pnpm install --frozen-lockfile && pnpm --filter @workspace/api-server run build
```

- Start Command:

```bash
node artifacts/api-server/dist/index.mjs
```

### 3.3 Add environment variables in Render

Add the following values in the Render dashboard:

```env
NODE_ENV=production
PORT=10000
DATABASE_URL=postgres://user:password@host:5432/dbname
SESSION_SECRET=replace-with-a-long-random-secret
```

Render will assign a port dynamically, but your app should read from `process.env.PORT`. The start command above is compatible with Render’s runtime.

### 3.4 Deploy

Click Create Web Service.

Render will build and deploy the backend. Once it finishes, copy your API URL.

Example:

```text
https://idolans-api.onrender.com
```

---

## 4. Deploy the frontend to Vercel

Vercel is ideal for the Vite/React landing page and product routes.

### 4.1 Create a new Vercel project

1. Sign in to Vercel.
2. Click New Project.
3. Import your GitHub repository.

### 4.2 Configure the project

Use the repository root as the project root if possible.

Set these build settings:

- Framework Preset: Vite
- Build Command:

```bash
pnpm install --frozen-lockfile && PORT=3000 BASE_PATH=/ pnpm --dir artifacts/idolans build
```

- Output Directory:

```text
artifacts/idolans/dist/public
```

### 4.3 Add environment variables in Vercel

In the Vercel dashboard, add these environment variables:

```env
PORT=3000
BASE_PATH=/
VITE_API_URL=https://your-api.onrender.com
```

If your frontend uses a production API base URL, make sure that value is injected into the client app.

### 4.4 Deploy

Click Deploy.

Once the build finishes, Vercel will give you a URL such as:

```text
https://idolans-info-tech.vercel.app
```

---

## 5. Connect frontend and backend

The frontend and API should talk over the deployed backend URL.

### 5.1 Use a production API base URL

If the frontend uses direct API calls, update them to use:

```ts
const apiBaseUrl = import.meta.env.VITE_API_URL ?? "/api";
```

Then use that base URL when making requests.

### 5.2 Configure CORS

Since the frontend will call the Render API from a different domain, the Express server must allow that origin.

If needed, update the API server to allow your Vercel domain explicitly.

Example:

```ts
app.use(cors({
  origin: ["https://your-app.vercel.app", "http://localhost:3000"],
  credentials: true,
}));
```

### 5.3 Add a rewrite or proxy if needed

If you want requests from the frontend to stay under the same domain, use a Vercel rewrite rule.

Example file: `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "https://your-api.onrender.com/api/$1"
    }
  ]
}
```

This keeps calls like `/api/leads` working from the same frontend origin.

---

## 6. Update the app for production-friendly routing

The Vite app already uses `BASE_PATH` and route-based navigation. For deployment, make sure the frontend is configured to work correctly on Vercel with base routing.

### Recommended Vercel environment values

```env
PORT=3000
BASE_PATH=/
```

### Why this matters

Your Vite config currently expects these values to be present. Without them, the app may fail during build or preview.

---

## 7. Verify the deployment

### Backend checks

Open the Render URL in the browser and verify:

- health endpoint works
- API routes return expected responses
- database connections are live

Example:

```text
https://your-api.onrender.com/api/healthz
```

### Frontend checks

Open the Vercel URL and verify:

- the landing page loads
- product pages load
- the navbar and footer render correctly
- lead capture or form submission works if wired to the API

---

## 8. Recommended production environment variables

### Vercel frontend

```env
PORT=3000
BASE_PATH=/
VITE_API_URL=https://your-api.onrender.com
```

### Render backend

```env
NODE_ENV=production
PORT=10000
DATABASE_URL=postgres://user:password@host:5432/dbname
SESSION_SECRET=replace-with-a-long-random-secret
```

---

## 9. Optional production hardening

After the first deployment, consider these improvements:

- add a custom domain to Vercel
- add a custom domain to Render
- enable automatic HTTPS
- add Sentry or similar monitoring
- add rate limiting and request logging
- create a production-only admin secret for protected routes
- add health checks and alerts for the API service

---

## 10. Recommended deployment checklist

- [ ] GitHub repo connected
- [ ] PostgreSQL database provisioned
- [ ] `DATABASE_URL` set in Render
- [ ] `SESSION_SECRET` set in Render
- [ ] frontend build command configured in Vercel
- [ ] `VITE_API_URL` set in Vercel
- [ ] Render API URL tested
- [ ] Vercel frontend URL tested
- [ ] CORS configured for the Vercel domain
- [ ] database migrations run successfully

---

## 11. Suggested next step

If you want, the next step can be to add deployment configuration files directly to the repo so this becomes one-click deployable:

- a Vercel config file for rewrites
- a Render config file for API deployment
- production-friendly environment handling for Vite
