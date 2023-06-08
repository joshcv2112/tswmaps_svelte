<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<!-- TODO - sort out this footer -->
	<footer>
		<p>put some copywright here for TSW and some <a href="https://kit.svelte.dev">links</a> to my repo or something</p>
	</footer>
</div>

<!-- TODO - Sort out the actual files in this project, how should components be organized? -->

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		/* TODO - use the thing to generate a better color gradient background */
		background: url("https://tswassets.blob.core.windows.net/tsw3/routeIcons/cool-background.png") center center / cover no-repeat fixed;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		background-color: #001219;
		color: white;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
