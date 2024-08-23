import { join } from 'path';
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	darkMode: 'selector',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				'custom-light-bg': '#e5e5e5', // Light mode background color
				'custom-dark-bg': 'linear-gradient(45deg, #e0f2fe, #1d4e89, #38b2ac)' // Dark mode background color
			},
			fontFamily: {
				fira: ['Fira Mono', 'monospace']
			}
		}
	},
	plugins: [
		typography,
		skeleton({
			themes: { preset: ['skeleton'] }
		})
	]
} satisfies Config;

export default config;
