# Shared Components

This folder contains reusable components used across multiple pages in the application.

## Components

- **Navbar.svelte** - Main navigation bar with links and mobile menu
- **Footer.svelte** - Site footer with branding, links, and contact info
- **BackgroundPattern.svelte** - Reusable background pattern component

## Usage

```svelte
<script>
	import Navbar from '$lib/components/shared/Navbar.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';
	import BackgroundPattern from '$lib/components/shared/BackgroundPattern.svelte';
</script>
```

## Note

These components are shared across the application. For page-specific components, see their respective folders (e.g., `homepage/`).
