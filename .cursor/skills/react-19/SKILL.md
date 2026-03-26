---
name: react-19
description: Applies React 19 component and hook conventions (refs, forms, Suspense, RSC boundaries). Use when writing or refactoring TSX/JSX, hooks, or app entry; when the user mentions React 19, Server Components, or modern React APIs.
---

# React 19

- Use **function components only** for new code.
- Prefer passing **`ref` as a normal prop** where applicable; avoid unnecessary `forwardRef` wrappers.
- For forms and async flows where appropriate: **`useActionState`**, **`useFormStatus`**, **`useOptimistic`** per official docs—do not use removed or renamed legacy APIs.
- Structure async UI with **`Suspense`** boundaries when loading or lazy content is involved.
- Do not use **`propTypes`** / **`defaultProps`** on function components; follow current React typings.
- If the app is RSC-capable (e.g. Next), respect server vs client boundaries and document metadata APIs as documented for that stack.
- Prefer **semantic HTML** in JSX structure (landmarks, headings, buttons vs divs) regardless of styling solution.

## Progressive detail

- Stack-specific rules (routing, data fetching) follow the app’s framework docs and existing patterns in the same package.
