<script>
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';

    let mapElement;
    let map;

    export let data;

    onMount(async () => {
        if(browser) {
            const leaflet = await import('leaflet');

            map = leaflet.map(mapElement).setView(L.latLng(data.initialCenter.lat, data.initialCenter.lng), data.zoom);

            leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // setup something to set the marker color by item type. 
            data.markers.forEach(marker => {
                let popupText = `${marker.type}: ${marker.hint}`;
                console.log(JSON.stringify(marker));
                leaflet.marker([marker.lat, marker.lng]).addTo(map).bindPopup(popupText);
            });            

            const geoJSON = data.routeDetails.features;
            leaflet.geoJSON(geoJSON, {color: "#FF0000", weight: 4}).addTo(map);
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
        height: 700px;
    }
</style>
