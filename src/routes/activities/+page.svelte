<script lang="ts">
	import { activities } from '$lib/data/content';
</script>

<svelte:head>
	<title>Activities - Madrasha</title>
	<meta name="description" content="Explore the various educational and community activities offered at our Madrasha" />
</svelte:head>

<!-- Page Header -->
<section class="bg-linear-to-b from-primary/10 to-background py-12 sm:py-16">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Activities</h1>
			<p class="mt-4 text-lg text-muted-foreground">
				Discover the various programs and activities we offer to our students and community
			</p>
		</div>
	</div>
</section>

<!-- Activities Grid -->
<section class="py-16">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each activities as activity}
				<div class="group rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
					<div class="mb-4 text-4xl">{activity.icon}</div>
					<h3 class="text-xl font-semibold mb-2 text-foreground">{activity.title}</h3>
					<p class="text-muted-foreground leading-relaxed">{activity.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Additional Information -->
<section class="bg-muted py-16">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-foreground mb-4">
				Interested in Learning More?
			</h2>
			<p class="text-lg text-muted-foreground mb-8">
				Contact us to learn more about our programs, schedules, and how to enroll.
			</p>
			<a
				href="/contact"
				class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
			>
				Get in Touch
			</a>
		</div>
	</div>
</section>

