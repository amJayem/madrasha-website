<script lang="ts">
	import { onMount } from 'svelte';
	import { setupScrollAnimation } from '$lib/utils/scroll-animation';

	let heroSection: HTMLElement;
	let missionSection: HTMLElement;
	let visionSection: HTMLElement;
	let valuesSection: HTMLElement;
	let historySection: HTMLElement;

	const values = [
		{
			icon: '⭐',
			title: 'Excellence',
			description: 'Striving for the highest standards in education and character development'
		},
		{
			icon: '🤝',
			title: 'Respect',
			description: 'Treating all members of our community with dignity and kindness'
		},
		{
			icon: '💎',
			title: 'Integrity',
			description: 'Upholding honesty and ethical behavior in all our actions'
		},
		{
			icon: '👥',
			title: 'Community',
			description: 'Building strong bonds and supporting one another'
		},
		{
			icon: '🌱',
			title: 'Service',
			description: 'Contributing positively to our community and society'
		}
	];

	onMount(() => {
		if (heroSection) setupScrollAnimation(heroSection, { animation: 'fade', threshold: 0.2 });
		if (missionSection) setupScrollAnimation(missionSection, { animation: 'slide-up' });
		if (visionSection) setupScrollAnimation(visionSection, { animation: 'slide-up' });
		if (valuesSection) setupScrollAnimation(valuesSection, { animation: 'slide-up' });
		if (historySection) setupScrollAnimation(historySection, { animation: 'slide-up' });
	});
</script>

<svelte:head>
	<title>About Us - Madrasha</title>
	<meta name="description" content="Learn about our Madrasha, our mission, vision, and commitment to Islamic education" />
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
				<span class="text-base">📖</span>
				<span>Our Story</span>
			</div>

			<h1
				class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
			>
				About Us
			</h1>
			<p
				class="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl lg:max-w-3xl mx-auto"
			>
				Learn more about our mission, values, and commitment to providing exceptional Islamic
				education that shapes future generations.
			</p>
		</div>
	</div>
</section>

<!-- Mission Section -->
<section bind:this={missionSection} class="section-spacing relative">
	<div class="absolute inset-0 pattern-dot-grid opacity-20" aria-hidden="true"></div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-5xl">
			<div
				class="group relative overflow-hidden rounded-3xl border border-teal-100/50 dark:border-teal-900/50 bg-card/90 dark:bg-card/70 p-10 sm:p-12 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-xl hover:shadow-teal-500/10"
			>
				<!-- Icon Container -->
				<div
					class="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-900/50 text-5xl shadow-md"
				>
					🎯
				</div>

				<h2 class="mb-6 text-4xl font-bold text-foreground sm:text-5xl">Our Mission</h2>
				<p class="text-lg leading-relaxed text-muted-foreground sm:text-xl">
					Our Madrasha is dedicated to providing comprehensive Islamic education that combines
					traditional Islamic knowledge with modern educational methods. We aim to nurture
					students who are not only knowledgeable but also possess strong moral character and
					spiritual awareness, preparing them to be positive contributors to society.
				</p>

				<!-- Decorative Accent -->
				<div
					class="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-teal-100/30 dark:bg-teal-900/30 blur-2xl"
					aria-hidden="true"
				></div>
			</div>
		</div>
	</div>
</section>

<!-- Vision Section -->
<section bind:this={visionSection} class="section-spacing relative section-alt">
	<div class="absolute inset-0 pattern-grid opacity-15" aria-hidden="true"></div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-5xl">
			<div
				class="group relative overflow-hidden rounded-3xl border border-teal-100/50 dark:border-teal-900/50 bg-card/90 dark:bg-card/70 p-10 sm:p-12 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-xl hover:shadow-teal-500/10"
			>
				<!-- Icon Container -->
				<div
					class="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 text-5xl shadow-md"
				>
					👁️
				</div>

				<h2 class="mb-6 text-4xl font-bold text-foreground sm:text-5xl">Our Vision</h2>
				<p class="text-lg leading-relaxed text-muted-foreground sm:text-xl">
					To be a leading institution in Islamic education, recognized for excellence in teaching,
					character development, and community service. We envision a future where our students
					become positive contributors to society, guided by Islamic principles and values, while
					embracing the opportunities and challenges of the modern world.
				</p>

				<!-- Decorative Accent -->
				<div
					class="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-emerald-100/30 dark:bg-emerald-900/30 blur-2xl"
					aria-hidden="true"
				></div>
			</div>
		</div>
	</div>
</section>

<!-- Values Section -->
<section bind:this={valuesSection} class="section-spacing relative">
	<div class="absolute inset-0 pattern-dot-grid opacity-20" aria-hidden="true"></div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mx-auto max-w-4xl text-center mb-16">
			<!-- Badge -->
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200/50 dark:border-teal-800/50 bg-teal-50/80 dark:bg-teal-950/30 px-4 py-2 text-sm font-semibold text-teal-700 dark:text-teal-300 shadow-sm backdrop-blur-sm"
			>
				<span class="text-base">💎</span>
				<span>What We Stand For</span>
			</div>

			<h2 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
				Our Values
			</h2>
			<p
				class="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl lg:max-w-3xl mx-auto"
			>
				The core principles that guide everything we do and shape the character of our community.
			</p>
		</div>

		<!-- Values Grid -->
		<div class="mx-auto max-w-7xl">
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each values as value}
					<div
						class="group relative overflow-hidden rounded-3xl border border-teal-100/50 dark:border-teal-900/50 bg-card/90 dark:bg-card/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-2"
					>
						<!-- Icon Container -->
						<div
							class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-900/50 text-4xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
						>
							{value.icon}
						</div>

						<h3 class="mb-4 text-2xl font-bold text-foreground">{value.title}</h3>
						<p class="text-muted-foreground leading-relaxed">{value.description}</p>

						<!-- Decorative Accent -->
						<div
							class="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-teal-100/30 dark:bg-teal-900/30 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
							aria-hidden="true"
						></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- History Section -->
<section bind:this={historySection} class="section-spacing relative section-alt">
	<div class="absolute inset-0 pattern-grid opacity-15" aria-hidden="true"></div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-5xl">
			<div
				class="group relative overflow-hidden rounded-3xl border border-teal-100/50 dark:border-teal-900/50 bg-card/90 dark:bg-card/70 p-10 sm:p-12 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-xl hover:shadow-teal-500/10"
			>
				<!-- Icon Container -->
				<div
					class="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-900/50 text-5xl shadow-md"
				>
					📜
				</div>

				<h2 class="mb-6 text-4xl font-bold text-foreground sm:text-5xl">Our History</h2>
				<p class="text-lg leading-relaxed text-muted-foreground sm:text-xl">
					Founded with a vision to provide quality Islamic education, our Madrasha has been
					serving the community for years. We have grown from humble beginnings to become a
					recognized institution committed to nurturing young minds and hearts. Through dedication
					and the support of our community, we continue to expand our programs and impact,
					ensuring that Islamic education remains accessible and relevant for future generations.
				</p>

				<!-- Decorative Accent -->
				<div
					class="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-teal-100/30 dark:bg-teal-900/30 blur-2xl"
					aria-hidden="true"
				></div>
			</div>
		</div>
	</div>
</section>

