<script lang="ts">
	import { onMount } from 'svelte';
	import { heroStats } from '$lib/data/content';
	import { setupScrollAnimation } from '$lib/utils/scroll-animation';

	let statsSection: HTMLElement;

	onMount(() => {
		if (statsSection) setupScrollAnimation(statsSection, { animation: 'slide-up', threshold: 0.1 });
	});

	const stats = [
		{ value: heroStats.students, label: 'Active Students', accent: 'teal' },
		{ value: heroStats.programs, label: 'Programs Offered', accent: 'emerald' },
		{ value: heroStats.years, label: 'Years Serving Community', accent: 'teal' },
		{ value: '100%', label: 'Satisfaction Rate', accent: 'emerald' }
	];
</script>

<!-- Stats Section -->
<section
	bind:this={statsSection}
	class="relative -mt-12 mb-12 sm:-mt-16 sm:mb-16 lg:-mt-20 lg:mb-20"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each stats as stat}
				<div
					class="group relative overflow-hidden rounded-2xl border border-teal-100/50 dark:border-teal-900/50 bg-card/80 dark:bg-card/60 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1"
				>
					<div class="text-3xl font-bold text-teal-600 dark:text-teal-400">{stat.value}</div>
					<div class="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</div>
					<!-- Decorative accent -->
					<div
						class="absolute -right-4 -top-4 h-16 w-16 rounded-full {stat.accent === 'teal'
							? 'bg-teal-100/30 dark:bg-teal-900/30'
							: 'bg-emerald-100/30 dark:bg-emerald-900/30'} blur-xl"
						aria-hidden="true"
					></div>
				</div>
			{/each}
		</div>
	</div>
</section>

