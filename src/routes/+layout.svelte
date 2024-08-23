<script lang="ts">
	import type { PageData } from './$types';
	import { Footer, Header } from '$lib/components';
	import '../app.css';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.author.name}</title>
	<meta name="description" content="{data.author.name} Portfolio" />
	<meta name="author" content={data.author.name} />
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<Header sitename={data.sitename} routes={data.routes} />
	<div class="container px-8 py-4">
		<slot></slot>
	</div>
	<Footer author={data.author.name} github={data.github} />
</div>
