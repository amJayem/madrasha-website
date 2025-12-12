<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { galleryImages } from '$lib/data/content';
	import { setupScrollAnimation } from '$lib/utils/scroll-animation';

	let gallerySection: HTMLElement;

	onMount(() => {
		if (gallerySection) setupScrollAnimation(gallerySection, { animation: 'slide-up' });
	});
</script>

<!-- Gallery Section -->
<section bind:this={gallerySection} class="section-spacing relative bg-muted/30">
	<!-- Subtle Background Pattern -->
	<div class="absolute inset-0 pattern-grid opacity-15" aria-hidden="true"></div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mx-auto max-w-4xl text-center">
			<!-- Badge -->
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200/50 dark:border-teal-800/50 bg-teal-50/80 dark:bg-teal-950/30 px-4 py-2 text-sm font-semibold text-teal-700 dark:text-teal-300 shadow-sm backdrop-blur-sm"
			>
				<span class="text-base">📸</span>
				<span>Moments & Memories</span>
			</div>

			<h2
				class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
			>
				Our Gallery
			</h2>
			<p
				class="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl lg:max-w-3xl mx-auto"
			>
				Explore the vibrant life of our Madrasha through these captured moments of learning,
				growth, and community.
			</p>
		</div>

		<!-- Gallery Grid -->
		<div class="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-7xl">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each galleryImages.slice(0, 6) as image}
					<a
						href="/gallery"
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
					</a>
				{/each}
			</div>

			<!-- View More Button -->
			<div class="mt-12 text-center">
				<Button
					href="/gallery"
					variant="outline"
					size="lg"
					class="border-2 border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/30 hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-300"
				>
					View Full Gallery
				</Button>
			</div>
		</div>
	</div>
</section>

