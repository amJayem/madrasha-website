<script lang="ts">
	const currentYear = new Date().getFullYear();

	const footerLinks = {
		quickLinks: [
			{ href: '/', label: 'Home' },
			{ href: '/about', label: 'About' },
			{ href: '/activities', label: 'Activities' },
			{ href: '/gallery', label: 'Gallery' }
		],
		contact: [
			{ href: '/contact', label: 'Contact Us' }
		]
	};
</script>

<footer class="border-t bg-muted/50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- About Section -->
			<div>
				<h3 class="text-lg font-semibold mb-4">Madrasha</h3>
				<p class="text-sm text-muted-foreground">
					Dedicated to providing quality Islamic education and nurturing the next generation of
					learners.
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="text-lg font-semibold mb-4">Quick Links</h3>
				<ul class="space-y-2">
					{#each footerLinks.quickLinks as link}
						<li>
							<a
								href={link.href}
								class="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact Section -->
			<div>
				<h3 class="text-lg font-semibold mb-4">Get in Touch</h3>
				<ul class="space-y-2">
					{#each footerLinks.contact as link}
						<li>
							<a
								href={link.href}
								class="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Copyright -->
		<div class="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
			<p>&copy; {currentYear} Madrasha. All rights reserved.</p>
		</div>
	</div>
</footer>

