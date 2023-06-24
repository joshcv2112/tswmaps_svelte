<script>
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';

    export let routes;
    export let mapPosition;

    let mapElement;
    let map;

    const colors = [
        "#FF0000","#00FF00","#0000FF","#FFFF00","#FFA500","#800080","#5ED093","#A52A2A","#000000","#008000","#808080","#00FFFF","#9400D3","#7a0505","#FFD700","#FFA500","#0000FF","#A52A2A","#FF0000"
    ];

    onMount(async () => {
        if(browser) {
            const leaflet = await import('leaflet');

            map = leaflet.map(mapElement).setView(L.latLng(mapPosition.lat, mapPosition.lng), mapPosition.zoom);

            leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);


            for (let i = 0; i < routes.length; i += 1) {
                leaflet.geoJSON(routes[i].routeDetails.features, { color: colors[i], weight: 3 }).addTo(map);
            }
        }
    });

    onDestroy(async () => {
        if(map) {
            map.remove();
        }
    });
</script>


<main>
    <div bind:this={mapElement}></div>
</main>

<style>
    @import 'leaflet/dist/leaflet.css';
    main div {
        height: 800px;
    }
</style>
