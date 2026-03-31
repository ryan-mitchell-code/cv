Rules:

- Do not introduce new libraries unless necessary
- Do not mix data and UI
- Keep components small and readable
- Follow existing structure
- Prefer named exports over default exports
- Avoid unnecessary intermediate variables
- Keep components purely presentational unless state is required
- Keep components under 100 lines
- Do not duplicate or re-export data or types across folders
- Always import directly from source files (e.g. /src/data, /src/types)
- Prefer structural CSS selectors (e.g. section, body) over Tailwind class overrides
- Avoid overriding Tailwind utility classes directly in CSS
- Keep CSS minimal, predictable, and easy to reason about
- Do not apply global styles to generic elements like div or button unless explicitly required
