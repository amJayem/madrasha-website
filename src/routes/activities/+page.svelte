<script lang="ts">
	import { onMount } from 'svelte';
	import { activities } from '$lib/data/content';
	import { setupScrollAnimation } from '$lib/utils/scroll-animation';

	let activitiesGrid: HTMLElement;
	let ctaSection: HTMLElement;

	onMount(() => {
		if (activitiesGrid) setupScrollAnimation(activitiesGrid, { animation: 'fade' });
		if (ctaSection) setupScrollAnimation(ctaSection, { animation: 'slide-up' });
	});
</script>

<svelte:head>
	<title>Activities - Madrasha</title>
	<meta name="description" content="Explore the various educational and community activities offered at our Madrasha" />
</svelte:head>

<!-- Page Header -->
<section class="bg-linear-to-b from-primary/10 to-background page-header-spacing">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
				Our Activities
			</h1>
			<p class="mt-6 text-xl leading-relaxed text-muted-foreground">
				Discover the various programs and activities we offer to our students and community
			</p>
		</div>
	</div>
</section>

<!-- Activities Grid -->
<section bind:this={activitiesGrid} class="content-spacing">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each activities as activity, index}
				<div
					class="card-hover rounded-2xl border border-border/50 bg-card p-8 shadow-md hover:border-primary/20"
					style="animation-delay: {index * 0.1}s"
				>
					<div class="mb-6 text-5xl">{activity.icon}</div>
					<h3 class="text-2xl font-bold mb-3 text-foreground">{activity.title}</h3>
					<p class="text-muted-foreground leading-relaxed">{activity.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Additional Information -->
<section bind:this={ctaSection} class="content-spacing section-alt">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
				Interested in Learning More?
			</h2>
			<p class="text-xl text-muted-foreground mb-10 leading-relaxed">
				Contact us to learn more about our programs, schedules, and how to enroll.
			</p>
			<a
				href="/contact"
				class="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300"
			>
				Get in Touch
			</a>
		</div>
	</div>
</section>

