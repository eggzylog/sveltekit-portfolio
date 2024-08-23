<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<h1>{data.title} {data.author.name}</h1>
	<p>{data.description}</p>
</div>
