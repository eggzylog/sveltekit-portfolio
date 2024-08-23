<script lang="ts">
	import type { RouteType } from '@types';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	export let sitename: string;
	export let routes: RouteType[] = [];
</script>

<header class="sticky top-0 z-10 p-4 backdrop-blur">
	<div class="flex items-center justify-between px-4 md:justify-between">
		<!-- Site name centered in mobile view -->
		<a href="/" class="text-center md:flex-grow-0">
			<h1 class="text-xl font-bold">{sitename}</h1>
		</a>

		<!-- Desktop navigation -->
		<div class="flex justify-center">
			<nav
				class="fixed -bottom-[80vh] left-1/2 -translate-x-1/2 transform md:static md:left-auto md:flex md:transform-none"
			>
				<ul class="flex gap-10">
					{#each routes as route}
						<li class="flex items-center text-xl md:text-2xl">
							<a
								href={route.href}
								class={route.href === $page.url.pathname
									? 'font-bold text-blue-500'
									: 'transition duration-500 hover:text-blue-500'}
								aria-disabled={route.href === $page.url.pathname}
								style={route.href === $page.url.pathname
									? 'pointer-events: none; opacity: 0.6;'
									: ''}
							>
								{route.name}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>

		<!-- Light switch -->
		<LightSwitch class="ml-4 md:block" />
	</div>
</header>
