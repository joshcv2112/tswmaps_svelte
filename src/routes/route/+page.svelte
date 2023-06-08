<script>
    import LeafletMap from '$lib/LeafletMap.svelte';
</script>

<main>
    <div class="row">
        <div class="blockLeft">
            <h1>Harlem Line</h1>
        </div>
        <div class="blockRight">
            <LeafletMap />
        </div>
    </div>
</main>

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
