<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { activities } from '$lib/data/content';
	import { setupScrollAnimation } from '$lib/utils/scroll-animation';

	let heroSection: HTMLElement;
	let activitiesGrid: HTMLElement;
	let ctaSection: HTMLElement;

	onMount(() => {
		if (heroSection) setupScrollAnimation(heroSection, { animation: 'fade', threshold: 0.2 });
		if (activitiesGrid) setupScrollAnimation(activitiesGrid, { animation: 'fade' });
		if (ctaSection) setupScrollAnimation(ctaSection, { animation: 'slide-up' });
	});
</script>

<svelte:head>
	<title>Activities - Madrasha</title>
	<meta name="description" content="Explore the various educational and community activities offered at our Madrasha" />
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
				<span class="text-base">📚</span>
				<span>Programs & Learning</span>
			</div>

			<h1
				class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
			>
				Our Activities
			</h1>
			<p
				class="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl lg:max-w-3xl mx-auto"
			>
				Discover the comprehensive programs and activities we offer to nurture knowledge, faith, and
				character in our students and community.
			</p>
		</div>
	</div>
</section>

<!-- Activities Grid -->
<section bind:this={activitiesGrid} class="section-spacing relative">
	<!-- Subtle Background Pattern -->
	<div class="absolute inset-0 pattern-dot-grid opacity-20" aria-hidden="true"></div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each activities as activity, index}
				<div
					class="group relative overflow-hidden rounded-3xl border 
					border-teal-100/50 dark:border-teal-900/50 bg-card/90 
					dark:bg-card/70 p-8 shadow-lg shadow-black/5 backdrop-blur-sm 
					transition-all duration-300 hover:border-teal-200 
					dark:hover:border-teal-800 hover:shadow-xl hover:shadow-teal-500/20 
					 hover:-translate-y-2"
					style="animation-delay: {index * 0.1}s"
				>
					<!-- Icon Container -->
					<div
						class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-900/50 text-4xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
					>
						{activity.icon}
					</div>

					<h3 class="mb-4 text-2xl font-bold text-foreground">{activity.title}</h3>
					<p class="text-muted-foreground leading-relaxed">{activity.description}</p>

					<!-- Decorative Accent -->
					<div
						class="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-teal-100/30 dark:bg-teal-900/30 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
						aria-hidden="true"
					></div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section
	bind:this={ctaSection}
	class="relative overflow-hidden bg-linear-to-br from-teal-600 via-teal-500 to-emerald-600 dark:from-teal-700 dark:via-teal-600 dark:to-emerald-700 py-20 sm:py-28 lg:py-32"
>
	<!-- Decorative Background Elements -->
	<div class="absolute inset-0 overflow-hidden" aria-hidden="true">
		<div
			class="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
		></div>
		<div
			class="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
		></div>
	</div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h2
				class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
			>
				Interested in Learning More?
			</h2>
			<p
				class="mt-8 text-lg leading-relaxed text-teal-50 sm:text-xl md:text-2xl lg:max-w-3xl mx-auto"
			>
				Contact us to learn more about our programs, schedules, and how to enroll. We're here to
				answer your questions and help you get started on your educational journey.
			</p>
			<div class="mt-12">
				<Button
					href="/contact"
					size="lg"
					class="bg-white text-teal-600 hover:bg-teal-50 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
				>
					Get in Touch
				</Button>
			</div>
		</div>
	</div>
</section>

