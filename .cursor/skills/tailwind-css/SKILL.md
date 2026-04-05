---
name: tailwind-css
description: Styles UI with Tailwind CSS utilities, theme.extend, content paths, plugins, and cva for variants. Use when editing Tailwind config, className strings, or global CSS with @layer/@apply; when the user mentions Tailwind, utility-first styling, or prettier-plugin-tailwindcss.
---

# Tailwind CSS

- **Config:** Put project tokens in **`theme.extend`** (colors, fonts, spacing, breakpoints). Avoid changing the base theme unless necessary. List **plugins** explicitly (`@tailwindcss/forms`, `@tailwindcss/typography`, etc.).
- **`content`:** Keep paths accurate for every place utilities appear (e.g. `./src/**/*.{js,ts,jsx,tsx}`, Storybook paths, HTML entries). Wrong `content` = missing styles in production.
- **Utilities first:** Prefer **utility classes in JSX/HTML**. For long strings, break lines or use **`prettier-plugin-tailwindcss`** for consistent order.
- **`@apply`:** Use **sparingly** in global CSS—base styles or rare shared patterns only. Prefer React/Vue components + **`cva`** for repeated variant UI (buttons, badges).
- **Arbitrary values:** Prefer **theme tokens**. Use `[]` arbitrary values only as a last resort; if reused, add to **`theme.extend`** and document one-off exceptions.

## Variants (cva)

- Use **`class-variance-authority`** for variant + size combos; merge with `className` prop patterns already in the repo.

## Monorepo / packages

- Each app or package may have its own **`tailwind.config`**. Edit the config next to the package you are changing; align **`content`** with that package’s source and Storybook paths.

## Progressive detail

- Workspace-wide defaults also live in **`.cursor/rules/tailwindcss.mdc`**. For token sources, attach or follow **`tailwind.config`** and **`DesignSystemTokens.json`** when the project uses them.
