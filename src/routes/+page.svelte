<script>
	import QuarterTile from './QuarterTile.svelte';
	import HalfTile from './HalfTile.svelte';

	// TODO - host these images on my own account...
	const games = [
		{
			imageUrl: "https://www.univers-simu.com/wp-content/uploads/2020/01/train-sim-world-new-york.jpg",
			title: "Train Sim World",
			url: "/game/tsw"
		},{
			imageUrl: "https://media.moddb.com/images/games/1/80/79765/logo.jpg",
			title: "Train Sim World 2",
			url: "/game/tsw2"
		},{
			imageUrl: "https://pbs.twimg.com/media/EtZYC4YWYAEJ86_.jpg",
			title: "Train Sim World 3",
			url: "/game/tsw3"
		},{
			imageUrl: "https://tswassets.blob.core.windows.net/assets/glossopLine_hometile.jpg",
			title: "NEW | Glossop Line",
			url: "/route/glossopLine"
		},
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>INTERACTIVE MAPS FOR THE TRAIN SIM WORLD SERIES</h1>

<div class="tile-container">
	{#each games as game}
		<QuarterTile imageUrl={game.imageUrl} title={game.title} url={game.url} />
	{/each}
</div>

<div class="tile-container">
	<HalfTile imageUrl="https://media.railsimdev.com/2023/042023/04/TSW3_Screenshot8.jpg" title="Locos and Rolling Stock" url="/locos" />
	<HalfTile imageUrl="https://tswassets.blob.core.windows.net/tsw3/routeIcons/worldmap.jpg" title="World Map" url="/world" />
</div>

<style>
	h1 {
		width: 80%;
		margin-top: 35px;
		margin-bottom: 35px;
		margin-left: auto;
		margin-right: auto;
		color: white;
		font-size: 1.5rem;
	}

	@media (min-width: 1000px) {
		h1 {
			width: 100%;
			margin-top: 35px;
			margin-bottom: 35px;
			color: white;
			font-size: 2rem;
		}

		div.tile-container {
			margin: 40px auto;
			margin-top: 0px;
			width: 95%;
			
		}
	}
</style>
