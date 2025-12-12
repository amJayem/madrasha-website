<script lang="ts">
	import { onMount } from 'svelte';
	import { galleryImages } from '$lib/data/content';
	import { setupScrollAnimation } from '$lib/utils/scroll-animation';

	let heroSection: HTMLElement;
	let galleryGrid: HTMLElement;

	onMount(() => {
		if (heroSection) setupScrollAnimation(heroSection, { animation: 'fade', threshold: 0.2 });
		if (galleryGrid) setupScrollAnimation(galleryGrid, { animation: 'fade' });
	});
</script>

<svelte:head>
	<title>Gallery - Madrasha</title>
	<meta name="description" content="View photos and images from our Madrasha activities, events, and daily life" />
</svelte:head>

<!-- Page Header -->
<section
	bind:this={heroSection}
	class="relative overflow-hidden bg-linear-to-br from-background via-teal-50/30 to-emerald-50/20 dark:from-background dark:via-teal-950/10 dark:to-emerald-950/5 py-20 sm:py-28 lg:py-32"
>
	<!-- Subtle Background Pattern -->
	<div class="absolute inset-0 pattern-geometric opacity-30" aria-hidden="true"></div>

	<!-- Decorative Background Elements -->
	<div class="absolute inset-0 overflow-hidden" aria-hidden="true">
		<div
			class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-200/20 dark:bg-teal-900/20 blur-3xl"
		></div>
		<div
			class="absolute bottom-20 left-1/4 h-64 w-64 rounded-full bg-emerald-200/15 dark:bg-emerald-900/15 blur-3xl"
		></div>
	</div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<!-- Badge -->
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200/50 dark:border-teal-800/50 bg-teal-50/80 dark:bg-teal-950/30 px-4 py-2 text-sm font-semibold text-teal-700 dark:text-teal-300 shadow-sm backdrop-blur-sm"
			>
				<span class="text-base">📸</span>
				<span>Moments & Memories</span>
			</div>

			<h1
				class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
			>
				Gallery
			</h1>
			<p
				class="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl lg:max-w-3xl mx-auto"
			>
				Take a look at our activities, events, and moments from our Madrasha. Explore the vibrant
				life of our community through these captured memories.
			</p>
		</div>
	</div>
</section>

<!-- Gallery Grid -->
<section bind:this={galleryGrid} class="section-spacing relative">
	<!-- Subtle Background Pattern -->
	<div class="absolute inset-0 pattern-grid opacity-20" aria-hidden="true"></div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each galleryImages as image}
				<div
					class="group relative overflow-hidden rounded-3xl bg-card shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-1"
				>
					<!-- Image Container -->
					<div class="relative aspect-4/3 overflow-hidden rounded-t-3xl">
						<img
							src={image.src}
							alt={image.title}
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							loading="lazy"
						/>
						<!-- Overlay Gradient -->
						<div
							class="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						></div>
					</div>

					<!-- Caption Card -->
					<div
						class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-5 text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4"
					>
						<h3 class="text-xl font-bold">{image.title}</h3>
						<p class="mt-2 text-sm text-white/90 leading-relaxed">{image.description}</p>
					</div>

					<!-- Decorative Border -->
					<div
						class="absolute inset-0 rounded-3xl border-2 border-teal-200/0 transition-colors duration-500 group-hover:border-teal-300/60 dark:group-hover:border-teal-700/60"
					></div>
				</div>
			{/each}
		</div>
	</div>
</section>



