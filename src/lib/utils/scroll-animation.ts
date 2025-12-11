/**
 * Scroll animation utility using Intersection Observer
 * Adds fade-in/slide-up animations when elements enter viewport
 */

export function setupScrollAnimation(
	element: HTMLElement,
	options: {
		animation?: 'fade' | 'slide-up';
		threshold?: number;
		rootMargin?: string;
	} = {}
) {
	const { animation = 'fade', threshold = 0.1, rootMargin = '0px' } = options;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const animationClass = animation === 'slide-up' ? 'animate-slide-up' : 'animate-fade-in';
					entry.target.classList.add(animationClass);
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold, rootMargin }
	);

	observer.observe(element);

	return () => observer.disconnect();
}
