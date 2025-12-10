<script lang="ts">
	// Gallery images - you can replace these with actual image paths
	// For now, using placeholder structure that you can easily update
	const galleryImages = [
		{
			id: 1,
			title: 'Classroom Learning',
			description: 'Students engaged in Quranic studies',
			// Replace with actual image path: src: '/images/gallery/image1.jpg'
			src: 'https://via.placeholder.com/400x300?text=Classroom+Learning'
		},
		{
			id: 2,
			title: 'Prayer Time',
			description: 'Congregational prayers',
			src: 'https://via.placeholder.com/400x300?text=Prayer+Time'
		},
		{
			id: 3,
			title: 'Arabic Class',
			description: 'Learning Arabic language',
			src: 'https://via.placeholder.com/400x300?text=Arabic+Class'
		},
		{
			id: 4,
			title: 'Community Event',
			description: 'Community gathering and celebration',
			src: 'https://via.placeholder.com/400x300?text=Community+Event'
		},
		{
			id: 5,
			title: 'Student Activities',
			description: 'Students participating in activities',
			src: 'https://via.placeholder.com/400x300?text=Student+Activities'
		},
		{
			id: 6,
			title: 'Graduation',
			description: 'Graduation ceremony',
			src: 'https://via.placeholder.com/400x300?text=Graduation'
		}
	];
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

<!-- Note for adding images -->
<section class="bg-muted py-8">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center text-sm text-muted-foreground">
			<p>
				<strong>Note:</strong> Replace the placeholder images with your actual photos. Add images to
				the <code class="bg-background px-2 py-1 rounded">static/images/gallery/</code> folder and
				update the <code class="bg-background px-2 py-1 rounded">src</code> paths in the gallery
				array.
			</p>
		</div>
	</div>
</section>

