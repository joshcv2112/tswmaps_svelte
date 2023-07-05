<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import logo from '$lib/images/noun-train-446715-FFFFFF.svg';

	import { fly } from 'svelte/transition';
	import AnimatedHamburger from '../lib/AnimatedHamburger.svelte';
	export let open = false;
	export let onClick = () => {
        open = !open;
    }
</script>

<header>
	<div class="main">
		<div class="corner-left">
			<a class="corner-left" href="/">
				<img src={logo} alt="TSW Maps" />
				TSW Maps
			</a>
		</div>
	  <AnimatedHamburger {open} {onClick} />
	</div>

	<nav class='desktop'>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/locos' ? 'page' : undefined}>
				<a href="/locos">Locos</a>
			</li>
			<li aria-current={$page.url.pathname === '/world' ? 'page' : undefined}>
				<a href="/world">World Map</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="https://classic.tswmaps.com/">TS Classic Maps</a>
			</li>
			<li aria-current={$page.url.pathname === '/support' ? 'page' : undefined}>
				<a href="/support">Support</a>
			</li>
		</ul>
	</nav>
  
	<div class="corner-right">
		<a href="https://github.com/joshcv2112/tswmaps_svelte">
			<img src={github} alt="GitHub" />
		</a>
	</div>

	{#if open}
	  <nav transition:fly={{ y: -200, duration: 400 }}>
		<a class="hamburger" href="/">Home</a>
		<a class="hamburger" href="/locos">Locos</a>
		<a class="hamburger" href="/world">World Map</a>
		<a class="hamburger" href="/support">Support</a>
		<a class="hamburger" href="https://classic.tswmaps.com/">TS Classic Maps</a>
	  </nav>
	{/if}
  </header>
  
  <style>
	@media (max-width: 1000px) {
		header {
			position: relative;
			font-size: 2rem;
			color: var(--accent-color);
			background-color: #001219;
			z-index: 1;
		}
	
		.main {
			display: flex;
			justify-content: space-between;
			height: 70px;
		}
	
		.corner-left {
			padding-left: 10px;
		}

		.corner-left:hover {
			color: #D47C2E;
			text-decoration: none;
		}
		
		.corner-left a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			font-family: Jost, sans-serif;
			font-size: 20px;
			color: white;
		}

		.corner-left img {
			width: 3em;
			height: 3em;
			object-fit: contain;
		}

		nav {
			position: absolute;
			z-index: 1;
			width: 100%;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			align-items: center;
			background-color: #001219;
		}

		a.hamburger {
			color: white;
		}

		a.hamburger:hover {
			color: #D47C2E;
		}

		.desktop {
			display: none;
		}
		.corner-right {
			display: none;
		}
		ul li {
			display: none;
		}
	}
	
	@media (min-width: 1000px) {
		header {
			display: flex;
			justify-content: space-between;
			background-color: #001219;
			height: 4em;
		}

		nav a {
			display: flex;
			height: 100%;
			align-items: center;
			padding: 0 0.5rem;
			color: #CCDAE6;
			font-weight: 700;
			font-size: 0.8rem;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			text-decoration: none;
			transition: color 0.2s linear;
		}

		ul {
			position: relative;
			padding: 0;
			margin: 0;
			height: 4em;
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			background-size: contain;
		}

		li {
			position: relative;
			height: 100%;
		}
		
		a:hover {
			color: #D47C2E;
		}

	}

	.corner-left {
		padding-left: 10px;
	}

	.corner-left:hover {
		color: #D47C2E;
		text-decoration: none;
	}
	
	.corner-left a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		font-family: Jost, sans-serif;
		font-size: 20px;
		color: white;
	}

	.corner-left img {
		width: 3em;
		height: 3em;
		object-fit: contain;
	}
	
	.corner-right {
		width: 4em;
		height: 4em;
	}
	.corner-right a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	.corner-right img {
		width: 3em;
		height: 3em;
		object-fit: contain;
}

	
</style>
  