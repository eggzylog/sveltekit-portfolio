<script lang="ts">
	import { onMount } from 'svelte';
	import { typewriter } from '@functions';
	import { fly, scale } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;
	export const messages = ['👋 Hi there!', `I am ${data.author.name},`];

	let i = 0;
	let typewriterFinished = false;

	onMount(() => {
		const interval = setInterval(() => {
			setTimeout(() => {
				if (i < messages.length - 1) {
					i += 1;
				} else {
					clearInterval(interval);
					typewriterFinished = true;
				}
			}, 100);
		}, 4000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="grid grid-cols-12">
	<main class="col-span-full space-y-4 p-4">
		<section class="mx-auto text-center font-fira text-2xl leading-10 md:w-[800px]">
			<div
				class="flex flex-col items-center justify-center"
				style="min-height: 70vh;"
				class:animate-top={typewriterFinished}
			>
				<div>
					{#key i}
						<p class="text-center text-3xl md:text-5xl" in:typewriter={{ speed: 20 }}>
							{messages[i] || ''}
						</p>
					{/key}
				</div>
				{#if typewriterFinished}
					<div class="mt-4 text-center text-lg md:text-2xl">
						<p transition:fly={{ delay: 500, duration: 1500, x: -200, y: -200 }}>
							a passionate {data.author.role} from the 🌴 {data.author.country}.
						</p>
						<p transition:fly={{ delay: 500, duration: 1500, x: 200, y: -200 }}>
							I build web interfaces that are both stunning and intuitive. 👏
						</p>
						<p transition:scale={{ delay: 2000, duration: 1500, start: 0.5 }}>
							Let's build something amazing together! 🚀
						</p>
					</div>
				{/if}
			</div>
		</section>
	</main>
</div>

<style>
	.animate-top {
		animation: moveToTop 1s forwards;
	}

	@keyframes moveToTop {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10vh);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
