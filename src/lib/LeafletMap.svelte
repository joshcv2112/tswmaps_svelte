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

            // Use this to mark collectibles??
            // leaflet.marker([51.5, -0.09]).addTo(map)
            //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');

            const geoJSON = data.routeDetails.features;
            leaflet.geoJSON(geoJSON, {color: "#FF0000", weight: 4}).addTo(map);
        }
    });

    onDestroy(async () => {
        if(map) {
            console.log('Unloading Leaflet map.');
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
