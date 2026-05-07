# E-commerce Catalog + Cart

A modern, high-performance E-commerce catalog and cart system built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS 4.0**, and **Zustand**.

![E-commerce Preview](https://via.placeholder.com/800x400?text=E-commerce+Catalog+Preview)

## 🚀 Features

- **Product Catalog**: Dynamic product grid with filtering and search capabilities.
- **Persistent Cart**: Fully functional shopping cart powered by Zustand with `localStorage` persistence.
- **Modern UI**: Styled with Tailwind CSS 4.0 for a sleek, responsive, and mobile-first experience.
- **Atomic Design**: Highly modular and scalable component architecture.
- **Type Safety**: Built with strict TypeScript standards for robust development.
- **High Performance**: Optimized for Core Web Vitals (LCP, CLS, INP).

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **State Management**: [Zustand 5](https://github.com/pmndrs/zustand)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: Vitest + RTL (Unit), Playwright (E2E)

## 📁 Project Structure

```text
src/
├── app/            # Next.js App Router (catalog, cart, product/[id])
├── components/     # Atomic Design components
│   ├── atoms/      # Basic UI elements (buttons, inputs)
│   ├── molecules/  # Combined atoms (cards, search bars)
│   └── organisms/  # Complex sections (navbars, product grids)
├── lib/            # Utility functions and shared logic
├── mocks/          # Mock data for products and categories
├── stores/         # Zustand stores (cart, etc.)
└── types/          # Global TypeScript interfaces
```

## 🏁 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ecommerce
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing

The project uses a comprehensive testing strategy:

- **Unit Tests**: `npm run test` (Vitest)
- **E2E Tests**: `npm run test:e2e` (Playwright)

## 📜 Standards & Guidelines

For detailed information on architecture, state management, and contributing, please refer to:

- [ARCHITECTURE.md](./ARCHITECTURE.md)
- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [AGENTS.md](./AGENTS.md)

## ⚖️ License

This project is licensed under the MIT License.
