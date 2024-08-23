import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Projects',
		description: 'Description'
	};
}) satisfies PageLoad;
