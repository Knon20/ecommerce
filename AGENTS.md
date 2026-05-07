# Project: E-commerce Catalog + Cart

## Stack
- Next.js 15 (App Router)
- TypeScript 5.9 strict
- Tailwind 4.0
- Zustand 5 (persist middleware)
- Vitest + RTL (unit), Playwright via MCP (E2E)

## Architecture
- Atomic Design: src/components/{atoms,molecules,organisms}/
- App Router: app/{catalog,product/[id],cart}/
- Stores en src/stores/, tipos en src/types/
- Mocks en src/mocks/, alias @/* desde src/

## Code standards
- TS strict, sin any. Props con interface.
- Server Components por defecto, "use client" solo cuando necesario.
- ESLint strict + Prettier (2 esp, single quotes).

## Testing
- Cobertura mínima 80% lines/branches.
- E2E con árbol de accesibilidad, no XPath.

## Constraints
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Carrito persistido en localStorage vía Zustand persist.
- WCAG 2.1 AA, mobile-first.