<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import logo from '$lib/images/noun-train-446715-FFFFFF.svg';
	import hamburgerMenu from '$lib/images/hamburger.svg';

	import { fly } from 'svelte/transition';
	import AnimatedHamburger from '../lib/AnimatedHamburger.svelte';
	export let open = false;
	export let onClick = () => {
        open = !open;
    }
</script>

<header>
	<div class="corner-left">
		<a class="corner-left" href="/">
			<img src={logo} alt="TSW Maps" />
			TSW Maps
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/support' ? 'page' : undefined}>
				<a href="/support">Support</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="https://classic.tswmaps.com/">TS Classic Maps</a>
			</li>
		</ul>
	</nav>

	{#if open}
		<nav transition:fly={{ y: -200, duration: 400 }}>
			<a href="https://magrippis.com/tube">Videos</a>
			<a href="https://magrippis.com/blog">Blogposts</a>
			<a href="https://magrippis.com/tube">Guides</a>
			<a href="https://magrippis.com/tube">Portfolio</a>
			<a href="https://magrippis.com/milestones">Milestones</a>
		</nav>
	{/if}

	<div class="corner-right">
		<a href="https://github.com/joshcv2112/tswmaps_svelte">
			<img src={github} alt="GitHub" />
		</a>
	</div>

	<div class="corner-right-menu">
		<a class="corner-right-menu" href="/">
			<!-- <img src={hamburgerMenu} alt="TSW Maps" /> -->
			<AnimatedHamburger {open} {onClick} />
		</a>
	</div>
</header>

<style>	
	@media (min-width: 1000px) {
		header {
			display: flex;
			justify-content: space-between;
			background-color: #001219;
			height: 4em;
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

		.corner-right-menu {
			display: none;
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

		a:hover {
			color: #D47C2E;
		}
	}

	@media (max-width: 1000px) {
		
		
		.corner-right-menu {
			width: 4em;
			height: 4em;
		}

		.corner-right-menu a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
		}

		.corner-right-menu img {
			width: 3em;
			height: 3em;
			object-fit: contain;
			max-height: 25px;
		}

		.corner-right {
			
		}

		ul {
			display: none;
		}

		li {
			display: none;
		}
	}

	header {
		display: flex;
		justify-content: space-between;
		background-color: #001219;
	}

	.corner-left {
		width: 12em;
		height: 4em;
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
</style>
