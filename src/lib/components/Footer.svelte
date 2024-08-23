<script lang="ts">
	import type { GithubType } from '@types';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';

	export let author;
	export let github: GithubType;
	export let year = new Date().getFullYear();
</script>

<footer class="flex items-center justify-center pt-32 md:pb-5">
	&copy {year}. <span class="hidden pl-1 md:block">Created by</span>
	<a
		href={github.link}
		aria-label="GitHub"
		target="_blank"
		rel="noopener noreferrer"
		class="mx-1 flex gap-1 transition duration-300 ease-in-out hover:text-blue-500"
	>
		{author}
		<div class="icon h-6 w-6">
			<FaGithub />
		</div>
	</a>
	<span class="hidden md:block">with</span>
	<a
		href="https://kit.svelte.dev/"
		aria-label="SvelteKit"
		target="_blank"
		rel="noopener noreferrer"
		class="item-center mx-1 flex gap-1 transition duration-300 ease-in-out hover:text-orange-500"
	>
		SvelteKit
		<div class="icon h-6 w-6">
			<img src="/svelte-logo.svg" alt="Svelte Logo" />
		</div>
	</a>
</footer>
