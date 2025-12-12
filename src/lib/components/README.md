# Components Directory

This directory contains all reusable and page-specific components for the application.

## Structure

```
components/
├── shared/          # Shared components used across multiple pages
│   ├── Navbar.svelte
│   ├── Footer.svelte
│   ├── BackgroundPattern.svelte
│   └── README.md
├── homepage/        # Homepage-specific components
│   ├── HeroSection.svelte
│   ├── StatsSection.svelte
│   ├── MissionSection.svelte
│   ├── GallerySection.svelte
│   ├── CTASection.svelte
│   └── README.md
└── ui/              # UI primitives (shadcn-svelte components)
    └── button/
```

## Organization Principles

### Shared Components (`shared/`)
Components that are used across multiple pages or in the main layout:
- Navigation components
- Layout components (Footer, etc.)
- Utility components (BackgroundPattern, etc.)

**Usage:**
```svelte
import Navbar from '$lib/components/shared/Navbar.svelte';
```

### Page-Specific Components (`homepage/`, `about/`, etc.)
Components designed for a specific page and not intended for reuse:
- Section components unique to a page
- Page-specific layouts

**Usage:**
```svelte
import HeroSection from '$lib/components/homepage/HeroSection.svelte';
```

### UI Primitives (`ui/`)
Low-level, reusable UI components from shadcn-svelte:
- Buttons, inputs, cards, etc.
- Design system components

**Usage:**
```svelte
import { Button } from '$lib/components/ui/button';
```

## Adding New Components

1. **Shared Component**: Add to `shared/` folder
2. **Page-Specific Component**: Add to the appropriate page folder (e.g., `homepage/`, `about/`)
3. **UI Primitive**: Use shadcn-svelte CLI: `npx shadcn-svelte@latest add [component]`

## Best Practices

- Keep components focused and single-purpose
- Use TypeScript for type safety
- Document complex components with comments
- Follow naming conventions: PascalCase for component files
- Keep page-specific components in their respective folders
- Share common logic through utilities in `$lib/utils/`

