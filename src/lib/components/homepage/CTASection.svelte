<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { setupScrollAnimation } from '$lib/utils/scroll-animation';

	let ctaSection: HTMLElement;

	onMount(() => {
		if (ctaSection) setupScrollAnimation(ctaSection, { animation: 'slide-up' });
	});
</script>

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

