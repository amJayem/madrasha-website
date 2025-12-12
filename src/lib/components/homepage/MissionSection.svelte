<script lang="ts">
	import { onMount } from 'svelte';
	import { setupScrollAnimation } from '$lib/utils/scroll-animation';

	let missionSection: HTMLElement;
	let featuresSection: HTMLElement;

	onMount(() => {
		if (missionSection) setupScrollAnimation(missionSection, { animation: 'slide-up' });
		if (featuresSection) setupScrollAnimation(featuresSection, { animation: 'fade' });
	});

	const missionCards = [
		{
			icon: '📚',
			title: 'Quality Education',
			description:
				'Comprehensive curriculum covering Islamic studies, Arabic language, and modern subjects. We ensure our students receive the highest quality education that prepares them for both academic success and spiritual fulfillment.',
			gradient: 'from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-900/50',
			accent: 'teal'
		},
		{
			icon: '🤲',
			title: 'Spiritual Growth',
			description:
				'Nurturing faith and character through daily prayers, Quranic studies, and Islamic values. We guide our students on a path of spiritual development that strengthens their connection with Allah and their understanding of Islamic principles.',
			gradient: 'from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50',
			accent: 'emerald'
		},
		{
			icon: '👥',
			title: 'Community',
			description:
				'Building a strong, supportive community of students, teachers, and families. We foster an environment where everyone feels valued, respected, and part of a larger extended family united by faith and shared values.',
			gradient: 'from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-900/50',
			accent: 'teal'
		}
	];
</script>

<!-- Mission Section -->
<section bind:this={missionSection} class="section-spacing relative bg-muted/30">
	<!-- Subtle Background Pattern -->
	<div class="absolute inset-0 pattern-dot-grid opacity-20" aria-hidden="true"></div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mx-auto max-w-4xl text-center">
			<!-- Badge -->
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200/50 dark:border-teal-800/50 bg-teal-50/80 dark:bg-teal-950/30 px-4 py-2 text-sm font-semibold text-teal-700 dark:text-teal-300 shadow-sm backdrop-blur-sm"
			>
				<span class="text-base">🎯</span>
				<span>Our Commitment</span>
			</div>

			<h2
				class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
			>
				Our Mission
			</h2>

			<!-- Intro Paragraph -->
			<p
				class="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl lg:max-w-3xl mx-auto"
			>
				We provide comprehensive Islamic education combining traditional teachings with modern
				pedagogical methods. Our structured curriculum, experienced faculty, and supportive
				community develop students into confident, knowledgeable individuals ready to serve their
				communities.
			</p>
		</div>

		<!-- Mission Cards -->
		<div bind:this={featuresSection} class="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-7xl">
			<div class="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
				{#each missionCards as card}
					<div
						class="group relative overflow-hidden rounded-3xl border border-teal-100/50 dark:border-teal-900/50 bg-card/90 dark:bg-card/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-2"
					>
						<!-- Icon Container -->
						<div
							class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br {card.gradient} text-4xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
						>
							{card.icon}
						</div>

						<h3 class="mb-4 text-2xl font-bold text-foreground">{card.title}</h3>
						<p class="text-muted-foreground leading-relaxed">{card.description}</p>

						<!-- Decorative Accent -->
						<div
							class="absolute -right-6 -bottom-6 h-24 w-24 rounded-full {card.accent === 'teal'
								? 'bg-teal-100/30 dark:bg-teal-900/30'
								: 'bg-emerald-100/30 dark:bg-emerald-900/30'} blur-2xl transition-opacity duration-300 group-hover:opacity-80"
							aria-hidden="true"
						></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

