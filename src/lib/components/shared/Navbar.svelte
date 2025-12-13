<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { navLinks } from '$lib/data/content';

	let mobileMenuOpen = $state(false);
	let navElement: HTMLElement;
	let menuButton: Button;

	function isActive(href: string): boolean {
		return $page.url.pathname === href;
	}

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}

	function handleClickOutside(event: MouseEvent) {
		if (
			mobileMenuOpen &&
			navElement &&
			!navElement.contains(event.target as Node)
		) {
			closeMenu();
		}
	}

	function handleMenuButtonClick(event: MouseEvent) {
		event.stopPropagation();
		toggleMenu();
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<nav
	bind:this={navElement}
	class="sticky top-0 z-50 w-full border-b-2 border-teal-200/60 dark:border-teal-800/60 bg-white/98 dark:bg-background/98 backdrop-blur-md shadow-md supports-backdrop-filter:bg-white/90 dark:supports-backdrop-filter:bg-background/90"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<!-- Logo/Brand -->
			<a href="/" class="flex items-center space-x-2 transition-opacity hover:opacity-80">
				<span
					class="text-2xl font-bold bg-linear-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent"
				>
					Madrasha
				</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex md:items-center md:space-x-8">
				{#each navLinks as link}
					<a
						href={link.href}
						class={cn(
							'text-sm font-semibold transition-all duration-200 px-2 py-1',
							isActive(link.href)
								? 'text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400'
								: 'text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 hover:underline underline-offset-4'
						)}
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<Button
				bind:this={menuButton}
				variant="ghost"
				size="icon"
				class="md:hidden"
				onclick={handleMenuButtonClick}
				aria-label="Toggle mobile menu"
				aria-expanded={mobileMenuOpen}
			>
				{#if mobileMenuOpen}
					<!-- Close Icon (X) -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{:else}
					<!-- Hamburger Icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</Button>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden pb-4 pt-4 border-t border-teal-100/50 dark:border-teal-900/50">
				<div class="flex flex-col space-y-2">
					{#each navLinks as link}
						<a
							href={link.href}
							onclick={closeMenu}
							class={cn(
								'px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200',
								isActive(link.href)
									? 'bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 border-l-4 border-teal-600 dark:border-teal-400'
									: 'text-muted-foreground hover:bg-teal-50/50 dark:hover:bg-teal-950/20 hover:text-teal-600 dark:hover:text-teal-400'
							)}
						>
							{link.label}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</nav>

