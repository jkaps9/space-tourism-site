// ===== SITE CONSTANTS =====
export const SITE = {
	title: "Pearl River Web",
	tagline: "Professional Web Design Services",
	description: "Pearl River Web offers top-tier web design and development services to meet all your project needs. Start exploring and contact our team for superior quality and reliability.",
	url: "https://www.yourwebsite.com",
	author: "Pearl River Web team",
	locale: "en",
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
	name: SITE.title,
	email: "info@pearlriverweb.com",
	phoneForTel: "555-867-5309",
	phoneFormatted: "(555) 867-5309",
	logo: "/assets/favicons/favicon.svg",
	address: {
		lineOne: "First Address Line",
		lineTwo: "Second Address Line",
		city: "Pearl River",
		state: "NY",
		zip: "10965",
		mapLink: "https://maps.app.goo.gl/CcfhaWkR18YoUt4h9",
	},
	socials: {
		facebook: "https://www.facebook.com/",
		instagram: "https://www.instagram.com/",
	},
};

// ===== SEO DEFAULTS =====
export const SEO = {
	title: SITE.title,
	description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
	locale: "en_US",
	image: "/assets/social.png", // Default fallback social image located in public/
};