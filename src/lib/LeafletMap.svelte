<script>
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';

    import routeData from '../data/routeData/harlemLine.json';

    let mapElement;
    let map;

    onMount(async () => {
        if(browser) {
            const leaflet = await import('leaflet');

            map = leaflet.map(mapElement).setView([51.505, -0.09], 13);

            leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            leaflet.marker([51.5, -0.09]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();

            var myGeoJSON = [{
                "type": "LineString",
                "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
            }, {
                "type": "LineString",
                "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
            }];
            leaflet.geoJSON(myGeoJSON).addTo(map);
        }
    });

    onDestroy(async () => {
        if(map) {
            console.log('Unloading Leaflet map.');
            map.remove();
        }
    });

    console.log(routeData);
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
