# Madrasha Website

A simple, clean, and SEO-friendly informational website for a Madrasha built with SvelteKit, TypeScript, Tailwind CSS, and shadcn-svelte.

## Tech Stack

- **SvelteKit** - Framework with TypeScript
- **Tailwind CSS** - Styling with plugins:
  - `@tailwindcss/typography` - Beautiful typography
  - `@tailwindcss/forms` - Form styling
- **shadcn-svelte** - UI component library
- **SvelteKit adapter-auto** - Automatic adapter selection

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── ui/          # shadcn-svelte components
│   │   ├── Navbar.svelte
│   │   └── Footer.svelte
│   ├── utils/
│   │   ├── seo.ts       # SEO utility functions
│   │   └── utils.ts     # General utilities (cn function)
│   └── assets/          # Static assets
├── routes/
│   ├── +layout.svelte   # Root layout with Navbar & Footer
│   ├── +page.svelte     # Home page
│   ├── about/
│   │   └── +page.svelte # About page
│   ├── activities/
│   │   └── +page.svelte # Activities page
│   ├── gallery/
│   │   └── +page.svelte # Gallery page
│   └── contact/
│       └── +page.svelte # Contact page with form
└── static/              # Static files (images, etc.)
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ SEO-friendly with proper meta tags
- ✅ Semantic HTML
- ✅ Clean, maintainable code structure
- ✅ Reusable Navbar and Footer components
- ✅ Contact form with validation
- ✅ Gallery page (ready for images)
- ✅ Tailwind CSS with custom theme

## Getting Started

### Install Dependencies

```sh
npm install
```

### Development

Start the development server:

```sh
npm run dev

# or open in browser automatically
npm run dev -- --open
```

### Building for Production

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Adding shadcn-svelte Components

To add more shadcn-svelte components, use:

```sh
npx shadcn-svelte@latest add [component-name]
```

For example:

```sh
npx shadcn-svelte@latest add card
npx shadcn-svelte@latest add input
```

## Customization

### Updating Content

1. **Home Page**: Edit `src/routes/+page.svelte`
2. **About Page**: Edit `src/routes/about/+page.svelte`
3. **Activities**: Edit the `activities` array in `src/routes/activities/+page.svelte`
4. **Gallery**:
   - Add images to `static/images/gallery/`
   - Update the `galleryImages` array in `src/routes/gallery/+page.svelte`
5. **Contact Info**: Update contact details in `src/routes/contact/+page.svelte`

### Styling

- Main styles: `src/routes/layout.css`
- Theme colors: Defined in CSS variables in `layout.css`
- Tailwind config: Uses Tailwind v4 (configured in `layout.css`)

### SEO

- Each page has `<svelte:head>` with title and description
- Update `src/lib/utils/seo.ts` for site-wide SEO defaults
- Update `src/app.html` for global meta tags

## Pages

- **Home** (`/`) - Hero section, mission, and call-to-action
- **About** (`/about`) - Mission, vision, values, and history
- **Activities** (`/activities`) - List of programs and activities
- **Gallery** (`/gallery`) - Photo gallery (add your images)
- **Contact** (`/contact`) - Contact form and information

## Notes

- The contact form currently simulates submission. Connect it to your backend/API.
- Gallery uses placeholder images. Replace with actual photos.
- Update contact information, address, and hours in the Contact page.
- Update the site URL in `src/lib/utils/seo.ts` when deploying.

## Deployment

This project uses `adapter-auto`, which automatically selects the appropriate adapter based on your deployment platform (Vercel, Netlify, etc.).

For static hosting, you may want to switch to `@sveltejs/adapter-static`:

```sh
npm install -D @sveltejs/adapter-static
```

Then update `svelte.config.js`:

```js
import adapter from '@sveltejs/adapter-static';
```

## License

MIT
