/**
 * Centralized static assets configuration
 * Import all images and assets here, then export them for use across the app
 */

// Hero Images
import heroImage from '$lib/assets/mosque-sunrise-architecture.jpg';
import heroImageAvif from '$lib/assets/hero-image.avif';

// Gallery Images
import classroomImage from '$lib/assets/classroom.png';
import prayerImage from '$lib/assets/prayer-2.jpg';
import graduationImage from '$lib/assets/Graduation-ceremony.jpg';
import activitiesImage from '$lib/assets/activities.jpg';
import readingQuranImage from '$lib/assets/Reading-Quran-1.jpg';
import mosqueImage2 from '$lib/assets/mosque-image-2.jpg';
import quranImage1 from '$lib/assets/quran-image-1.jpg';

// Export all assets
export const assets = {
	hero: {
		primary: heroImage,
		avif: heroImageAvif
	},
	gallery: {
		classroom: classroomImage,
		prayer: prayerImage,
		graduation: graduationImage,
		activities: activitiesImage,
		readingQuran: readingQuranImage,
		mosque: mosqueImage2,
		quran: quranImage1
	}
} as const;
