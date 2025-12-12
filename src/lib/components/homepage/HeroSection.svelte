<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { assets } from '$lib/data/content';
	import { setupScrollAnimation } from '$lib/utils/scroll-animation';

	let heroSection: HTMLElement;

	onMount(() => {
		if (heroSection) setupScrollAnimation(heroSection, { animation: 'fade', threshold: 0.2 });
	});
</script>

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
			<div class="relative text-center lg:text-left">
				<!-- Background Panel for Text Contrast -->
				<div
					class="absolute -inset-4 rounded-3xl bg-white/70 dark:bg-background/70 backdrop-blur-sm -z-10"
					aria-hidden="true"
				></div>

				<div class="relative">
					<!-- Badge Above Headline -->
					<div
						class="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200/50 dark:border-teal-800/50 bg-teal-50/90 dark:bg-teal-950/40 px-4 py-2 text-sm font-semibold text-teal-700 dark:text-teal-300 shadow-sm backdrop-blur-sm"
					>
						<span class="text-base">🕌</span>
						<span>Quality Islamic Education</span>
					</div>

					<!-- Main Heading -->
					<h1
						class="text-4xl font-bold tracking-tight text-gray-900 dark:text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
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
						class="mt-6 text-lg leading-relaxed text-gray-700 dark:text-muted-foreground sm:text-xl md:text-2xl lg:max-w-2xl font-medium"
					>
						Islamic Education for Children & Youth. Empowering minds, enriching souls. Where faith
						meets knowledge, and tradition inspires excellence.
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

