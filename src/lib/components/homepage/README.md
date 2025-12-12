# Homepage Components

This folder contains components specifically designed for the homepage layout.

## Components

- **HeroSection.svelte** - Main hero section with heading, CTA buttons, and hero image
- **StatsSection.svelte** - Statistics cards showing key metrics
- **MissionSection.svelte** - Mission statement with three pillar cards
- **GallerySection.svelte** - Gallery preview with image grid
- **CTASection.svelte** - Call-to-action section with gradient background

## Usage

```svelte
<script>
	import {
		HeroSection,
		StatsSection,
		MissionSection,
		GallerySection,
		CTASection
	} from '$lib/components/homepage';
</script>

<HeroSection />
<StatsSection />
<MissionSection />
<GallerySection />
<CTASection />
```

## Note

These components are homepage-specific and not intended for reuse on other pages. For reusable components, see `$lib/components/shared/`.
