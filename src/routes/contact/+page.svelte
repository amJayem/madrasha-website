<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { contactInfo } from '$lib/data/content';
	import { setupScrollAnimation } from '$lib/utils/scroll-animation';

	let heroSection: HTMLElement;
	let contactSection: HTMLElement;

	onMount(() => {
		if (heroSection) setupScrollAnimation(heroSection, { animation: 'fade', threshold: 0.2 });
		if (contactSection) setupScrollAnimation(contactSection, { animation: 'slide-up' });
	});

	let formData = $state({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});

	let isSubmitting = $state(false);
	let submitMessage = $state<{ type: 'success' | 'error'; text: string } | null>(null);

	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;
		submitMessage = null;

		// Simulate form submission
		// In a real application, you would send this to your backend API
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

			// Reset form
			formData = {
				name: '',
				email: '',
				phone: '',
				subject: '',
				message: ''
			};

			submitMessage = {
				type: 'success',
				text: 'Thank you for your message! We will get back to you soon.'
			};
		} catch (error) {
			submitMessage = {
				type: 'error',
				text: 'Something went wrong. Please try again later.'
			};
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<title>Contact Us - Madrasha</title>
	<meta name="description" content="Get in touch with our Madrasha. We're here to answer your questions and help you learn more" />
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
				<span class="text-base">📧</span>
				<span>Get in Touch</span>
			</div>

			<h1
				class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
			>
				Contact Us
			</h1>
			<p
				class="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl lg:max-w-3xl mx-auto"
			>
				We'd love to hear from you. Send us a message and we'll respond as soon as possible.
			</p>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section bind:this={contactSection} class="section-spacing relative">
	<!-- Subtle Background Pattern -->
	<div class="absolute inset-0 pattern-dot-grid opacity-20" aria-hidden="true"></div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-6xl">
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
				<!-- Contact Information -->
				<div
					class="group relative overflow-hidden rounded-3xl border border-teal-100/50 dark:border-teal-900/50 bg-card/90 dark:bg-card/70 p-8 sm:p-10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-xl hover:shadow-teal-500/10"
				>
					<!-- Icon Container -->
					<div
						class="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-900/50 text-4xl shadow-md"
					>
						📍
					</div>

					<h2 class="mb-8 text-3xl font-bold text-foreground sm:text-4xl">Get in Touch</h2>
					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<span class="mt-1 text-2xl text-teal-600 dark:text-teal-400">🏠</span>
							<div>
								<h3 class="mb-2 font-semibold text-foreground">Address</h3>
								<p class="text-muted-foreground leading-relaxed">
									{contactInfo.address.street}<br />
									{contactInfo.address.city}
								</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<span class="mt-1 text-2xl text-teal-600 dark:text-teal-400">📞</span>
							<div>
								<h3 class="mb-2 font-semibold text-foreground">Phone</h3>
								<a
									href="tel:{contactInfo.phone}"
									class="text-muted-foreground transition-colors hover:text-teal-600 dark:hover:text-teal-400"
								>
									{contactInfo.phone}
								</a>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<span class="mt-1 text-2xl text-teal-600 dark:text-teal-400">✉️</span>
							<div>
								<h3 class="mb-2 font-semibold text-foreground">Email</h3>
								<a
									href="mailto:{contactInfo.email}"
									class="text-muted-foreground transition-colors hover:text-teal-600 dark:hover:text-teal-400 break-all"
								>
									{contactInfo.email}
								</a>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<span class="mt-1 text-2xl text-teal-600 dark:text-teal-400">🕐</span>
							<div>
								<h3 class="mb-2 font-semibold text-foreground">Hours</h3>
								<p class="text-muted-foreground leading-relaxed">
									{contactInfo.hours.weekdays}<br />
									{contactInfo.hours.saturday}<br />
									{contactInfo.hours.friday}
								</p>
							</div>
						</div>
					</div>

					<!-- Decorative Accent -->
					<div
						class="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-teal-100/30 dark:bg-teal-900/30 blur-2xl"
						aria-hidden="true"
					></div>
				</div>

				<!-- Contact Form -->
				<div
					class="group relative overflow-hidden rounded-3xl border border-teal-100/50 dark:border-teal-900/50 bg-card/90 dark:bg-card/70 p-8 sm:p-10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-xl hover:shadow-teal-500/10"
				>
					<!-- Icon Container -->
					<div
						class="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 text-4xl shadow-md"
					>
						✍️
					</div>

					<h2 class="mb-8 text-3xl font-bold text-foreground sm:text-4xl">Send us a Message</h2>
					<form onsubmit={handleSubmit} class="space-y-6">
						<!-- Name -->
						<div>
							<label for="name" class="block text-sm font-medium mb-2">
								Name <span class="text-destructive">*</span>
							</label>
							<input
								type="text"
								id="name"
								name="name"
								bind:value={formData.name}
								required
								class="w-full rounded-xl border border-teal-200/50 dark:border-teal-800/50 bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:border-teal-500 transition-all hover:border-teal-300 dark:hover:border-teal-700"
								placeholder="Your name"
							/>
						</div>

						<!-- Email -->
						<div>
							<label for="email" class="block text-sm font-medium mb-2">
								Email <span class="text-destructive">*</span>
							</label>
							<input
								type="email"
								id="email"
								name="email"
								bind:value={formData.email}
								required
								class="w-full rounded-xl border border-teal-200/50 dark:border-teal-800/50 bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:border-teal-500 transition-all hover:border-teal-300 dark:hover:border-teal-700"
								placeholder="your.email@example.com"
							/>
						</div>

						<!-- Phone -->
						<div>
							<label for="phone" class="block text-sm font-medium mb-2">Phone</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								bind:value={formData.phone}
								class="w-full rounded-xl border border-teal-200/50 dark:border-teal-800/50 bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:border-teal-500 transition-all hover:border-teal-300 dark:hover:border-teal-700"
								placeholder="(123) 456-7890"
							/>
						</div>

						<!-- Subject -->
						<div>
							<label for="subject" class="block text-sm font-medium mb-2">
								Subject <span class="text-destructive">*</span>
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								bind:value={formData.subject}
								required
								class="w-full rounded-xl border border-teal-200/50 dark:border-teal-800/50 bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:border-teal-500 transition-all hover:border-teal-300 dark:hover:border-teal-700"
								placeholder="What is this regarding?"
							/>
						</div>

						<!-- Message -->
						<div>
							<label for="message" class="block text-sm font-medium mb-2">
								Message <span class="text-destructive">*</span>
							</label>
							<textarea
								id="message"
								name="message"
								bind:value={formData.message}
								required
								rows="5"
								class="w-full rounded-xl border border-teal-200/50 dark:border-teal-800/50 bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:border-teal-500 transition-all hover:border-teal-300 dark:hover:border-teal-700 resize-none"
								placeholder="Your message..."
							></textarea>
						</div>

						<!-- Submit Button -->
						<Button
							type="submit"
							disabled={isSubmitting}
							size="lg"
							class="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 font-semibold"
						>
							{isSubmitting ? 'Sending...' : 'Send Message'}
						</Button>

						<!-- Decorative Accent -->
						<div
							class="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-emerald-100/30 dark:bg-emerald-900/30 blur-2xl"
							aria-hidden="true"
						></div>

						<!-- Success/Error Message -->
						{#if submitMessage}
							<div
								class="rounded-md p-4 {submitMessage.type === 'success'
									? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400'
									: 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400'}"
							>
								{submitMessage.text}
							</div>
						{/if}
					</form>
				</div>
			</div>
		</div>
	</div>
</section>

