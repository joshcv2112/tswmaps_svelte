<script>
	import QuarterTile from './QuarterTile.svelte';
	import HalfTile from './HalfTile.svelte';

	// TODO - host these images on my own account...
	const games = [
		{
			imageUrl: "https://www.univers-simu.com/wp-content/uploads/2020/01/train-sim-world-new-york.jpg",
			title: "Train Sim World"
		},{
			imageUrl: "https://media.moddb.com/images/games/1/80/79765/logo.jpg",
			title: "Train Sim World 2"
		},{
			imageUrl: "https://pbs.twimg.com/media/EtZYC4YWYAEJ86_.jpg",
			title: "Train Sim World 3"
		},{
			imageUrl: "https://www.univers-simu.com/wp-content/uploads/2022/09/tsw3-dlc.jpg",
			title: "Recent DLC Routes"
		},
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>Interactive Maps for the Train Sim World Series</h1>

<div class="tile-container">
	{#each games as game}
		<QuarterTile imageUrl={game.imageUrl} title={game.title} />
	{/each}
</div>

<div class="tile-container">
	<HalfTile imageUrl="https://media.railsimdev.com/2023/042023/04/TSW3_Screenshot8.jpg" title="Locos and Rolling Stock" />
	<HalfTile imageUrl="https://tswassets.blob.core.windows.net/tsw3/routeIcons/worldmap.jpg" title="World Map" />
</div>

<style>
	h1 {
		width: 100%;
		margin-bottom: 35px;
		color: white;
	}

	div.tile-container {
		margin: 40px auto;
		margin-top: 0px;
		width: 95%;
		padding-left: 20px;
		padding-right: 20px;
	}
</style>
