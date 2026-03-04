# AGENTS.md

Repository guidance for autonomous coding agents working in this project.

Scope: entire repository (`C:\Users\ashley.chan\projects\yesmy_hackathon`).

## 1) Project Snapshot

- Stack: React 18 + Vite 5 + Tailwind CSS 3.
- Language: JavaScript (ES modules), JSX.
- Entry point: `src/main.jsx`.
- App composition root: `src/App.jsx`.
- Current UI is split into reusable components in `src/components/**`.
- Shared content/config data lives in `src/data/landingContent.js`.

## 2) Rule Files Audit

Checked these locations:

- `.cursorrules`
- `.cursor/rules/**`
- `.github/copilot-instructions.md`

Result:

- No Cursor rule files found.
- No Copilot instruction file found.

Agent behavior in this repo should follow this file as the primary guide.

## 3) Install / Run Commands

From `package.json` scripts and current config:

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production bundle: `npm run build`
- Preview production build: `npm run preview`

Notes:

- No `lint` script is currently configured.
- No `test` script is currently configured.
- No dedicated typecheck script is currently configured.

## 4) Lint/Test Guidance (Current + Single Test)

Current state:

- Linting framework is not wired in scripts.
- Test framework is not wired in scripts.

What this means for agents:

- Do not claim lint/test pass unless tooling is added.
- Use `npm run build` as the primary verification command today.

Single test guidance (important):

- There is no supported single-test command right now because test tooling is absent.
- If testing is added later (for example Vitest), document and use a command like:
- `npm run test -- path/to/test-file.test.jsx`
- Until then, mark single-test execution as "not available in current repo config".

## 5) Repository Structure (Current)

- `src/main.jsx` - React root mount and StrictMode wrapper.
- `src/App.jsx` - high-level orchestration/state and section composition.
- `src/components/IntroSplash.jsx` - pre-landing splash overlay.
- `src/components/HeaderNav.jsx` - top navigation bar.
- `src/components/MobileMenu.jsx` - mobile-only menu panel.
- `src/components/sections/HeroSection.jsx` - hero banner section.
- `src/components/sections/DealsSection.jsx` - deals list and deal card renderer.
- `src/components/sections/AiChatbotSection.jsx` - chatbot UX section.
- `src/components/sections/EcosystemSection.jsx` - ecosystem CTA section.
- `src/data/landingContent.js` - nav/deals/prompts data source.
- `src/styles.css` - Tailwind directives + minimal global utilities.

## 6) Coding Style Conventions

### Imports

- Use ES module imports only.
- Keep imports at top of file.
- Prefer order: external libs -> internal components/modules -> assets/styles.
- Use double quotes for import strings.

### Formatting

- Use semicolons consistently.
- Use double quotes consistently.
- Keep JSX props on separate lines when lines are long.
- Keep component return trees readable with clear indentation.

### React Patterns

- Prefer function components (`export default function ...`).
- Use hooks for local state/effects (`useState`, `useEffect`).
- Keep section components presentational where possible.
- Keep orchestration/state in `App.jsx` unless reusable logic emerges.

### Naming

- Components: PascalCase (`HeroSection`, `MobileMenu`).
- Variables/functions/props: camelCase (`isMenuOpen`, `onToggleMenu`).
- Constants: UPPER_SNAKE_CASE for fixed values (`INTRO_SPLASH_MS`).
- Data arrays/objects in shared modules should be descriptive and stable.

### Data and Reuse

- Put reusable static content in `src/data/landingContent.js`.
- Use object-driven navigation/items (id, label, href) over magic strings.
- Prefer stable IDs for list keys (`deal.id`) rather than display text.
- Add section IDs for real anchor navigation (`#deals`, `#ai-chatbot`, etc.).

### Styling

- Tailwind-first styling in JSX className strings.
- Keep global CSS minimal and utility-focused.
- Reuse existing utility classes/patterns before adding new ones.
- Preserve mobile-first responsive behavior (`md:` overrides for desktop).

### Error Handling and Side Effects

- No explicit app-wide error boundary exists yet.
- For effects (timers, DOM side effects), always include cleanup.
- Avoid silent failures; if adding async logic, surface recoverable errors clearly.
- Do not introduce empty `catch` blocks.

## 7) Change Guidelines for Agents

- Preserve existing UX unless task explicitly requests behavior changes.
- Keep components small and focused; extract repeated blocks.
- Avoid introducing new dependencies without clear need.
- Maintain existing visual language and responsive patterns.
- When adding new sections, wire them via data and anchors where appropriate.

## 8) Verification Checklist

Minimum after code changes:

- Run `npm run build`.
- Confirm no diagnostics errors in modified files when LSP is available.
- If tests are introduced in future, run relevant tests before finalizing.

When changing nav/sections:

- Verify anchor links resolve to existing section IDs.
- Verify mobile menu behavior on small screens.
- Verify desktop nav does not expose mobile-only empty states.

## 9) Git and PR Hygiene

- Keep commits scoped to one logical change.
- Use clear commit messages (repo currently uses concise semantic style often).
- Do not commit secrets or environment credentials.
- Do not force-push unless explicitly requested.

## 10) If You Need to Extend Tooling

Recommended next additions (optional, not currently present):

- Add lint script (ESLint) and document command in this file.
- Add test script (Vitest + React Testing Library) and include single-test command.
- Add CI command parity (build + lint + tests) once tooling exists.

Keep AGENTS.md updated whenever scripts, structure, or conventions change.
