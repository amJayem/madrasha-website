<script lang="ts">
	import { onMount } from 'svelte';
	import { galleryImages } from '$lib/data/content';
	import { setupScrollAnimation } from '$lib/utils/scroll-animation';

	let galleryGrid: HTMLElement;

	onMount(() => {
		if (galleryGrid) setupScrollAnimation(galleryGrid, { animation: 'fade' });
	});
</script>

<svelte:head>
	<title>Gallery - Madrasha</title>
	<meta name="description" content="View photos and images from our Madrasha activities, events, and daily life" />
</svelte:head>

<!-- Page Header -->
<section class="bg-linear-to-b from-primary/10 to-background page-header-spacing">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
				Gallery
			</h1>
			<p class="mt-6 text-xl leading-relaxed text-muted-foreground">
				Take a look at our activities, events, and moments from our Madrasha
			</p>
		</div>
	</div>
</section>

<!-- Gallery Grid -->
<section bind:this={galleryGrid} class="content-spacing">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each galleryImages as image}
				<div
					class="group relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
				>
					<img
						src={image.src}
						alt={image.title}
						class="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
						loading="lazy"
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					>
						<div class="absolute bottom-0 left-0 right-0 p-6 text-white">
							<h3 class="text-xl font-bold mb-2">{image.title}</h3>
							<p class="text-sm text-white/90 leading-relaxed">{image.description}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>



