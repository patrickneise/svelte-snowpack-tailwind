<script>
	const message = "Learn Svelte";
</script>

<div class:debug-screens={import.meta.env.MODE === "development"}>
	<header class="flex flex-col h-screen text-center">
		<img src="/logo.svg" class="mt-8 mb-4 h-96 animate-pulse" alt="logo" />

		<p class="m-4 text-5xl">
			Edit <code>src/App.svelte</code> and save to reload.
		</p>
		<a
			class="m-4 text-3xl text-red-600"
			href="https://svelte.dev"
			target="_blank"
			rel="noopener noreferrer"
		>
			{message}
		</a>
	</header>
</div>

<style>
</style>
