<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    const gameId = $page.params.gameId;

    let jsonData, gameRoutes, gameLocos, gameName, gameSysnopsis, routesCopy, locosCopy;
    const dataPath = `../../../data/gameData/${gameId}.json`;

    onMount(async () => {
        jsonData = (await import(/* @vite-ignore */ dataPath)).default;
        gameRoutes = jsonData.dlcRoutes;
        gameLocos = jsonData.dlcLocos
        gameName = jsonData.name;
        gameSysnopsis = jsonData.synopsis;
        routesCopy = jsonData.routesCopy;
        locosCopy = jsonData.locosCopy;
    });
</script>

<main>
    {#if gameRoutes}
        <h1>{gameName}</h1>
        <div class="synopsis">{gameSysnopsis}</div>
        <hr/>
        <h1>Routes</h1>
        <div class="synopsis">{routesCopy}</div>
        <div class="tile-container">
            {#each gameRoutes as game}
                <div class="tile">
                    <!-- TODO - These images are hosted by xbox, I should download and host on my own stuff -->
                    <a href={'/route'+game.path}><img src={game.image} alt={game.name} /></a>
                    <!-- <div>{game.name}</div>
                    {#if game.altName}
                        <div>{game.altName}</div>
                    {/if}
                    <div>{game.path}</div> -->
                </div>
            {/each}
        </div>
        <br />
        <hr/>
        <h1>Locomotives</h1>
        <div class="synopsis">{locosCopy}</div>
        <div class="tile-container">
            {#each gameLocos as loco}
                <div class="tile">
                    <img src={loco.image} alt={loco.name} />
                </div>
            {/each}
        </div>
        <br />
        <hr />
        <h1>Show tiles for other TSW games, and stuff here.</h1>
    {:else}
        <div class="loading-message">loading . . .</div>
    {/if}
</main>

<style>
    h1 {
        color: #D47C2E;
    }

    hr {
        height: 1px;
        color: #D47C2E;
        background-color: #D47C2E;
    }

    div.tile {
        display:  inline-block;
        padding: 15px;
    }

    div.tile:hover {
        transform: scale(1.075); 
    }

    div.loading-message {
        color: white;
    }

    div.synopsis {
        color: white;
        font-size: 20px;
        margin: 25px 75px 25px 75px;
        line-height: 1.25;
    }

    div.tile-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    @media (max-width: 1000px) {
        div.synopsis {
            margin: 25px 40px 25px 40px;
        }

        div.tile {
            padding: 10px;
        }
    }
</style>