import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		title: 'About',
		description: 'Description'
	};
}) satisfies PageLoad;
