/**
 * Centralized content data
 * All static content, text, and data structures in one place
 */

import { assets as importedAssets } from './assets';

// Re-export assets for convenience
export const assets = importedAssets;

// Gallery images data
export const galleryImages = [
	{
		id: 1,
		title: 'Classroom Learning',
		description: 'Students engaged in Quranic studies',
		src: assets.gallery.classroom
	},
	{
		id: 2,
		title: 'Prayer Time',
		description: 'Congregational prayers',
		src: assets.gallery.prayer
	},
	{
		id: 3,
		title: 'Arabic Class',
		description: 'Learning Arabic language',
		src: assets.gallery.classroom
	},
	{
		id: 4,
		title: 'Community Event',
		description: 'Community gathering and celebration',
		src: assets.gallery.readingQuran
	},
	{
		id: 5,
		title: 'Student Activities',
		description: 'Students participating in activities',
		src: assets.gallery.activities
	},
	{
		id: 6,
		title: 'Graduation',
		description: 'Graduation ceremony',
		src: assets.gallery.graduation
	}
] as const;

// Activities data
export const activities = [
	{
		title: 'Quranic Studies',
		description:
			'Comprehensive Quran memorization and recitation classes with proper Tajweed rules.',
		icon: '📖'
	},
	{
		title: 'Arabic Language',
		description: 'Learn Arabic language skills including reading, writing, and conversation.',
		icon: '✍️'
	},
	{
		title: 'Islamic Studies',
		description: 'In-depth study of Islamic history, jurisprudence, and theology.',
		icon: '🕌'
	},
	{
		title: 'Daily Prayers',
		description: 'Regular congregational prayers and learning the proper way to perform Salah.',
		icon: '🤲'
	},
	{
		title: 'Community Service',
		description: 'Engaging in community outreach and service projects.',
		icon: '🤝'
	},
	{
		title: 'Youth Programs',
		description: 'Special programs designed for youth development and engagement.',
		icon: '👥'
	}
] as const;

// Hero section stats
export const heroStats = {
	students: '200+',
	programs: '10+',
	years: '1.5+'
} as const;

// Contact information
export const contactInfo = {
	address: {
		street: '123 Education Street',
		city: 'City, State 12345'
	},
	phone: '(123) 456-7890',
	email: 'info@madrasha.example.com',
	hours: {
		weekdays: 'Sunday - Thursday: 9:00 AM - 5:00 PM',
		friday: 'Friday: Closed',
		saturday: 'Saturday: 9:00 AM - 12:00 PM'
	}
} as const;

// Navigation links
export const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/activities', label: 'Activities' },
	{ href: '/gallery', label: 'Gallery' },
	{ href: '/contact', label: 'Contact' }
] as const;
