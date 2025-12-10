<script lang="ts">
	import { onMount } from 'svelte';
	import { setupScrollAnimation } from '$lib/utils/scroll-animation';

	let contentSection: HTMLElement;

	onMount(() => {
		if (contentSection) setupScrollAnimation(contentSection, { animation: 'slide-up' });
	});
</script>

<svelte:head>
	<title>About Us - Madrasha</title>
	<meta name="description" content="Learn about our Madrasha, our mission, vision, and commitment to Islamic education" />
</svelte:head>

<!-- Page Header -->
<section class="bg-linear-to-b from-primary/10 to-background page-header-spacing">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
				About Us
			</h1>
			<p class="mt-6 text-xl leading-relaxed text-muted-foreground">
				Learn more about our mission, values, and commitment to Islamic education
			</p>
		</div>
	</div>
</section>

<!-- Main Content -->
<section bind:this={contentSection} class="content-spacing">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl space-y-16">
			<!-- Mission -->
			<div class="rounded-2xl border border-border/50 bg-card p-10 shadow-md">
				<h2 class="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
				<p class="text-lg text-muted-foreground leading-relaxed">
					Our Madrasha is dedicated to providing comprehensive Islamic education that combines
					traditional Islamic knowledge with modern educational methods. We aim to nurture
					students who are not only knowledgeable but also possess strong moral character and
					spiritual awareness.
				</p>
			</div>

			<!-- Vision -->
			<div class="rounded-2xl border border-border/50 bg-card p-10 shadow-md">
				<h2 class="text-4xl font-bold mb-6 text-foreground">Our Vision</h2>
				<p class="text-lg text-muted-foreground leading-relaxed">
					To be a leading institution in Islamic education, recognized for excellence in teaching,
					character development, and community service. We envision a future where our students
					become positive contributors to society, guided by Islamic principles and values.
				</p>
			</div>

			<!-- Values -->
			<div class="rounded-2xl border border-border/50 bg-card p-10 shadow-md">
				<h2 class="text-4xl font-bold mb-6 text-foreground">Our Values</h2>
				<ul class="space-y-4 text-lg text-muted-foreground">
					<li class="flex items-start">
						<span class="mr-3 text-2xl text-primary">•</span>
						<span><strong class="text-foreground font-semibold">Excellence:</strong> Striving for the highest standards in education and character</span>
					</li>
					<li class="flex items-start">
						<span class="mr-3 text-2xl text-primary">•</span>
						<span><strong class="text-foreground font-semibold">Respect:</strong> Treating all members of our community with dignity and kindness</span>
					</li>
					<li class="flex items-start">
						<span class="mr-3 text-2xl text-primary">•</span>
						<span><strong class="text-foreground font-semibold">Integrity:</strong> Upholding honesty and ethical behavior in all our actions</span>
					</li>
					<li class="flex items-start">
						<span class="mr-3 text-2xl text-primary">•</span>
						<span><strong class="text-foreground font-semibold">Community:</strong> Building strong bonds and supporting one another</span>
					</li>
					<li class="flex items-start">
						<span class="mr-3 text-2xl text-primary">•</span>
						<span><strong class="text-foreground font-semibold">Service:</strong> Contributing positively to our community and society</span>
					</li>
				</ul>
			</div>

			<!-- History -->
			<div class="rounded-2xl border border-border/50 bg-card p-10 shadow-md">
				<h2 class="text-4xl font-bold mb-6 text-foreground">Our History</h2>
				<p class="text-lg text-muted-foreground leading-relaxed">
					Founded with a vision to provide quality Islamic education, our Madrasha has been
					serving the community for years. We have grown from humble beginnings to become a
					recognized institution committed to nurturing young minds and hearts.
				</p>
			</div>
		</div>
	</div>
</section>

