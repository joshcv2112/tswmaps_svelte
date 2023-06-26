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
		background: rgb(0,0,0);
		background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,18,25,1) 48%, rgba(0,0,0,1) 100%); 
		-ms-overflow-style: none; /* for Internet Explorer, Edge */
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #001219;
		color: white;
		height: 20px;
		font-size: 12px;
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
