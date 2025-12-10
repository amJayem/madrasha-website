<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { contactInfo } from '$lib/data/content';
	import { setupScrollAnimation } from '$lib/utils/scroll-animation';

	let contactSection: HTMLElement;

	onMount(() => {
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
<section class="bg-linear-to-b from-primary/10 to-background page-header-spacing">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
				Contact Us
			</h1>
			<p class="mt-6 text-xl leading-relaxed text-muted-foreground">
				We'd love to hear from you. Send us a message and we'll respond as soon as possible.
			</p>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section bind:this={contactSection} class="content-spacing">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-5xl">
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
				<!-- Contact Information -->
				<div class="rounded-2xl border border-border/50 bg-card p-8 shadow-md">
					<h2 class="text-3xl font-bold mb-8 text-foreground">Get in Touch</h2>
					<div class="space-y-6">
						<div>
							<h3 class="font-semibold mb-2">Address</h3>
							<p class="text-muted-foreground">
								{contactInfo.address.street}<br />
								{contactInfo.address.city}
							</p>
						</div>
						<div>
							<h3 class="font-semibold mb-2">Phone</h3>
							<p class="text-muted-foreground">{contactInfo.phone}</p>
						</div>
						<div>
							<h3 class="font-semibold mb-2">Email</h3>
							<p class="text-muted-foreground">{contactInfo.email}</p>
						</div>
						<div>
							<h3 class="font-semibold mb-2">Hours</h3>
							<p class="text-muted-foreground">
								{contactInfo.hours.weekdays}<br />
								{contactInfo.hours.saturday}<br />
								{contactInfo.hours.friday}
							</p>
						</div>
					</div>
				</div>

				<!-- Contact Form -->
				<div class="rounded-2xl border border-border/50 bg-card p-8 shadow-md">
					<h2 class="text-3xl font-bold mb-8 text-foreground">Send us a Message</h2>
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
								class="w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all hover:border-primary/50"
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
								class="w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all hover:border-primary/50"
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
								class="w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all hover:border-primary/50"
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
								class="w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all hover:border-primary/50"
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
								class="w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all hover:border-primary/50 resize-none"
								placeholder="Your message..."
							></textarea>
						</div>

						<!-- Submit Button -->
						<Button
							type="submit"
							disabled={isSubmitting}
							class="w-full shadow-lg hover:shadow-xl transition-all"
						>
							{isSubmitting ? 'Sending...' : 'Send Message'}
						</Button>

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

