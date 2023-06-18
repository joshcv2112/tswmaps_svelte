<script>
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';

    let mapElement;
    let map;

    // TODO -- make simplified GEOJSON for world map, and put em all in a single json File,
    //         that will make it super easy to loop through and use.
    import bakerlooLine from '../data/routeData/bakerlooLine.json';
    import birminghamCrossCityLine from '../data/routeData/birminghamCrossCityLine.json';
    import cathcartCircle from '../data/routeData/cathcartCircle.json';
    import eastCoastway from '../data/routeData/eastCoastway.json';
    import greatWesternExpress from '../data/routeData/greatWesternExpress.json';
    import isleOfWight from '../data/routeData/isleOfWight.json';
    import liverpoolLimeStreet from '../data/routeData/liverpoolLimeStreet.json';
    import londonCommuter from '../data/routeData/londonCommuter.json';
    import midlandMainLine from '../data/routeData/midlandMainLine.json';
    import northernTransPennine from '../data/routeData/northernTransPennine.json';
    import peakForest from '../data/routeData/peakForest.json';
    import scotRailExpress from '../data/routeData/scotRailExpress.json';
    import southeasternHighSpeedTSW3 from '../data/routeData/southeasternHighSpeedTSW3.json';
    import teesValleyLine from '../data/routeData/teesValleyLine.json';
    import westCornwallLocal from '../data/routeData/westCornwallLocal.json';
    import westSommersetRailway from '../data/routeData/westSommersetRailway.json';
    const dataImports = [bakerlooLine, birminghamCrossCityLine, cathcartCircle, eastCoastway, greatWesternExpress, isleOfWight, liverpoolLimeStreet, londonCommuter, midlandMainLine ,northernTransPennine, peakForest, scotRailExpress, southeasternHighSpeedTSW3, teesValleyLine, westCornwallLocal, westSommersetRailway];

    const colors = [
        "#FF0000","#00FF00","#0000FF","#FFFF00","#FFA500","#800080","#FFC0CB","#A52A2A","#000000","#008000","#808080","#00FFFF","#9400D3","#7a0505","#FFD700",
    ];

    onMount(async () => {
        if(browser) {
            const leaflet = await import('leaflet');

            map = leaflet.map(mapElement).setView(L.latLng(53.93526985773823, -2.1347305373923304), 6.25);

            leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);


            for (let i = 0; i < dataImports.length; i += 1) {
                leaflet.geoJSON(dataImports[i].routeDetails.features, { color: colors[i], weight: 4 }).addTo(map);
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
