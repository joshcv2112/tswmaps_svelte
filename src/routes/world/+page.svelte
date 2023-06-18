<script>
    import LeafletCountryMap from '$lib/LeafletCountryMap.svelte';
</script>

<main>
    <div class="row">
        <div class="blockLeft">
            <h1>TSW World Map</h1>
            <div>view all available routes from the TSW by country</div>
            <div>Eventually I'll set this up so that you can select a single country and the map will update in real time, according to your selection.</div>
        </div>
        <div class="blockRight">
            <LeafletCountryMap />    
        </div>
    </div>
</main>

<style>
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
