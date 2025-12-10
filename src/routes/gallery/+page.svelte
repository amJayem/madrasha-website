<script lang="ts">
	import { galleryImages } from '$lib/data/content';
</script>

<svelte:head>
	<title>Gallery - Madrasha</title>
	<meta name="description" content="View photos and images from our Madrasha activities, events, and daily life" />
</svelte:head>

<!-- Page Header -->
<section class="bg-linear-to-b from-primary/10 to-background py-12 sm:py-16">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Gallery</h1>
			<p class="mt-4 text-lg text-muted-foreground">
				Take a look at our activities, events, and moments from our Madrasha
			</p>
		</div>
	</div>
</section>

<!-- Gallery Grid -->
<section class="py-16">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each galleryImages as image}
				<div class="group relative overflow-hidden rounded-lg border bg-card shadow-sm">
					<img
						src={image.src}
						alt={image.title}
						class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
						loading="lazy"
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					>
						<div class="absolute bottom-0 left-0 right-0 p-4 text-white">
							<h3 class="font-semibold mb-1">{image.title}</h3>
							<p class="text-sm text-white/90">{image.description}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>



