<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/activities', label: 'Activities' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/contact', label: 'Contact' }
	];

	function isActive(href: string): boolean {
		return $page.url.pathname === href;
	}
</script>

<nav class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo/Brand -->
			<a href="/" class="flex items-center space-x-2">
				<span class="text-xl font-bold text-primary">Madrasha</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex md:items-center md:space-x-6">
				{#each navLinks as link}
					<a
						href={link.href}
						class={cn(
							'text-sm font-medium transition-colors hover:text-primary',
							isActive(link.href)
								? 'text-primary border-b-2 border-primary pb-1'
								: 'text-muted-foreground'
						)}
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<Button
				variant="ghost"
				size="icon"
				class="md:hidden"
				onclick={() => {
					const menu = document.getElementById('mobile-menu');
					if (menu) {
						menu.classList.toggle('hidden');
					}
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</Button>
		</div>

		<!-- Mobile Navigation -->
		<div id="mobile-menu" class="hidden md:hidden pb-4">
			<div class="flex flex-col space-y-2">
				{#each navLinks as link}
					<a
						href={link.href}
						class={cn(
							'px-3 py-2 text-sm font-medium rounded-md transition-colors',
							isActive(link.href)
								? 'bg-primary text-primary-foreground'
								: 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
						)}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	</div>
</nav>

