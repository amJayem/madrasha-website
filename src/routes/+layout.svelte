<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/shared/Navbar.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';
	import BackgroundPattern from '$lib/components/shared/BackgroundPattern.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<!-- Background Pattern - Change pattern prop to 'grid', 'dot-grid', 'geometric', or 'none' -->
<BackgroundPattern pattern="dot-grid" intensity="subtle" />

<div class="flex min-h-screen flex-col">
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
