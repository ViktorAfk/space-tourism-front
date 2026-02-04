---
name: frontend-development
description: Applies React, TypeScript, responsive, and performance best practices when building or editing frontend code. Use when editing .tsx/.css files, building pages, implementing components, hooks, or state, or when the user mentions UI, responsive design, or frontend performance.
---

# Frontend Development

Follow these practices when working on React components, pages, styles, or frontend behavior.

## React

### Components

- Prefer function components. Use existing UI primitives from `src/components/ui/` (e.g. `Heading`, `Text`, `Card`, `NavLink`) instead of raw HTML when they fit.
- Compose small, single-purpose components. Keep components under ~200 lines; split by section or responsibility.
- Use the project `cn()` helper from `@/lib/utils` for class names (it uses clsx + tailwind-merge and knows custom groups like `text-preset-*`).
- Support an optional `className` prop and forward it last so overrides work: `className={cn(baseStyles, className)}`.

### Hooks

- Use hooks for local UI state and side effects. For shared app state, use the project store (Zustand in `src/store/`).
- Prefer `useCallback` for handlers passed to memoized children or as effect dependencies; `useMemo` only when the computation is non-trivial.
- Keep custom hooks focused (one concern). Name them with a `use` prefix.

### State

- Local state: `useState` (or `useReducer` for complex updates).
- Server/async: prefer TanStack Query when data comes from APIs.
- Global UI/app state: Zustand (`useAppStore` or project-specific stores).

## TypeScript

- Type all component props with a dedicated type or interface. Prefer `interface` for object shapes.
- Use strict typing: avoid `any`; use `unknown` and narrow, or generic types where appropriate.
- Export types that are part of the component’s public API.
- Use `React.ReactNode` for `children` unless you need a string or number only.

## Responsive / mobile-first

- Use Tailwind breakpoints: design for mobile first, then `md:` and `lg:` (and `sm:` if needed). Match the project’s breakpoints in Tailwind config if customized.
- Use design tokens from `src/styles/variables.css`: spacing (`--space-*`), typography (`--text-preset-*`, `--font-*`), colors (`--color-*`). Prefer tokens over hardcoded values in CSS.
- For full-bleed or section backgrounds, follow the existing pattern: separate assets per breakpoint (e.g. `background-*-mobile.jpg`, `*-tablet.jpg`, `*-desktop.jpg`) and switch via media queries or Tailwind.

## Performance

- **Bundling**: Rely on Vite’s defaults. Use dynamic `import()` for heavy or route-scoped modules so they are code-split.
- **Images**: Prefer WebP with PNG/JPEG fallback (`<picture>` or multiple `source` + `img`). Use responsive `srcset`/`sizes` for art direction or resolution switching.
- **Lazy loading**: Use `loading="lazy"` on below-the-fold images. For components, use `React.lazy()` and `Suspense` for route-level or heavy UI.
- **Lists**: For long lists, consider virtualization (e.g. `@tanstack/react-virtual`) only when profiling shows a need.

## Quick checklist

- [ ] Props and state typed; no unnecessary `any`
- [ ] Uses `cn()` and existing UI components where appropriate
- [ ] Responsive: mobile-first, tokens from `variables.css`
- [ ] Images: WebP + fallback; lazy where appropriate
- [ ] Heavy or route-specific code split with dynamic import / `React.lazy`
