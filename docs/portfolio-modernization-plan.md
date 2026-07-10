# Portfolio Modernization Plan

## Scope and guardrails

This work preserves Ritik Kumar's dark visual language, recruiter-first copy, every project, certification, repository link, and Medallion Architecture narrative. Changes are additive or structural; no portfolio content is removed.

## Delivery sequence

1. **Foundation and reliability (in progress):** extract shared UI/runtime utilities, add an error boundary, no-result states, accessible focus treatment, reduced-motion support, and a responsive mobile navigation pattern.
2. **Live GitHub proof (in progress):** use GitHub's public REST API for profile, repository, languages, stars, forks, update dates, and recent public activity. Render static portfolio data first, cache successful responses locally for one hour, and retain that data when GitHub is unavailable.
3. **Contact hardening (in progress):** replace the `mailto` form submission with a Web3Forms-compatible POST flow. Deployment needs a `VITE_WEB3FORMS_ACCESS_KEY`; until then the UI clearly reports that the form is not configured, rather than losing a visitor's message. A hidden honeypot field provides basic spam resistance.
4. **SEO and sharing:** add canonical, robots, sitemap, favicon, absolute Open Graph URLs, and Person/CreativeWork JSON-LD.
5. **Asset and project presentation:** retain only owner-approved photos; introduce project screenshot/architecture slots only after source assets can be verified. Do not use generated portraits or screenshots as evidence of project output.
6. **Further refactoring:** move each remaining portfolio section from the previous monolithic screen into dedicated components, then split the content data by domain after the UI interfaces are stable.

## File-by-file change list

| File | Change | Why / impact |
| --- | --- | --- |
| `src/lib/github.ts` | Typed REST client with local cache and static fallbacks | Live data without a backend or stale hardcoded counters |
| `src/hooks/useGitHubData.ts` | Fetch lifecycle hook | Loading, error, and fallback states are explicit |
| `src/components/ErrorBoundary.tsx` | Section-safe React error boundary | A rendering fault cannot blank the complete site |
| `src/App.tsx` | Integrate live GitHub proof, safer contact flow, accessible responsive navigation, and empty states | Resolves the highest user-facing audit findings without changing content |
| `src/data/portfolio.ts` | Stable project IDs and fallback GitHub information | Stable React keys and resilient API rendering |
| `src/index.css` | Mobile menu, focus, status, no-result, and reduced-motion styles | Better keyboard and cross-device usability |
| `public/robots.txt`, `public/sitemap.xml` | Crawl controls | Search-engine discoverability |
| `index.html` | Canonical, social metadata, structured data, and security-oriented meta policies | Correct sharing and richer search context |
| `docs/asset-audit.md` | Asset inventory and cleanup plan | Makes removal/optimization decisions auditable |

## Accessibility plan

- A skip link, visible `:focus-visible` treatment, named navigation, `aria-current`, `aria-live` form/API status, and descriptive control labels.
- A compact, keyboard-operable mobile menu instead of horizontal-only navigation.
- A global `prefers-reduced-motion` override; Lenis is disabled for that preference.
- No-result states for project and certification searches.

## Performance plan

- Remove unused Three.js packages.
- Keep the hero image eager and below-the-fold imagery lazy. Do not fabricate additional imagery.
- Cache GitHub responses for one hour to prevent repeated public API calls.
- Do not load the resume preview until the user reaches its section (browser lazy loading remains enabled).

## Responsive validation plan

Validate at 320, 360, 375, 390, 414, 768, 820, 1024, 1280, 1440, and 1920 CSS pixels. Check navigation opening/closing, all grids, long certificate filters, project card footers, the resume fallback, and focus order. Automated build/lint verifies type and syntax; visual browser validation remains a release check because it needs a rendered browser target.
