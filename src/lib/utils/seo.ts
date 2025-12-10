/**
 * SEO utility functions for generating metadata
 */

export interface SEOData {
	title?: string;
	description?: string;
	keywords?: string;
	image?: string;
	url?: string;
	type?: string;
}

const defaultTitle = 'Madrasha - Islamic Education Center';
const defaultDescription =
	'Quality Islamic education and nurturing the next generation of learners';
const siteUrl = 'https://madrasha.example.com'; // Update with your actual domain

export function generateSEOTags(data: SEOData = {}) {
	const title = data.title ? `${data.title} - Madrasha` : defaultTitle;
	const description = data.description || defaultDescription;
	const url = data.url ? `${siteUrl}${data.url}` : siteUrl;
	const image = data.image || `${siteUrl}/og-image.jpg`; // You can add an OG image later

	return {
		title,
		description,
		keywords: data.keywords || 'madrasha, islamic education, quran, arabic, islamic studies',
		url,
		image,
		type: data.type || 'website'
	};
}
