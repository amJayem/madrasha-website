<script lang="ts">
	import HeroSection from '$lib/components/homepage/HeroSection.svelte';
	import StatsSection from '$lib/components/homepage/StatsSection.svelte';
	import MissionSection from '$lib/components/homepage/MissionSection.svelte';
	import GallerySection from '$lib/components/homepage/GallerySection.svelte';
	import CTASection from '$lib/components/homepage/CTASection.svelte';
</script>

<svelte:head>
	<title>Home - Madrasha</title>
	<meta name="description" content="Welcome to our Madrasha - A center for Islamic education and learning" />
</svelte:head>

<HeroSection />
<StatsSection />
<MissionSection />
<GallerySection />
<CTASection />
