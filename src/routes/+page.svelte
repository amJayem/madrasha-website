<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { assets, heroStats, galleryImages } from '$lib/data/content';
	import { setupScrollAnimation } from '$lib/utils/scroll-animation';

	let heroSection: HTMLElement;
	let statsSection: HTMLElement;
	let missionSection: HTMLElement;
	let featuresSection: HTMLElement;
	let gallerySection: HTMLElement;
	let ctaSection: HTMLElement;

	onMount(() => {
		if (heroSection) setupScrollAnimation(heroSection, { animation: 'fade', threshold: 0.2 });
		if (statsSection) setupScrollAnimation(statsSection, { animation: 'slide-up', threshold: 0.1 });
		if (missionSection) setupScrollAnimation(missionSection, { animation: 'slide-up' });
		if (featuresSection) setupScrollAnimation(featuresSection, { animation: 'fade' });
		if (gallerySection) setupScrollAnimation(gallerySection, { animation: 'slide-up' });
		if (ctaSection) setupScrollAnimation(ctaSection, { animation: 'slide-up' });
	});
</script>

<svelte:head>
	<title>Home - Madrasha</title>
	<meta name="description" content="Welcome to our Madrasha - A center for Islamic education and learning" />
</svelte:head>

<!-- Hero Section -->
<section
	bind:this={heroSection}
	class="relative overflow-hidden bg-linear-to-br from-background via-teal-50/30 to-emerald-50/20 dark:from-background dark:via-teal-950/10 dark:to-emerald-950/5 py-20 sm:py-28 lg:py-36"
>
	<!-- Subtle Background Pattern -->
	<div class="absolute inset-0 pattern-geometric opacity-40" aria-hidden="true"></div>

	<!-- Decorative Background Elements -->
	<div class="absolute inset-0 overflow-hidden" aria-hidden="true">
		<!-- Large Circle -->
		<div
			class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-200/20 dark:bg-teal-900/20 blur-3xl"
		></div>
		<!-- Medium Circle -->
		<div
			class="absolute top-1/2 -left-20 h-64 w-64 rounded-full bg-emerald-200/15 dark:bg-emerald-900/15 blur-3xl"
		></div>
		<!-- Small Circle -->
		<div
			class="absolute bottom-20 right-1/4 h-40 w-40 rounded-full bg-teal-300/20 dark:bg-teal-800/20 blur-2xl"
		></div>
	</div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20">
			<!-- Left Column: Text Content -->
			<div class="text-center lg:text-left">
				<!-- Badge Above Headline -->
				<div
					class="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200/50 dark:border-teal-800/50 bg-teal-50/80 dark:bg-teal-950/30 px-4 py-2 text-sm font-semibold text-teal-700 dark:text-teal-300 shadow-sm backdrop-blur-sm"
				>
					<span class="text-base">🕌</span>
					<span>Quality Islamic Education</span>
				</div>

				<!-- Main Heading -->
				<h1
					class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
				>
					Welcome to Our
					<span
						class="block bg-linear-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent"
					>
						Madrasha
					</span>
				</h1>

				<!-- Subheading -->
				<p
					class="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl lg:max-w-2xl"
				>
					Empowering minds, enriching souls. Where faith meets knowledge, and tradition inspires
					excellence for generations to come.
				</p>

				<!-- CTA Buttons -->
				<div
					class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
				>
					<Button
						href="/about"
						size="lg"
						class="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300"
					>
						Learn More
					</Button>
					<Button
						href="/contact"
						variant="outline"
						size="lg"
						class="w-full sm:w-auto border-2 border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/30 hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-300"
					>
						Contact Us
					</Button>
				</div>
			</div>

			<!-- Right Column: Image/Pattern -->
			<div class="relative flex items-center justify-center lg:justify-end">
				<!-- Decorative Frame -->
				<div class="relative w-full max-w-lg">
					<!-- Main Image Container -->
					<div
						class="relative h-[400px] w-full overflow-hidden rounded-3xl bg-linear-to-br from-teal-100/50 to-emerald-100/50 dark:from-teal-900/30 dark:to-emerald-900/30 shadow-2xl shadow-teal-500/10 sm:h-[500px] lg:h-[600px] xl:h-[650px]"
					>
						<!-- Hero Image -->
						<img
							src={assets.hero.primary}
							alt="Madrasha - Islamic Education Center"
							class="h-full w-full object-cover"
							loading="eager"
						/>

						<!-- Overlay Gradient -->
						<div
							class="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent"
						></div>

						<!-- Decorative Border Glow -->
						<div
							class="absolute inset-0 rounded-3xl border-2 border-teal-200/30 dark:border-teal-800/30"
						></div>
					</div>

					<!-- Decorative Accent Elements -->
					<div
						class="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-teal-300/30 dark:bg-teal-700/30 blur-2xl"
						aria-hidden="true"
					></div>
					<div
						class="absolute -top-4 -left-4 h-28 w-28 rounded-full bg-emerald-300/20 dark:bg-emerald-700/20 blur-3xl"
						aria-hidden="true"
					></div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Stats Section -->
<section
	bind:this={statsSection}
	class="relative -mt-12 mb-12 sm:-mt-16 sm:mb-16 lg:-mt-20 lg:mb-20"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Stat Card 1 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-teal-100/50 dark:border-teal-900/50 bg-card/80 dark:bg-card/60 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1"
			>
				<div class="text-3xl font-bold text-teal-600 dark:text-teal-400">{heroStats.students}</div>
				<div class="mt-2 text-sm font-medium text-muted-foreground">Active Students</div>
				<!-- Decorative accent -->
				<div
					class="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-teal-100/30 dark:bg-teal-900/30 blur-xl"
					aria-hidden="true"
				></div>
			</div>

			<!-- Stat Card 2 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-teal-100/50 dark:border-teal-900/50 bg-card/80 dark:bg-card/60 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1"
			>
				<div class="text-3xl font-bold text-teal-600 dark:text-teal-400">{heroStats.programs}</div>
				<div class="mt-2 text-sm font-medium text-muted-foreground">Programs Offered</div>
				<!-- Decorative accent -->
				<div
					class="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-emerald-100/30 dark:bg-emerald-900/30 blur-xl"
					aria-hidden="true"
				></div>
			</div>

			<!-- Stat Card 3 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-teal-100/50 dark:border-teal-900/50 bg-card/80 dark:bg-card/60 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1"
			>
				<div class="text-3xl font-bold text-teal-600 dark:text-teal-400">{heroStats.years}</div>
				<div class="mt-2 text-sm font-medium text-muted-foreground">Years of Excellence</div>
				<!-- Decorative accent -->
				<div
					class="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-teal-100/30 dark:bg-teal-900/30 blur-xl"
					aria-hidden="true"
				></div>
			</div>

			<!-- Stat Card 4 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-teal-100/50 dark:border-teal-900/50 bg-card/80 dark:bg-card/60 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1"
			>
				<div class="text-3xl font-bold text-teal-600 dark:text-teal-400">100%</div>
				<div class="mt-2 text-sm font-medium text-muted-foreground">Satisfaction Rate</div>
				<!-- Decorative accent -->
				<div
					class="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-emerald-100/30 dark:bg-emerald-900/30 blur-xl"
					aria-hidden="true"
				></div>
			</div>
		</div>
	</div>
</section>

<!-- Mission Section -->
<section bind:this={missionSection} class="section-spacing relative">
	<!-- Subtle Background Pattern -->
	<div class="absolute inset-0 pattern-dot-grid opacity-30" aria-hidden="true"></div>

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
				class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
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
				<!-- Mission Card 1: Quality Education -->
				<div
					class="group relative overflow-hidden rounded-3xl border border-teal-100/50 dark:border-teal-900/50 bg-card/90 dark:bg-card/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-2"
				>
					<!-- Icon Container -->
					<div
						class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-900/50 text-4xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
					>
						📚
					</div>

					<h3 class="mb-4 text-2xl font-bold text-foreground">Quality Education</h3>
					<p class="text-muted-foreground leading-relaxed">
						Comprehensive curriculum covering Islamic studies, Arabic language, and modern
						subjects. We ensure our students receive the highest quality education that prepares
						them for both academic success and spiritual fulfillment.
					</p>

					<!-- Decorative Accent -->
					<div
						class="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-teal-100/30 dark:bg-teal-900/30 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
						aria-hidden="true"
					></div>
				</div>

				<!-- Mission Card 2: Spiritual Growth -->
				<div
					class="group relative overflow-hidden rounded-3xl border border-teal-100/50 dark:border-teal-900/50 bg-card/90 dark:bg-card/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-2"
				>
					<!-- Icon Container -->
					<div
						class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 text-4xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
					>
						🤲
					</div>

					<h3 class="mb-4 text-2xl font-bold text-foreground">Spiritual Growth</h3>
					<p class="text-muted-foreground leading-relaxed">
						Nurturing faith and character through daily prayers, Quranic studies, and Islamic
						values. We guide our students on a path of spiritual development that strengthens
						their connection with Allah and their understanding of Islamic principles.
					</p>

					<!-- Decorative Accent -->
					<div
						class="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-emerald-100/30 dark:bg-emerald-900/30 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
						aria-hidden="true"
					></div>
				</div>

				<!-- Mission Card 3: Community -->
				<div
					class="group relative overflow-hidden rounded-3xl border border-teal-100/50 dark:border-teal-900/50 bg-card/90 dark:bg-card/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-2"
				>
					<!-- Icon Container -->
					<div
						class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-900/50 text-4xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
					>
						👥
					</div>

					<h3 class="mb-4 text-2xl font-bold text-foreground">Community</h3>
					<p class="text-muted-foreground leading-relaxed">
						Building a strong, supportive community of students, teachers, and families. We
						foster an environment where everyone feels valued, respected, and part of a larger
						extended family united by faith and shared values.
					</p>

					<!-- Decorative Accent -->
					<div
						class="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-teal-100/30 dark:bg-teal-900/30 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
						aria-hidden="true"
					></div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Gallery Section -->
<section bind:this={gallerySection} class="section-spacing relative">
	<!-- Subtle Background Pattern -->
	<div class="absolute inset-0 pattern-grid opacity-20" aria-hidden="true"></div>

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

						<!-- Hover Indicator -->
						<div
							class="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 flex items-center justify-center"
						>
							<span class="text-white text-lg">👁️</span>
						</div>
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

<!-- Call to Action -->
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
				Join Our Community Today
			</h2>
			<p
				class="mt-8 text-lg leading-relaxed text-teal-50 sm:text-xl md:text-2xl lg:max-w-3xl mx-auto"
			>
				Discover our programs and activities. We welcome students and families who share our
				commitment to Islamic education and spiritual growth. Start your journey with us today.
			</p>
			<div class="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
				<Button
					href="/activities"
					size="lg"
					class="w-full sm:w-auto bg-white text-teal-600 hover:bg-teal-50 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
				>
					View Activities
				</Button>
				<Button
					href="/contact"
					variant="outline"
					size="lg"
					class="w-full sm:w-auto border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white transition-all duration-300 font-semibold"
				>
					Contact Us
				</Button>
			</div>
		</div>
	</div>
</section>
