<script lang="ts">
	import { Button } from '$lib/components/ui/button';

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
<section class="bg-linear-to-b from-primary/10 to-background py-12 sm:py-16">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Contact Us</h1>
			<p class="mt-4 text-lg text-muted-foreground">
				We'd love to hear from you. Send us a message and we'll respond as soon as possible.
			</p>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section class="py-16">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl">
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
				<!-- Contact Information -->
				<div>
					<h2 class="text-2xl font-bold mb-6">Get in Touch</h2>
					<div class="space-y-6">
						<div>
							<h3 class="font-semibold mb-2">Address</h3>
							<p class="text-muted-foreground">
								<!-- Update with your actual address -->
								123 Education Street<br />
								City, State 12345
							</p>
						</div>
						<div>
							<h3 class="font-semibold mb-2">Phone</h3>
							<p class="text-muted-foreground">
								<!-- Update with your actual phone number -->
								(123) 456-7890
							</p>
						</div>
						<div>
							<h3 class="font-semibold mb-2">Email</h3>
							<p class="text-muted-foreground">
								<!-- Update with your actual email -->
								info@madrasha.example.com
							</p>
						</div>
						<div>
							<h3 class="font-semibold mb-2">Hours</h3>
							<p class="text-muted-foreground">
								Monday - Friday: 9:00 AM - 5:00 PM<br />
								Saturday: 9:00 AM - 1:00 PM<br />
								Sunday: Closed
							</p>
						</div>
					</div>
				</div>

				<!-- Contact Form -->
				<div>
					<h2 class="text-2xl font-bold mb-6">Send us a Message</h2>
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
								class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
								class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
								class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
								class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
								class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
								placeholder="Your message..."
							></textarea>
						</div>

						<!-- Submit Button -->
						<Button type="submit" disabled={isSubmitting} class="w-full">
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

