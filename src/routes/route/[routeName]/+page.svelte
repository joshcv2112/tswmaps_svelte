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
    });
</script>

<div class="main">
    {#if routeData}
    <div class="row">
        <div class="blockLeft">
                <h1>{routeData.name}</h1>
                <h1>{routeData.location}</h1>
                <RouteInfo info={routeData.routeFacts} />
        </div>
        <div class="blockRight">
            <LeafletMap data={routeData} />
        </div>
    </div>
    {:else}
        <h1>Loading . . .</h1>
    {/if}
</div>

<style>
    @import 'leaflet/dist/leaflet.css';
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
        overflow-y: scroll;
    }

    div.blockRight {
        display: inline-block;
        width: 55%;
        color: white;
    }
</style>
