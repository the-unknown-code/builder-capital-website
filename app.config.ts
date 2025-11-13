/*
░██████╗████████╗██╗░░░██╗██████╗░██╗░█████╗░  ███████╗██████╗░███████╗██╗░██████╗░██╗░░██╗████████╗
██╔════╝╚══██╔══╝██║░░░██║██╔══██╗██║██╔══██╗  ██╔════╝██╔══██╗██╔════╝██║██╔════╝░██║░░██║╚══██╔══╝
╚█████╗░░░░██║░░░██║░░░██║██║░░██║██║██║░░██║  █████╗░░██████╔╝█████╗░░██║██║░░██╗░███████║░░░██║░░░
░╚═══██╗░░░██║░░░██║░░░██║██║░░██║██║██║░░██║  ██╔══╝░░██╔══██╗██╔══╝░░██║██║░░╚██╗██╔══██║░░░██║░░░
██████╔╝░░░██║░░░╚██████╔╝██████╔╝██║╚█████╔╝  ██║░░░░░██║░░██║███████╗██║╚██████╔╝██║░░██║░░░██║░░░
╚═════╝░░░░╚═╝░░░░╚═════╝░╚═════╝░╚═╝░╚════╝░  ╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═╝░╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░

Nuxt 4 Boilerplate
@author: Studio Freight
*/

import { generateShades } from './shared/sass-utils/utils';

interface AppConfig {
	title: string;
	ssr: boolean;
	storyblok: {
		enabled: boolean;
		settings?: string | boolean;
		forceDraft?: boolean;
		apiOptions: {
			region?: string;
		};
	};
	three: {
		enabled: boolean;
		options: {
			alpha: boolean;
			antialias: boolean;
			stencil: boolean;
			depth: boolean;
			powerPreference: string;
			preserveDrawingBuffer: boolean;
		};
	};
	fonts: {
		assets?: {
			prefix: string;
		};
		defaults: {
			weights: number[];
		};
		families: {
			name: string;
			provider: string;
		}[];
	};
	link: {
		prefetch: string;
	};
}

// Define base colors and generate their shades
const colors: any = generateShades({
	black: '#080808',
	grey: '#5c5c5c',
	white: '#fffef4',
	azure: '#00ffee',
});

// Define light and dark themes using generated colors
const themes: any = {
	light: {
		bg: colors['white'],
		fg: colors['black'],
		contrast: colors['azure'],
	},
	dark: {
		bg: colors['black'],
		fg: colors['white'],
		contrast: colors['azure'],
	},
};

// Define responsive design breakpoints for layouts
const breakpoints: any = {
	mobile: 800,
	wide: 1720,
};

// Define grid system with columns, gap, and margin settings
const grid: any = {
	columns: [4, 12],
	gap: [8, 8],
	margin: [16, 16],
};

// Define global spacers
const spacers: any = [4, 8, 16, 24, 32, 64];

// Application-level configuration (SSR, prefetching, etc.)
export const app: AppConfig = {
	title: 'Bulder Capital',
	ssr: false,
	storyblok: {
		enabled: true,
		forceDraft: process.env.STORYBLOK_FORCE_DRAFT === 'true',
		settings: false, // true if global settings must be loaded before the app is mounted
		apiOptions: {
			region: 'eu',
		},
	},
	three: {
		enabled: true,
		options: {
			alpha: false,
			antialias: false,
			stencil: false,
			depth: false,
			powerPreference: 'high-performance',
			preserveDrawingBuffer: false,
		},
	},
	fonts: {
		defaults: {
			weights: [300, 400, 600],
		},
		families: [
			{
				name: 'Geist',
				provider: 'local',
			},
		],
	},
	link: {
		prefetch: 'visibility', // nuxt default
	},
};

// Export the configuration object for use throughout SCSS
export default {
	colors,
	themes,
	breakpoints,
	spacers,
	grid,
};
