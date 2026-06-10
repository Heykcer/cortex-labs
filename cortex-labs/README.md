# Cortex Labs Website

A full-stack Next.js web application for Cortex Labs, acting as both a **Visitor Dashboard** (public-facing website) and an **Admin Dashboard** (secure content management system).

## 🚀 Tech Stack & Architecture
- **Framework:** Next.js using the **Pages Router** (`src/pages`). We explicitly use `.jsx` and `.js` (No TypeScript).
- **Styling:** Vanilla CSS Modules (`src/styles/`). The aesthetic theme is a blend of **Clean & Corporate** mixed with **Bold & Artistic**.
- **Database:** PostgreSQL via **NeonDB**.
- **ORM:** **Prisma 7**. *Note: Because we are on Prisma 7, we MUST instantiate the Prisma Client using `@prisma/adapter-pg` and the Node.js `pg` driver (refer to `src/pages/api/auth/[...nextauth].js` for the implementation pattern).*
- **Authentication:** **NextAuth.js** using the Credentials Provider.

## 📁 Project Structure
- `src/pages/`: Contains the Pages Router configuration (`_app.jsx`, `index.jsx`).
- `src/pages/admin/`: Protected admin layout and views.
- `src/pages/api/`: Backend API routes.
- `src/components/ui/`: Reusable UI components (like `HeroSection.jsx`).
- `src/styles/`: CSS modules and global CSS variables.
- `prisma/schema.prisma`: The database schema for Team Members, Projects, Hackathons, Events, and Competitions.
- `envChecker.js`: A startup script invoked automatically by `npm run dev` to verify environment variables and database connectivity.

## 🛠 Getting Started

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Copy `.env.example` to `.env` and fill in your NeonDB `DATABASE_URL` and `NEXTAUTH_SECRET`.
4. Start the server using `npm run dev`. This will automatically run `envChecker.js` to verify your connections.

## 🚧 Current Progress
- Next.js setup with Pages router complete.
- Global CSS design system and HeroSection implemented.
- Prisma 7 models mapped to NeonDB.
- NextAuth Credentials flow setup for the Admin dashboard.

## 📋 Task Tracker (Current Progress)

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
