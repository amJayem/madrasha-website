<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>Home - Madrasha</title>
	<meta name="description" content="Welcome to our Madrasha - A center for Islamic education and learning" />
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-linear-to-b from-primary/10 to-background py-20 sm:py-32">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
				Welcome to Our Madrasha
			</h1>
			<p class="mt-6 text-lg leading-8 text-muted-foreground">
				Dedicated to providing quality Islamic education and nurturing the next generation of
				learners with knowledge, wisdom, and character.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<Button href="/about" size="lg"> Learn More </Button>
				<Button href="/contact" variant="outline" size="lg"> Contact Us </Button>
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
