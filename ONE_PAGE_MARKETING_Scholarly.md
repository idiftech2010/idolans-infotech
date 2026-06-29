# SCHOLARLY — One‑Page Marketing & Brand Brief

This document is a complete, single-source marketing and brand brief you can use to build a one-page website for the SCHOLARLY application. It includes positioning, copy, UX/content structure, technical requirements, asset inventory, sample hero/feature sections, SEO/meta content, analytics/lead capture, legal notes, and implementation instructions. Use this as the canonical brief for designers, frontend engineers, content writers, marketers, and product teams.

---

**Project Summary**

- Product name: SCHOLARLY
- Tagline / short pitch: School management done right
- Product type: SaaS school management platform — web + mobile + backend API
- Target launch: one-page marketing site (landing page) to drive trials, demo requests, and brand awareness
- Goals for the one-page site:
  - Communicate product value clearly within 5–10 seconds
  - Drive demo signups and trial activations (primary CTA)
  - Educate decision makers (school admins, principals, head teachers) about features and benefits
  - Capture leads and qualify prospects
  - Present brand identity, trust signals, screenshots, and pricing summary

---

**Audience / Personas**

1. Head of School / Principal
- Responsibilities: school operations, budgets, compliance
- Needs: centralized admin controls, attendance, communications, billing
- Key message: save time, reduce errors, improve parent engagement

2. Administrator / Office Manager
- Responsibilities: student records, admissions, fees, staff management
- Needs: reliable database, quick reporting, secure access
- Key message: single source of truth for all school operations

3. Teacher
- Responsibilities: class management, assessments, attendance
- Needs: easy timetable, grade entry, parent communication
- Key message: tools that reduce grading/admin time and improve classroom outcomes

4. Bursar / Accountant
- Responsibilities: payments, receipts, finance records
- Needs: payments reconciliation, reports, exportable receipts
- Key message: simplify fee collection and reporting

5. Parent / Student
- Responsibilities: pay fees, view reports
- Needs: clear communication, portal access, receipts
- Key message: transparency and convenience

6. District / Regional Admin (if applicable)
- Responsibilities: oversight across multiple schools
- Needs: aggregated reporting, role-based access
- Key message: scale across schools with role segregation

---

**Value Proposition (What SCHOLARLY Does)**

- Centralized management of students, staff, classes, timetables, fees, transport, hostels, and communications.
- Role-based dashboards (Administrator, Teacher, Student, Parent, Bursar, Hostel Manager).
- Mobile-first parent/student experience and responsive admin web UI.
- Secure user sessions, audit logs, and role-based access control.
- Integrations: payments, email/SMS, Google Drive/Docs (attachments), optional third-party analytics.
- Built-in reporting (attendance, results, finances) and CSV/Excel exports.

Primary benefit: Reduce administrative overhead and error-prone manual work while improving communication and transparency for the whole school community.

---

**Brand Voice & Tone**

- Voice: Professional, helpful, clear, reliable
- Tone: Confident, friendly, concise
- Messaging principles: emphasize trust, time savings, security, and measurable impact (time saved, reduced errors, faster payments)

Brand keywords to reuse: SCHOLARLY, School management, Efficiency, Trust, Secure, Parent engagement, Staff productivity

---

**Brand Assets (paths & usage)**

- Primary logo: `/logo.png` (located in `sms-system/web/public/logo.png`)
  - Use for header, footer, favicon (favicon should be a simplified mark)
- Color palette (recommended):
  - Primary blue: #2563EB (blue-600)
  - Accent light blue: #BFDBFE (blue-200)
  - Neutral dark: #0F172A (slate-900)
  - Neutral muted: #64748B (slate-400)
  - Success green: #16A34A (green-600)
  - Warning yellow: #F59E0B (amber-500)
- Typography:
  - Headings: Inter / Poppins (600–700 weights)
  - Body: Inter (400–500)
- Imagery:
  - Screenshots: `/assets/screenshots/dashboard-1.png`, `/assets/screenshots/mobile-1.png`
  - Mockups: hero phone + laptop composite
- Iconography: lucide-react icons (or Feather) for consistent UI visuals on the landing page

Asset inventory checklist:
- logo.png (full mark)
- favicon.ico / favicon-32.png
- hero screenshot (wide) `assets/hero-screenshot.png`
- feature screenshots (4–6) `assets/screenshots/*.png`
- demo video (optional): `assets/video/demo.mp4`
- press kit: `assets/press/brand-guidelines.pdf`

---

**One‑Page Structure (content order & sections)**

1. Head (meta + hero)
2. Social proof row (logos, counts, trust badges)
3. Key features overview (3–5 items)
4. Full features / details (cards + micro-copy)
5. Screenshots / product tour (carousel or grid)
6. How it works (3-step user flow)
7. Pricing summary (basic table or CTA to request quote)
8. Testimonials / case studies (2–3 short quotes)
9. Security & compliance (brief bullet points)
10. FAQ
11. Demo signup / Lead capture (form with CTAs)
12. Footer (contact, privacy, links)

Each section must have supporting microcopy and at least one CTA in the page (primary CTA: Request demo / Start free trial). Secondary CTA: Contact sales, Watch demo video.

---

**Hero (copy + layout)**

- Headline (H1): "SCHOLARLY — School management done right"
- Subheadline: "Centralized admin, simple teacher tools, and a parent-friendly portal—everything your school needs to run smoothly."
- Primary CTA (button): "Request a Demo" (link to anchor #demo or modal)
- Secondary CTA (link): "See Pricing" (scroll to pricing)
- Supporting bullets (3 small checks):
  - "Automate attendance, billing, and reporting"
  - "Secure, role-based access for staff and parents"
  - "Mobile apps for parents and teachers"
- Visual: hero composite showing admin dashboard and mobile parent app; play demo video overlay optional

Hero HTML/Section notes:
- Full-width hero, left column copy, right column screenshot
- Use large heading, 2-line subhead, CTA row with primary and secondary
- Add trust logos below the CTAs (if available)

---

**Social Proof & Trust**

- Logos row: schools, partners, associations (if none: use metrics)
- Metrics to show (examples):
  - "Trusted by X schools"
  - "% uptime" (e.g., 99.9% uptime)
  - "Y active users" or "Z students managed"
- Security badges: GDPR-ready, secure hosting, encrypted data
- Optional certifications: ISO, local education authority endorsements

---

**Key Features (top row, short bullets)**

1. Student Information System (SIS)
  - Student profiles, enrollment, classes, roll numbers, parent links
2. Attendance & Timetables
  - Class attendance, automated roll calls, timetable management
3. Assessments & Results
  - Exam templates, marks entry, grade calculations, report cards
4. Fees & Payments
  - Invoicing, payment gateways, receipts, outstanding reports
5. Communications
  - Email/SMS notices, push notifications, announcements
6. Staff Management & Roles
  - Role-based dashboards, head-of-school assignment, admin controls
7. Hostels & Transport (optional)
  - Room assignments, transport routes, assignments
8. Integrations & Exports
  - CSV/Excel exports, webhooks, third-party payments

Each feature tile should have a 1–2 sentence benefit line and an icon.

---

**Feature Detail Blocks**

For the one-page site, expand 4–6 features with 60–120 words each. Include short subheaders: Problem, How SCHOLARLY solves it, Benefit (quantified if possible).

Example block: Fees & Payments
- Problem: Manual fee tracking causes frequent errors and late receipts.
- Solution: Centralized invoicing, online payment links, auto-reminders.
- Benefit: Reduce outstanding balances and admin time; faster reconciliation.

---

**Screenshots / Product Tour**

- Provide 4–6 contextual screenshots with captions: Dashboard overview, Student profile, Attendance sheet, Grade entry, Parent mobile view.
- Optional carousel with lightbox to view each image large.
- Each screenshot caption should explain the action and the value.

---

**How it Works (3-step flow)**

1. Create your school workspace — import or add students, staff, classes.
2. Configure roles and portals — assign admins, teachers, bursar, hostel manager.
3. Run operations — take attendance, publish results, send invoices, and communicate with parents.

Include a CTA after this section: "Request a live walkthrough".

---

**Pricing (summary)**

- Pricing models to present on the one-page site:
  - Starter: small schools (up to 200 students) — monthly subscription
  - Standard: medium schools — monthly subscription
  - Enterprise: large/school networks — custom pricing + onboarding

- Pricing page should emphasize: 14-day free trial or demo, transparent add-ons (SMS, payment gateway fees), and implementation/support packages.
- Provide clear CTA: Request quote / Start free trial.

Note: For regulatory/market reasons, use local currency and optional per-student pricing if needed.

---

**Testimonials / Case Studies**

- Include 2–3 short testimonials (quote, name, role, school). If actual testimonials are unavailable, provide placeholder quotes and plan to replace them.

Testimonial structure:
- Quote (1–2 sentences)
- Name — Role — School
- Optional: short metric ("Reduced admin time by 40%")

---

**FAQ (top questions to include)**

- Is my data secure? (Yes — encrypted in transit & at rest; describe backup cadence)
- Can we integrate with our payment gateway? (List supported gateways or state webhooks)
- How long to implement? (Typical onboarding timeline: 1–4 weeks depending on size)
- Do you provide training and support? (Onboarding, documentation, paid training)
- What happens to data when we cancel? (Export tools, data retention policy)

---

**Lead Capture & CTAs**

Primary CTA: Request Demo / Start Free Trial (prominent in hero and repeated after features)

Lead capture form fields (minimal + optional):
- School name (required)
- Contact name (required)
- Role (Admin, Principal, Bursar, Teacher)
- Email (required)
- Phone (optional)
- Number of students (optional)
- Message (optional)
- Hidden UTMs: utm_source, utm_medium, utm_campaign

Form behavior:
- Validate required fields client-side
- After submit: show success message + schedule demo link + email confirmation
- Send lead to CRM or backend events endpoint: `POST /api/leads` with above payload and source metadata

---

**Analytics & Tracking**

- Required tracking:
  - Google Analytics / GA4 (pageviews, events)
  - Facebook pixel / Meta conversion (if doing paid ads)
  - Optional: Hotjar/Fullstory for session recordings
  - Track CTA click events: `demo_request_click`, `trial_start_click`, `pricing_click`, `video_play`

Event ideas to implement:
- `lead_submitted` with lead metadata
- `user_clicked_view_demo` with referrer
- `pricing_button_clicked`
- `screenshots_opened`

Add server-side webhooks to push leads to CRM (HubSpot / Pipedrive) or email integration.

---

**SEO & Metadata**

- Page title (example): "SCHOLARLY — School Management Software | Demo & Pricing"
- Meta description: "SCHOLARLY is a secure school management platform for administrators, teachers, and parents. Manage attendance, fees, results, and communications in one place. Request a demo today."
- Open Graph (OG) tags:
  - `og:title`, `og:description`, `og:image` (`/logo.png` or hero screenshot), `og:url`, `og:type: website`
- Twitter card tags: summary_large_image with same image
- Structured data (JSON-LD): Organization, Product, BreadcrumbList, WebSite
- Target keywords: "school management software", "school management system", "student information system", "SIS for schools", "parent portal"

---

**Legal & Compliance (short guidance for page)**

- Link to `Privacy Policy`, `Terms of Service`, and `Security` pages from footer
- Data retention & exports: add short statement about data portability
- If offering services in EU: mention GDPR compliance and data processing agreement (DPA)

---

**Developer Implementation Notes (technical)**

- Static public assets live in: `sms-system/web/public/`.
  - Logo at `/logo.png` (already present)
  - Place hero images under `/public/assets/screenshots/`
- One‑page structure: either a single React route (e.g., `/`) or a static HTML generated by Vite build
- Forms: POST to `sms-system/backend` endpoint `POST /api/leads` (create endpoint if missing). Include CORS and recaptcha if needed.
- Required backend endpoints for landing page features:
  - `GET /api/stats/overview` — (optional) return counts (schools, users) for metrics
  - `POST /api/leads` — accept lead and store in DB + forward to email/CRM
  - `GET /api/demo/video` — returns URL for demo video (or host via public assets)
- Security: ensure rate-limiting and CAPTCHA on `POST /api/leads` to prevent spam
- Analytics: fire client-side GA events and server-side lead events for attribution

---

**Backend Lead Endpoint Example (spec)**

- Endpoint: `POST /api/leads`
- Payload:
  ```json
  {
    "schoolName": "Example School",
    "contactName": "Jane Doe",
    "role": "Principal",
    "email": "jane@example.com",
    "phone": "+1234567890",
    "studentsCount": "200",
    "message": "We want a demo",
    "utm": { "source": "google", "campaign": "spring" }
  }
  ```
- Response: `200` with `{ success: true, id: "lead-id" }`
- Behavior: save lead into `leads` table, send confirmation email, push to CRM

---

**Design & Copy Guidance (detailed snippets)**

Hero CTA (Primary): "Request a Demo"
Secondary CTA: "See Pricing"

Feature header example copy:
- H2: "Everything your school needs to run smoothly"
- Subcopy: "From registration to reports — one reliable system for staff, parents and students."

Feature card microcopy (example):
- Title: "Attendance & Timetables"
- Body: "Quickly take attendance, manage timetables and track student attendance history across classes and terms. Exports and reports available."

Testimonial sample copy:
- "SCHOLARLY streamlined our admissions and reduced admin time by 45%. — Mary K., Head of School, St. Mark's Academy"

Demo video script (30–60 seconds):
- Intro: "Meet SCHOLARLY — the all-in-one school management platform..."
- Show dashboard: "Admin dashboard shows key metrics at a glance..."
- Show teacher flow: "Teachers can manage classes and submit grades in minutes..."
- Show parent app: "Parents get quick access to reports and payment receipts..."
- CTA: "Request a demo or start a free trial today."

---

**Support & Sales Flow**

- Inbound lead -> auto-email confirmation -> phone or calendar scheduling link to demo (Calendly or equivalent)
- Post-demo: sales rep tags lead and moves to CRM pipeline
- Trial activation: onboarding email series (Day 0: welcome, Day 3: tips, Day 7: webinar invite)

---

**Metrics & KPIs to Track**

- Conversion rates: visitor → demo, visitor → trial, demo → paid
- Lead volume and source attribution (utm, referrer)
- Time-to-demo scheduling (hours)
- Onboarding completion rate
- Churn rate (monthly)
- Average time savings reported by schools (survey)

---

**Press Kit / Assets for Media**

- One-page PDF: `assets/press/brand-guidelines.pdf` with logo, palette, fonts, and usage
- High-res logo: `assets/press/logo-highres.png`
- Screenshots with captions
- Boilerplate company description (ready to paste into press releases)

Boilerplate (100 words):
> SCHOLARLY is a secure, feature-rich school management platform designed for modern schools. Combining student information, attendance, assessments, billing, communications, and staff management in one central system, SCHOLARLY helps schools reduce administrative work, improve engagement with parents, and streamline operations. Available as a responsive web application and mobile apps, SCHOLARLY supports role-based access, audit logs, and integrations for payment and communication providers.

---

**FAQ (Full list to include on page or modal)**

- Q: How quickly can we get started?
  - A: A basic setup can be done in a few days. Larger schools typically take 1–4 weeks depending on data migration needs.
- Q: Do you provide onboarding and training?
  - A: Yes. We offer onboarding packages including remote training sessions and documentation.
- Q: Can we export our data?
  - A: Absolutely. You can export students, attendance, results, and payments as CSV/Excel anytime.
- Q: What payment gateways do you support?
  - A: We support common gateways via integration and offer webhooks for custom connections. (List actual gateways supported.)
- Q: Do you have multi-tenant support for school networks?
  - A: Yes — enterprise plans support multi-school rollups and aggregated reporting.

---

**Implementation Checklist (developer-friendly)**

- [ ] Prepare hero and screenshot assets in `/public/assets/`
- [ ] Add route for landing page in `web/src` or serve static HTML via Vite
- [ ] Implement `POST /api/leads` in backend and wire to CRM/email
- [ ] Add GA4 and event tracking in frontend
- [ ] Add accessible lead capture form (a11y + keyboard navigation)
- [ ] Add meta tags and JSON-LD for SEO
- [ ] Add rate-limiting & CAPTCHA to lead endpoint
- [ ] QA across desktop/tablet/mobile
- [ ] Add e2e test for lead submission flow

---

**Sitemap for One‑Page**

- / (landing page): hero, features, screenshots, how it works, pricing, testimonials, FAQ, contact
- /privacy
- /terms
- /docs (link to product docs)
- /contact
- /assets/*

---

**Sample HTML Skeleton (sections)**

- `<header>`: logo, nav (Features, Pricing, Demo, Contact)
- `<main>`:
  - `<section id="hero">` hero copy + CTA
  - `<section id="trust">` logos & metrics
  - `<section id="features">` feature tiles
  - `<section id="tour">` screenshots carousel
  - `<section id="how">` 3-step flow
  - `<section id="pricing">` pricing summary
  - `<section id="testimonials">` quotes
  - `<section id="faq">` frequently asked
  - `<section id="demo">` lead capture / demo form
- `<footer>`: links + copyright + social

---

**Support & Contact**

- Support email: support@scholarly.com (replace with actual)
- Sales email: sales@scholarly.com
- Phone (sales): +1 555 123 4567 (placeholder)
- Include contact form and optionally a phone callback scheduling widget

---

**Roadmap for Marketing Launch**

- Week 1: Build hero assets, screenshots, and meta copy
- Week 2: Implement landing page UI and lead endpoint
- Week 3: Setup analytics, CRM integration and QA
- Week 4: Soft launch with outreach to pilot schools; collect feedback
- Ongoing: SEO, content, webinars, paid acquisition campaigns

---

**Appendix — Developer API Notes (for building landing integrations)**

- `POST /api/leads` — accepts form data and returns lead id
- `GET /api/stats/overview` — optional: return aggregated counts for trust metrics
- Webhooks: When a lead is created, post to `https://hooks.example.com/crm` if configured
- Security: backend enforces rate-limiting and server-side validation

---

If you want I can also:
- Generate the actual static one-page HTML/React markup (ready-to-use components), or
- Create example images and hero mockups, or
- Draft three variations of hero headlines and CTAs for A/B testing.

---

Document created: follow this brief to design and implement the one-page marketing site. Replace placeholder emails, phone numbers, logos, and metrics with real values before publishing.
