<script lang="ts">
	import { contactInfo, navLinks } from '$lib/data/content';

	const currentYear = new Date().getFullYear();

	const footerLinks = {
		quickLinks: navLinks.filter((link) => link.href !== '/contact')
	};
</script>

<footer class="relative border-t border-teal-200/50 dark:border-teal-800/50 bg-linear-to-br from-teal-50/40 via-emerald-50/20 to-background dark:from-teal-950/20 dark:via-emerald-950/10 dark:to-background">
	<!-- Subtle Background Pattern -->
	<div class="absolute inset-0 pattern-dot-grid opacity-15" aria-hidden="true"></div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12 items-start">
			<!-- Brand Column -->
			<div class="space-y-4">
				<h3 class="text-2xl font-bold bg-linear-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
					Madrasha
				</h3>
				<p class="text-sm leading-relaxed text-muted-foreground max-w-sm">
					Islamic education center fostering spiritual growth and academic excellence.
				</p>
				<!-- Decorative Element -->
				<div class="pt-2">
					<div
						class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-900/50 text-2xl shadow-md"
					>
						🕌
					</div>
				</div>
			</div>

			<!-- Quick Links Column -->
			<div>
				<h3 class="mb-6 text-lg font-semibold text-foreground">Quick Links</h3>
				<ul class="space-y-3">
					{#each footerLinks.quickLinks as link}
						<li>
							<a
								href={link.href}
								class="text-sm text-muted-foreground transition-all duration-200 hover:text-teal-600 dark:hover:text-teal-400 hover:underline underline-offset-4 inline-block"
							>
								{link.label}
							</a>
						</li>
					{/each}
					<li>
						<a
							href="/contact"
							class="text-sm text-muted-foreground transition-all duration-200 hover:text-teal-600 dark:hover:text-teal-400 hover:underline underline-offset-4 inline-block"
						>
							Contact
						</a>
					</li>
				</ul>
			</div>

			<!-- Contact Column -->
			<div>
				<h3 class="mb-6 text-lg font-semibold text-foreground">Contact Us</h3>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<span class="mt-0.5 text-teal-600 dark:text-teal-400">📍</span>
						<div class="text-sm text-muted-foreground">
							<p>{contactInfo.address.street}</p>
							<p>{contactInfo.address.city}</p>
						</div>
					</li>
					<li class="flex items-center gap-3">
						<span class="text-teal-600 dark:text-teal-400">📞</span>
						<a
							href="tel:{contactInfo.phone}"
							class="text-sm text-muted-foreground transition-all duration-200 hover:text-teal-600 dark:hover:text-teal-400 hover:underline underline-offset-4"
						>
							{contactInfo.phone}
						</a>
					</li>
					<li class="flex items-center gap-3">
						<span class="text-teal-600 dark:text-teal-400">✉️</span>
						<a
							href="mailto:{contactInfo.email}"
							class="text-sm text-muted-foreground transition-all duration-200 hover:text-teal-600 dark:hover:text-teal-400 hover:underline underline-offset-4 break-all"
						>
							{contactInfo.email}
						</a>
					</li>
				</ul>
			</div>
		</div>

		<!-- Copyright -->
		<div
			class="mt-12 pt-8 border-t border-teal-100/50 dark:border-teal-900/50 text-center text-sm text-muted-foreground"
		>
			<p>&copy; {currentYear} Madrasha. All rights reserved.</p>
		</div>
	</div>
</footer>

