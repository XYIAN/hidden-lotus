# Code Context Overview

- Framework: Next.js 15 (App Router) + TypeScript
- UI: PrimeReact components, Tailwind utility classes, custom CSS
- Key pages: `src/app/{page,about,classes,team,story}`
- Data sources: `src/constants/{team,classes,stories}`
- Common components: `src/components/common` (cards, grids, hero)
- Styling: Tailwind config + scoped CSS files under `src/styles`
- Images: Next.js `Image` and PrimeReact `Image` (mixed usage)

Notable choices:

- Team/Class/Story use centralized constants for content
- Display cards support multiple type badges with white text
- Classes page simplified (filters removed) with responsive grid
- About page: reduced mobile padding (px-2) and responsive Card paddings

Conventions:

- Prefer meaningful prop names; avoid `any`
- Use responsive Tailwind classes (`sm: md: lg:`) for spacing
- Dialogs and badges via PrimeReact `Dialog`, `Tag`
