# Agent Context for Cortex Labs Website

Hello Agent! If you are picking up this project, please read this document first to quickly understand the constraints, architecture, and expectations.

## 🚨 CRITICAL RULES & CONSTRAINTS

1. **Pages Router, not App Router:** This project uses the traditional Next.js Pages Router (`src/pages`). Do NOT create files in `src/app`.
2. **JavaScript / JSX Only:** We are strictly using `.js` and `.jsx` files. Do NOT use TypeScript or `.tsx` files. Do NOT install TypeScript or `@types/*` dependencies.
3. **No Tailwind CSS:** We are using **Vanilla CSS Modules** (`src/styles/`) for maximum control. The theme is a combination of "Clean & Corporate" with "Bold & Artistic". Do NOT install or use Tailwind CSS. Use existing CSS variables from `globals.css`.
4. **Prisma 7 Compatibility:** We are using Prisma 7 with NeonDB PostgreSQL. 
   - You MUST instantiate Prisma using the `@prisma/adapter-pg` and the `pg` pool.
   - Do NOT use `new PrismaClient()` with no arguments in the backend, as it will crash with a `PrismaClientConstructorValidationError`.
   - Use the pattern found in `src/pages/api/auth/[...nextauth].js` to create the Prisma connection.
5. **No `url` in `schema.prisma`:** Prisma 7 does not support the `url` parameter in `schema.prisma`. It relies on `prisma.config.ts`.
6. **Authentication:** The Admin Dashboard (`/admin`) is secured using `NextAuth.js` via the Credentials provider.

## 💡 Current State
- The UI foundation is set. The visitor homepage has a `HeroSection` and the admin dashboard layout is built.
- The `envChecker.js` script verifies environment variables and tests the NeonDB connection on `npm run dev`.

## 🚀 Full Task Tracker (What's Left)

- `[x]` **1. Project Setup**
  - `[x]` Initialize Next.js project (JSX).
  - `[x]` Install dependencies (Prisma, NextAuth, pg/Neon).
  - `[x]` Set up `.env.example` and `envChecker.js`.
- `[x]` **2. Database & Models**
  - `[x]` Configure Prisma with NeonDB connection.
  - `[x]` Define Models: User (Admin), TeamMember (w/ portfolio & resume links, optional image), Project (w/ relation to TeamMember), Hackathon, Event, Competition.
  - `[x]` Generate Prisma client and create initial migration.
- `[ ]` **3. Core App Structure & Theming**
  - `[x]` Set up global CSS (Clean/Corporate + Bold/Artistic).
  - `[ ]` Create layout component with Navigation.
- `[ ]` **4. Public Pages (Visitor Dashboard)**
  - `[x]` Home/Hero Section.
  - `[ ]` Team Members section.
  - `[ ]` Projects section.
  - `[ ]` Events, Hackathons, and Competitions sections.
- `[ ]` **5. Admin Dashboard & Authentication**
  - `[x]` Set up NextAuth for Admin login.
  - `[x]` Create secure Admin layout.
  - `[ ]` Build Admin views/forms to manage Team Members (including image upload to DB as base64).
  - `[ ]` Build Admin views/forms for Projects, Events, etc.
- `[ ]` **6. Polish & Verification**
  - `[x]` Validate `.env` checking logic.
  - `[ ]` Review UI interactions and responsive design.
  - `[ ]` Final testing.

Please proceed quickly and cleanly with these rules in mind!
