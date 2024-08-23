<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="grid min-h-screen place-content-center place-items-center">
	<h1 class="text-4xl">{$page.status}: {$page.error?.message}</h1>
</div>
