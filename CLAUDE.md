# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

"DevFlow" (Dev Overflow) — a Stack Overflow–style Q&A app built while following the JS Mastery Ultimate Next.js course. Stack: Next.js 16 (App Router), React 19, Tailwind CSS v4, NextAuth v5 (beta), Zod v4, react-hook-form.

## Commands

Use **yarn**. `yarn.lock` is the active lockfile; `package-lock.json` is stale (it lacks later deps like `next-auth`).

- `yarn dev`: dev server at http://localhost:3000
- `yarn build` / `yarn start`: production build and serve
- `yarn lint`: ESLint (flat config, `eslint-config-next` core-web-vitals + typescript)
- `npx tsc --noEmit`: type check (no script defined)
- `npx prettier --write .`: format (no script defined). printWidth 120; `prettier-plugin-tailwindcss` sorts class names.

There is no test framework configured.

## Architecture

### Routing
- `app/(auth)/`: `sign-in` and `sign-up`. The group layout renders the shared card shell and places `SocialAuthForm` (GitHub/Google buttons) *below* each page's children, so pages only render the credentials form.
- `app/(root)/`: main app pages under a layout with the fixed `Navbar`.
- Route paths live in `constants/routes.ts` (`ROUTES`). Use it instead of hard-coding paths.
- Path alias `@/*` maps to the repo root.

### Authentication (NextAuth v5)
- `auth.ts` (repo root) is the single config. It exports `handlers`, `auth`, `signIn`, and `signOut`. Providers are GitHub and Google, and credentials come from the `AUTH_SECRET`, `AUTH_GITHUB_ID/SECRET`, and `AUTH_GOOGLE_ID/SECRET` env vars, which NextAuth reads implicitly.
- `app/api/auth/[...nextauth]/route.ts` re-exports `handlers` as `GET`/`POST`.
- `proxy.ts` re-exports `auth` as `proxy`. In Next 16, `proxy.ts` replaces the deprecated `middleware.ts`, so don't create a `middleware.ts`.
- The root layout calls `auth()` on the server and wraps the tree in `SessionProvider`. Server code imports `signIn`/`signOut`/`auth` from `@/auth`. Client components use `signIn` from `next-auth/react`.

### Forms and validation
- `lib/validations.ts` holds all Zod schemas, including many for features that aren't built yet (questions, answers, votes, collections, users). Reuse them rather than defining new ones inline. The file uses the Zod v4 API, e.g. top-level `z.email()` and `z.url()`.
- `components/forms/AuthForm.tsx` is generic over a Zod schema. Pages pass `schema`, `defaultValues`, `formType`, and `onSubmit`, and the form builds one field per key of `defaultValues` using react-hook-form's `Controller` with the shadcn `Field`/`FieldLabel`/`FieldError` components.

### UI components
- shadcn/ui uses the **`base-maia` style, which is built on `@base-ui/react`, not Radix**. Composition uses the Base UI `render` prop instead of Radix's `asChild` (see `DropdownMenuTrigger render={...}` in `components/navigation/navbar/Theme.tsx`). Add components with the shadcn CLI so they match (`components.json`).
- Toasts use the Base UI toast manager: `import { toast } from "@/components/ui/toast"` then `toast.add({ type, title, description })`. `sonner` is installed but unused.
- `cn` comes from the `cn` npm package. `lib/utils.ts` just re-exports it.
- Icons: shadcn components use Hugeicons (`@hugeicons/react`). `lucide-react` is also used in app code.

### Styling (Tailwind v4, CSS-first)
- There is no `tailwind.config`. The theme tokens (`@theme`), plugins, and a large set of project utilities (`@utility`) are all defined in `app/globals.css`.
- Project utilities follow the course's design-system naming and should be preferred over ad-hoc classes:
  - Light/dark color pairs: `background-light900_dark200`, `text-dark100_light900`, `shadow-light100_dark100`, `light-border`, `invert-colors`
  - Typography: `h1-bold`, `h2-bold`, `paragraph-regular`, `body-medium`, `small-semibold`, etc.
  - Layout helpers: `flex-between`, etc.
- Dark mode is class-based (`next-themes` with `attribute="class"`, and a `@custom-variant dark` in the CSS). Fonts are exposed as CSS variables (`--font-inter`, `--font-space-grotesk`, `--font-sans`) and used through classes like `font-space-grotesk`.

## Conventions

Commit messages are written in Spanish with a type prefix, e.g. `Feat: login con google`, `Fix: ordenar imports`.
