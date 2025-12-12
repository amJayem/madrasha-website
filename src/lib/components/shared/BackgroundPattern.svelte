<script lang="ts">
	type PatternType = 'grid' | 'dot-grid' | 'geometric' | 'none';

	interface Props {
		pattern?: PatternType;
		intensity?: 'subtle' | 'medium' | 'strong';
		className?: string;
	}

	let { pattern = 'dot-grid', intensity = 'subtle', className = '' }: Props = $props();
</script>

	<div
		class="pointer-events-none fixed inset-0 -z-10 {className}"
		data-pattern={pattern}
		data-intensity={intensity}
	>
		<!-- Grid Pattern -->
		{#if pattern === 'grid'}
			<div
				class="h-full w-full pattern-grid-bg"
				style="background-size: var(--grid-size) var(--grid-size);"
			></div>
		<!-- Dot Grid Pattern -->
		{:else if pattern === 'dot-grid'}
			<div
				class="h-full w-full pattern-dot-bg"
				style="background-size: var(--dot-size) var(--dot-size);"
			></div>
		<!-- Geometric Pattern -->
		{:else if pattern === 'geometric'}
			<div class="h-full w-full pattern-geometric-bg"></div>
		{/if}
	</div>

<style>
	:global([data-pattern='grid']) {
		--grid-size: 24px;
	}

	:global([data-pattern='grid'][data-intensity='subtle']) {
		--grid-size: 32px;
	}

	:global([data-pattern='grid'][data-intensity='medium']) {
		--grid-size: 24px;
	}

	:global([data-pattern='grid'][data-intensity='strong']) {
		--grid-size: 20px;
	}

	:global([data-pattern='dot-grid']) {
		--dot-size: 24px;
	}

	:global([data-pattern='dot-grid'][data-intensity='subtle']) {
		--dot-size: 32px;
	}

	:global([data-pattern='dot-grid'][data-intensity='medium']) {
		--dot-size: 24px;
	}

	:global([data-pattern='dot-grid'][data-intensity='strong']) {
		--dot-size: 20px;
	}

	/* Grid pattern background */
	:global(.pattern-grid-bg) {
		background-image: linear-gradient(color-mix(in oklch, var(--muted-foreground) 5%, transparent) 1px, transparent 1px),
			linear-gradient(90deg, color-mix(in oklch, var(--muted-foreground) 5%, transparent) 1px, transparent 1px);
	}

	:global(.dark .pattern-grid-bg) {
		background-image: linear-gradient(color-mix(in oklch, var(--muted-foreground) 8%, transparent) 1px, transparent 1px),
			linear-gradient(90deg, color-mix(in oklch, var(--muted-foreground) 8%, transparent) 1px, transparent 1px);
	}

	:global([data-intensity='medium'] .pattern-grid-bg) {
		background-image: linear-gradient(color-mix(in oklch, var(--muted-foreground) 10%, transparent) 1px, transparent 1px),
			linear-gradient(90deg, color-mix(in oklch, var(--muted-foreground) 10%, transparent) 1px, transparent 1px);
	}

	:global(.dark [data-intensity='medium'] .pattern-grid-bg) {
		background-image: linear-gradient(color-mix(in oklch, var(--muted-foreground) 12%, transparent) 1px, transparent 1px),
			linear-gradient(90deg, color-mix(in oklch, var(--muted-foreground) 12%, transparent) 1px, transparent 1px);
	}

	:global([data-intensity='strong'] .pattern-grid-bg) {
		background-image: linear-gradient(color-mix(in oklch, var(--muted-foreground) 15%, transparent) 1px, transparent 1px),
			linear-gradient(90deg, color-mix(in oklch, var(--muted-foreground) 15%, transparent) 1px, transparent 1px);
	}

	:global(.dark [data-intensity='strong'] .pattern-grid-bg) {
		background-image: linear-gradient(color-mix(in oklch, var(--muted-foreground) 18%, transparent) 1px, transparent 1px),
			linear-gradient(90deg, color-mix(in oklch, var(--muted-foreground) 18%, transparent) 1px, transparent 1px);
	}

	/* Dot grid pattern background */
	:global(.pattern-dot-bg) {
		background-image: radial-gradient(circle, color-mix(in oklch, var(--muted-foreground) 5%, transparent) 1px, transparent 1px);
	}

	:global(.dark .pattern-dot-bg) {
		background-image: radial-gradient(circle, color-mix(in oklch, var(--muted-foreground) 8%, transparent) 1px, transparent 1px);
	}

	:global([data-intensity='medium'] .pattern-dot-bg) {
		background-image: radial-gradient(circle, color-mix(in oklch, var(--muted-foreground) 10%, transparent) 1px, transparent 1px);
	}

	:global(.dark [data-intensity='medium'] .pattern-dot-bg) {
		background-image: radial-gradient(circle, color-mix(in oklch, var(--muted-foreground) 12%, transparent) 1px, transparent 1px);
	}

	:global([data-intensity='strong'] .pattern-dot-bg) {
		background-image: radial-gradient(circle, color-mix(in oklch, var(--muted-foreground) 15%, transparent) 1px, transparent 1px);
	}

	:global(.dark [data-intensity='strong'] .pattern-dot-bg) {
		background-image: radial-gradient(circle, color-mix(in oklch, var(--muted-foreground) 18%, transparent) 1px, transparent 1px);
	}

	/* Geometric pattern background */
	:global(.pattern-geometric-bg) {
		background-image: repeating-linear-gradient(
				0deg,
				transparent,
				transparent 2px,
				color-mix(in oklch, var(--muted-foreground) 4%, transparent) 2px,
				color-mix(in oklch, var(--muted-foreground) 4%, transparent) 4px
			),
			repeating-linear-gradient(
				90deg,
				transparent,
				transparent 2px,
				color-mix(in oklch, var(--muted-foreground) 4%, transparent) 2px,
				color-mix(in oklch, var(--muted-foreground) 4%, transparent) 4px
			),
			repeating-linear-gradient(
				45deg,
				transparent,
				transparent 1px,
				color-mix(in oklch, var(--muted-foreground) 4%, transparent) 1px,
				color-mix(in oklch, var(--muted-foreground) 4%, transparent) 2px
			);
		background-size: 40px 40px, 40px 40px, 20px 20px;
	}

	:global(.dark .pattern-geometric-bg) {
		background-image: repeating-linear-gradient(
				0deg,
				transparent,
				transparent 2px,
				color-mix(in oklch, var(--muted-foreground) 6%, transparent) 2px,
				color-mix(in oklch, var(--muted-foreground) 6%, transparent) 4px
			),
			repeating-linear-gradient(
				90deg,
				transparent,
				transparent 2px,
				color-mix(in oklch, var(--muted-foreground) 6%, transparent) 2px,
				color-mix(in oklch, var(--muted-foreground) 6%, transparent) 4px
			),
			repeating-linear-gradient(
				45deg,
				transparent,
				transparent 1px,
				color-mix(in oklch, var(--muted-foreground) 6%, transparent) 1px,
				color-mix(in oklch, var(--muted-foreground) 6%, transparent) 2px
			);
	}

	:global([data-intensity='medium'] .pattern-geometric-bg) {
		background-image: repeating-linear-gradient(
				0deg,
				transparent,
				transparent 2px,
				color-mix(in oklch, var(--muted-foreground) 8%, transparent) 2px,
				color-mix(in oklch, var(--muted-foreground) 8%, transparent) 4px
			),
			repeating-linear-gradient(
				90deg,
				transparent,
				transparent 2px,
				color-mix(in oklch, var(--muted-foreground) 8%, transparent) 2px,
				color-mix(in oklch, var(--muted-foreground) 8%, transparent) 4px
			),
			repeating-linear-gradient(
				45deg,
				transparent,
				transparent 1px,
				color-mix(in oklch, var(--muted-foreground) 8%, transparent) 1px,
				color-mix(in oklch, var(--muted-foreground) 8%, transparent) 2px
			);
	}

	:global(.dark [data-intensity='medium'] .pattern-geometric-bg) {
		background-image: repeating-linear-gradient(
				0deg,
				transparent,
				transparent 2px,
				color-mix(in oklch, var(--muted-foreground) 10%, transparent) 2px,
				color-mix(in oklch, var(--muted-foreground) 10%, transparent) 4px
			),
			repeating-linear-gradient(
				90deg,
				transparent,
				transparent 2px,
				color-mix(in oklch, var(--muted-foreground) 10%, transparent) 2px,
				color-mix(in oklch, var(--muted-foreground) 10%, transparent) 4px
			),
			repeating-linear-gradient(
				45deg,
				transparent,
				transparent 1px,
				color-mix(in oklch, var(--muted-foreground) 10%, transparent) 1px,
				color-mix(in oklch, var(--muted-foreground) 10%, transparent) 2px
			);
	}

	:global([data-intensity='strong'] .pattern-geometric-bg) {
		background-image: repeating-linear-gradient(
				0deg,
				transparent,
				transparent 2px,
				color-mix(in oklch, var(--muted-foreground) 12%, transparent) 2px,
				color-mix(in oklch, var(--muted-foreground) 12%, transparent) 4px
			),
			repeating-linear-gradient(
				90deg,
				transparent,
				transparent 2px,
				color-mix(in oklch, var(--muted-foreground) 12%, transparent) 2px,
				color-mix(in oklch, var(--muted-foreground) 12%, transparent) 4px
			),
			repeating-linear-gradient(
				45deg,
				transparent,
				transparent 1px,
				color-mix(in oklch, var(--muted-foreground) 12%, transparent) 1px,
				color-mix(in oklch, var(--muted-foreground) 12%, transparent) 2px
			);
	}

	:global(.dark [data-intensity='strong'] .pattern-geometric-bg) {
		background-image: repeating-linear-gradient(
				0deg,
				transparent,
				transparent 2px,
				color-mix(in oklch, var(--muted-foreground) 15%, transparent) 2px,
				color-mix(in oklch, var(--muted-foreground) 15%, transparent) 4px
			),
			repeating-linear-gradient(
				90deg,
				transparent,
				transparent 2px,
				color-mix(in oklch, var(--muted-foreground) 15%, transparent) 2px,
				color-mix(in oklch, var(--muted-foreground) 15%, transparent) 4px
			),
			repeating-linear-gradient(
				45deg,
				transparent,
				transparent 1px,
				color-mix(in oklch, var(--muted-foreground) 15%, transparent) 1px,
				color-mix(in oklch, var(--muted-foreground) 15%, transparent) 2px
			);
	}
</style>

