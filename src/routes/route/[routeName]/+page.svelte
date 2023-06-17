<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    const routeName = $page.params.routeName;

    import LeafletMap from '$lib/LeafletMap.svelte';
    import RouteInfo from '$lib/RouteInfo.svelte';

    const dataPath = `../../../data/routeData/${routeName}.json`;
    let routeData;
    onMount(async () => {
        routeData = (await import(/* @vite-ignore */ dataPath)).default;
        console.log('ayo' + JSON.stringify(routeData));
    });
</script>

<main>
    <div class="row">
        <div class="blockLeft">
            {#if routeData}
                <h1>{routeData.name}</h1>
                <h1>{routeData.location}</h1>
                <RouteInfo info={routeData.routeFacts} />
            {:else}
                <h1>loading...</h1>
            {/if}
        </div>
        <div class="blockRight">
            <!-- TODO - have a default map for if/when the main map isn't loaded -->
            <LeafletMap />
        </div>
    </div>
</main>

<pre>
    {JSON.stringify(routeData)}
</pre>

<style>
    @import 'leaflet/dist/leaflet.css';
    main div {
        height: 800px;
    }

    div.row {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    div.blockLeft {
        display: inline-block;
        width: 45%;
        color: white;
    }

    div.blockRight {
        display: inline-block;
        width: 55%;
        color: white;
    }
</style>
