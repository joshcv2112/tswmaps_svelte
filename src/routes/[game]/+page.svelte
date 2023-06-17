<script>


    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    const game = $page.params.game;

    let jsonData;
    let gameRoutes;
    let gameLocos;
    let gameName;
    const dataPath = `../../data/gameData/${game}.json`;

    onMount(async () => {
        jsonData = (await import(/* @vite-ignore */ dataPath)).default;
        gameRoutes = jsonData.dlcRoutes;
        gameLocos = jsonData.dlcLocos
        gameName = jsonData.name;
    });
</script>

<main>
    {#if gameRoutes}
        <h1>{gameName}</h1>

        <h2>Routes</h2>
        {#each gameRoutes as game}
            <div class="tile">
                <!-- TODO - These images are hosted by xbox, I should download and host on my own stuff -->
                <img src={game.image} alt={game.name} />
                <!-- <div>{game.name}</div>
                {#if game.altName}
                    <div>{game.altName}</div>
                {/if}
                <div>{game.path}</div> -->
            </div>
        {/each}
        <br />
        <h2>Locomotives</h2>
        {#each gameLocos as loco}
            <div class="tile">
                <img src={loco.image} alt={loco.name} />
            </div>
        {/each}
    {:else}
        <div class="loading-message">loading . . .</div>
    {/if}
</main>

<style>
    h1 {
        color: #D47C2E;
    }

    h2 {
        color: #D47C2E;
        text-align: left;
        font-size: 28px;
        padding-left: 20px;
    }

    div.tile {
        display:  inline-block;
        padding: 5px;
    }

    div.tile:hover {
        transform: scale(1.075); 
    }

    div.loading-message {
        color: white;
    }
</style>