# Architecture Documentation

This document outlines the architectural decisions and patterns used in the E-commerce Catalog + Cart project.

## 📐 Atomic Design

We follow the **Atomic Design** methodology to organize our UI components. This ensures modularity, reusability, and scalability.

- **Atoms**: The smallest building blocks (e.g., `Button`, `Input`, `Badge`). They are context-free and highly reusable.
- **Molecules**: Groups of atoms bonded together (e.g., `SearchBar`, `ProductInfo`, `CartItemRow`).
- **Organisms**: Complex components that form a distinct section of an interface (e.g., `ProductGrid`, `Navbar`, `CartSummary`).
- **Templates/Pages**: In Next.js App Router, the `page.tsx` files act as the templates/pages that assemble organisms.

Location: `src/components/{atoms,molecules,organisms}/`

## 🧠 State Management (Zustand)

We use **Zustand** for lightweight, performant global state management.

### Cart Store
The cart store (`src/stores/useCartStore.ts`) handles all shopping cart logic:
- Adding/Removing items.
- Updating quantities.
- Subtotal and total item calculations.
- **Persistence**: Uses Zustand's `persist` middleware to sync the cart with `localStorage`, ensuring data persists across page refreshes.

### Store Patterns
- Use "Getters" (selectors) for derived state to avoid unnecessary re-renders.
- Keep actions co-located with the state.

## 🛣️ Routing (Next.js App Router)

The project leverages the power of Next.js 15 App Router for optimized data fetching and rendering.

- **`/catalog`**: The main landing page for browsing products.
- **`/product/[id]`**: Dynamic route for detailed product views.
- **`/cart`**: Dedicated page for reviewing and managing the shopping cart.

### Server vs. Client Components
- **Server Components (Default)**: Used for data fetching, static parts of the UI, and SEO-critical content.
- **Client Components ("use client")**: Used only when interactivity (hooks, state, browser APIs) is required (e.g., Cart buttons, Search input).

## 🚀 Performance & Core Web Vitals

The architecture is designed to meet strict performance targets:
- **LCP (Largest Contentful Paint)**: < 2.5s (Optimized via Next.js `Image` and streaming).
- **CLS (Cumulative Layout Shift)**: < 0.1 (Fixed aspect ratios for images and skeletons).
- **INP (Interaction to Next Paint)**: < 200ms (Lightweight state updates and optimized JS).

## 🧪 Testing Strategy

### Unit & Integration (Vitest + RTL)
- Focus on testing individual atoms and complex molecules.
- Mocking the Zustand store when testing UI components.

### End-to-End (Playwright)
- Focus on critical user journeys: `Browse -> Search -> Add to Cart -> Checkout Flow`.
- Uses the **Accessibility Tree** for selectors to ensure WCAG compliance.
