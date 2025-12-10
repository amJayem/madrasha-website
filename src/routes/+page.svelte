<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import hero_image from '$lib/assets/mosque-sunrise-architecture.jpg';
	// import hero_image from '$lib/assets/hero-image.avif';
</script>

<svelte:head>
	<title>Home - Madrasha</title>
	<meta name="description" content="Welcome to our Madrasha - A center for Islamic education and learning" />
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-linear-to-br from-primary/5 via-background to-primary/10 py-16 sm:py-24 lg:py-32">
	<!-- Decorative Background Elements -->
	<div class="absolute inset-0 overflow-hidden">
		<!-- Large Circle -->
		<div
			class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
			aria-hidden="true"
		></div>
		<!-- Medium Circle -->
		<div
			class="absolute top-1/2 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
			aria-hidden="true"
		></div>
		<!-- Small Circle -->
		<div
			class="absolute bottom-20 right-1/4 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
			aria-hidden="true"
		></div>
		<!-- Geometric Shapes -->
		<div
			class="absolute top-1/4 left-1/4 h-32 w-32 rotate-45 rounded-lg bg-primary/5 blur-xl"
			aria-hidden="true"
		></div>
	</div>

	<div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
			<!-- Left Column: Text Content -->
			<div class="text-center lg:text-left">
				<!-- Badge/Highlight -->
				<div class="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
					<span class="mr-2">🕌</span>
					Quality Islamic Education
				</div>

				<!-- Main Heading -->
				<h1
					class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
				>
					Welcome to Our
					<span class="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
						Madrasha
					</span>
				</h1>

				<!-- Subheading -->
				<p class="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
					Dedicated to providing quality Islamic education and nurturing the next generation of
					learners with knowledge, wisdom, and character.
				</p>

				<!-- CTA Buttons -->
				<div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
					<Button href="/about" size="lg" class="w-full sm:w-auto">
						Learn More
					</Button>
					<Button href="/contact" variant="outline" size="lg" class="w-full sm:w-auto">
						Contact Us
					</Button>
				</div>

				<!-- Quick Stats (Optional) -->
				<div class="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-8">
					<div>
						<div class="text-2xl font-bold text-primary">500+</div>
						<div class="text-sm text-muted-foreground">Students</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-primary">20+</div>
						<div class="text-sm text-muted-foreground">Programs</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-primary">15+</div>
						<div class="text-sm text-muted-foreground">Years</div>
					</div>
				</div>
			</div>

			<!-- Right Column: Illustration/Image -->
			<div class="relative flex items-center justify-center lg:justify-end">
				<!-- Decorative Frame -->
				<div class="relative">
					<!-- Main Image Container -->
					<div
						class="relative h-[400px] w-full overflow-hidden rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 shadow-2xl sm:h-[500px] lg:h-[600px]"
					>
						<!-- Placeholder for image - replace with actual image -->
						<div
							class="flex h-full w-full items-center justify-center bg-linear-to-br from-primary/10 via-primary/5 to-background"
						>
							<!-- Decorative Icon/Illustration -->
							<div class="text-center">
								<!-- <div class="mb-4 text-9xl opacity-20">📖</div> -->
								<img
						src={hero_image}
						alt="logo"
						class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
						loading="lazy"
					/>
                <p class="text-sm text-muted-foreground">
								
								</p>
							</div>
						</div>

						<!-- Overlay Gradient -->
						<div
							class="absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent"
						></div>
					</div>

					<!-- Decorative Accent -->
					<div
						class="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl"
						aria-hidden="true"
					></div>
					<div
						class="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-primary/10 blur-3xl"
						aria-hidden="true"
					></div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="py-16 sm:py-24">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
				Our Mission
			</h2>
			<p class="mt-4 text-lg text-muted-foreground">
				We strive to create an environment that fosters spiritual growth, academic excellence, and
				strong moral character.
			</p>
		</div>

		<div class="mx-auto mt-16 max-w-5xl">
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				<!-- Feature 1 -->
				<div class="rounded-lg border bg-card p-6 shadow-sm">
					<div class="mb-4 text-3xl">📚</div>
					<h3 class="text-xl font-semibold mb-2">Quality Education</h3>
					<p class="text-muted-foreground">
						Comprehensive curriculum covering Islamic studies, Arabic language, and modern
						subjects.
					</p>
				</div>

				<!-- Feature 2 -->
				<div class="rounded-lg border bg-card p-6 shadow-sm">
					<div class="mb-4 text-3xl">🤲</div>
					<h3 class="text-xl font-semibold mb-2">Spiritual Growth</h3>
					<p class="text-muted-foreground">
						Nurturing faith and character through daily prayers, Quranic studies, and Islamic
						values.
					</p>
				</div>

				<!-- Feature 3 -->
				<div class="rounded-lg border bg-card p-6 shadow-sm">
					<div class="mb-4 text-3xl">👥</div>
					<h3 class="text-xl font-semibold mb-2">Community</h3>
					<p class="text-muted-foreground">
						Building a strong, supportive community of students, teachers, and families.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="bg-muted py-16">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
				Join Our Community
			</h2>
			<p class="mt-4 text-lg text-muted-foreground">
				Discover our programs and activities. We welcome students and families who share our
				commitment to Islamic education.
			</p>
			<div class="mt-8">
				<Button href="/activities" size="lg"> View Activities </Button>
			</div>
		</div>
	</div>
</section>
