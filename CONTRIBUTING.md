# Contributing Guidelines

Welcome to the E-commerce project! To maintain a high level of code quality and consistency, please follow these guidelines.

## 💻 Coding Standards

### TypeScript
- **Strict Mode**: `strict: true` is enforced. Avoid `any` at all costs.
- **Interfaces**: Always use `interface` for component Props and Store state.
- **Enums**: Prefer `union types` over `enums` for simple sets of strings.

### Components
- Follow **Atomic Design** principles.
- Use **Server Components** by default. Only add `"use client"` if interactivity is strictly necessary.
- **Tailwind CSS**: Use utility classes. For complex layouts, leverage Tailwind 4.0 features like container queries.
- **Naming**: Use PascalCase for components (`ProductCard.tsx`) and camelCase for functions and variables.

### ESLint & Prettier
- Files are automatically linted and formatted on commit.
- Standard: 2 spaces, single quotes, no semi-colons (per project config).

## 🧪 Testing Requirements

We aim for a minimum of **80% coverage** in lines and branches.

### Writing Tests
- **Vitest**: Create `.test.tsx` files next to the component or utility.
- **Playwright**: Place E2E tests in the `tests/` directory at the root.
- **Accessibility**: Use `testing-library` queries that mimic user behavior (e.g., `getByRole`, `getByLabelText`) rather than implementation details.

## 🌿 Branching & PR Process

1. Create a feature branch from `main`: `feature/your-feature-name`.
2. Write clean, modular code.
3. Ensure all tests pass: `npm run test`.
4. Run linting: `npm run lint`.
5. Open a Pull Request with a clear description of changes.

## ♿ Accessibility (A11y)

The project targets **WCAG 2.1 AA** compliance.
- Use semantic HTML (`<header>`, `<main>`, `<footer>`, `<section>`).
- Ensure proper color contrast.
- All interactive elements must be keyboard accessible.
- Images must have descriptive `alt` text.

---

Thank you for contributing!
