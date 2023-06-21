<script>
    import LeafletCountryMap from '$lib/LeafletCountryMap.svelte';

    // TODO -- make simplified GEOJSON for world map, and put em all in a single json File,
    //         that will make it super easy to loop through and use.
    import bakerlooLine from '../../data/routeData/bakerlooLine.json';
    import birminghamCrossCityLine from '../../data/routeData/birminghamCrossCityLine.json';
    import cathcartCircle from '../../data/routeData/cathcartCircle.json';
    import eastCoastway from '../../data/routeData/eastCoastway.json';
    import greatWesternExpress from '../../data/routeData/greatWesternExpress.json';
    import isleOfWight from '../../data/routeData/isleOfWight.json';
    import liverpoolLimeStreet from '../../data/routeData/liverpoolLimeStreet.json';
    import londonCommuter from '../../data/routeData/londonCommuter.json';
    import midlandMainLine from '../../data/routeData/midlandMainLine.json';
    import northernTransPennine from '../../data/routeData/northernTransPennine.json';
    import peakForest from '../../data/routeData/peakForest.json';
    import scotRailExpress from '../../data/routeData/scotRailExpress.json';
    import southeasternHighSpeedTSW3 from '../../data/routeData/southeasternHighSpeedTSW3.json';
    import teesValleyLine from '../../data/routeData/teesValleyLine.json';
    import westCornwallLocal from '../../data/routeData/westCornwallLocal.json';
    import westSommersetRailway from '../../data/routeData/westSommersetRailway.json';
    const unitedKingdomRoutes = [bakerlooLine, birminghamCrossCityLine, cathcartCircle, eastCoastway, greatWesternExpress, isleOfWight, liverpoolLimeStreet, londonCommuter, midlandMainLine ,northernTransPennine, peakForest, scotRailExpress, southeasternHighSpeedTSW3, teesValleyLine, westCornwallLocal, westSommersetRailway];

    // TODO --- Make separate one for switzerland?
    import arosalinie from '../../data/routeData/arosalinie.json';
    import bahnstreckeBremenOldenburg from '../../data/routeData/bahnstreckeBremenOldenburg.json';
    import hauptstreckeHamburgLubeck from '../../data/routeData/hauptstreckeHamburgLubeck.json';
    import hauptstreckeMunchenAugsburg from '../../data/routeData/hauptstreckeMunchenAugsburg.json';
    import hauptstreckeRheinRuhr from '../../data/routeData/hauptstreckeRheinRuhr.json';
    import linkeRheinstrecke from '../../data/routeData/linkeRheinstrecke.json';
    import mainSpessartBahn from '../../data/routeData/mainSpessartBahn.json';
    import nahverkehrDresden from '../../data/routeData/nahverkehrDresden.json';
    import niddertalbahn from '../../data/routeData/niddertalbahn.json';
    import rapidTransit from '../../data/routeData/rapidTransit.json';
    import rheinRuhrOsten from '../../data/routeData/rheinRuhrOsten.json';
    import ruhrSiegNord from '../../data/routeData/ruhrSiegNord.json';
    import sBahnZentralschweiz from '../../data/routeData/sBahnZentralschweiz.json';
    import schnellfahrstreckeKasselWurzburg from '../../data/routeData/schnellfahrstreckeKasselWurzburg.json';
    import schnellfahrstreckeKolnAachen from '../../data/routeData/schnellfahrstreckeKolnAachen.json';
    import tharandterRampe from '../../data/routeData/tharandterRampe.json';
    const germanyRoutes = [arosalinie, bahnstreckeBremenOldenburg, hauptstreckeHamburgLubeck, hauptstreckeMunchenAugsburg, hauptstreckeRheinRuhr, linkeRheinstrecke, mainSpessartBahn, nahverkehrDresden, niddertalbahn, rapidTransit, rheinRuhrOsten, ruhrSiegNord, sBahnZentralschweiz, schnellfahrstreckeKasselWurzburg, schnellfahrstreckeKolnAachen, tharandterRampe];

    // TODO --- Make separate one for Canada?
    import bostonSprinter from '../../data/routeData/bostonSprinter.json';
    import cajonPass from '../../data/routeData/cajonPass.json';
    import caneCreek from '../../data/routeData/caneCreek.json';
    import clinchfieldRailroad from '../../data/routeData/clinchfieldRailroad.json';
    import cnOakvilleSubdivision from '../../data/routeData/cnOakvilleSubdivision.json';
    import harlemLine from '../../data/routeData/harlemLine.json';
    import horseshoeCurve from '../../data/routeData/horseshoeCurve.json';
    import longIslandRailroad from '../../data/routeData/longIslandRailroad.json';
    import necNewYorkTrenton from '../../data/routeData/necNewYorkTrenton.json';
    import peninsulaCorridor from '../../data/routeData/peninsulaCorridor.json';
    import sandPatchGrade from '../../data/routeData/sandPatchGrade.json';
    import shermanHill from '../../data/routeData/shermanHill.json';
    const northAmericaRoutes = [bostonSprinter,cajonPass,caneCreek,clinchfieldRailroad,cnOakvilleSubdivision,harlemLine,horseshoeCurve,longIslandRailroad,necNewYorkTrenton,peninsulaCorridor,sandPatchGrade,shermanHill];

    // TODO - add France's map

    // TODO - I think this is too heavy to have the map reload without the page itself reloading. let's redo this with each country having its own link.
 
    const mapPositions = {
        "uk": { lat: 53.93526985773823, lng: -2.1347305373923304, zoom: 6 },
        "de": { lat: 51.26182749670485, lng: 10.357099638498696, zoom: 6 },
        "na": { lat: 40.31229204317356, lng: -100.1620247238612, zoom: 4.4 }
    };

    let selectedRoutes = unitedKingdomRoutes;
    let current = 'uk';

    function handleClick(msg) {
        switch (msg) {
           case 'uk':
                current = 'uk';
                selectedRoutes = unitedKingdomRoutes;
                break;
            case 'de':
                current = 'de';
                selectedRoutes = germanyRoutes;
                break;
            case 'na':
                current = 'na';
                selectedRoutes = northAmericaRoutes;
                break;
        }
    }
</script>

<main>
    <div class="row">
        <div class="blockLeft">
            <h1>TSW World Map</h1>
            <div on:click={() => handleClick('uk')}>United Kingdom</div>
            <div on:click={() => handleClick('de')}>Germany</div>
            <div on:click={() => handleClick('na')}>North America</div>
            <div>view all available routes from the TSW by country</div>
            <div>Eventually I'll set this up so that you can select a single country and the map will update in real time, according to your selection.</div>
        </div>
        <div class="blockRight">
            {#if current === 'uk'}
                <LeafletCountryMap routes={selectedRoutes} mapPosition={mapPositions['uk']} zoom={3} testVar={current} />
            {:else if current === 'de'}
                <LeafletCountryMap routes={selectedRoutes} mapPosition={mapPositions["de"]} zoom={3} testVar={current} />
            {:else if current === 'na'}
                <LeafletCountryMap routes={selectedRoutes} mapPosition={mapPositions["na"]} zoom={3} testVar={current} />
            {/if}
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
