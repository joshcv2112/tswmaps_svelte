<!-- svelte-ignore a11y-click-events-have-key-events -->

<script>
    import LeafletCountryMap from '$lib/LeafletCountryMap.svelte';

    // United Kingdom
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
    import glossopLine from '../../data/routeData/glossopLine.json';
    const unitedKingdomRoutes = [glossopLine, birminghamCrossCityLine, cathcartCircle, eastCoastway, greatWesternExpress, isleOfWight, liverpoolLimeStreet, londonCommuter, midlandMainLine ,northernTransPennine, peakForest, scotRailExpress, bakerlooLine, southeasternHighSpeedTSW3, teesValleyLine, westCornwallLocal, westSommersetRailway];

    // Switzerland
    import arosalinie from '../../data/routeData/arosalinie.json';
    import sBahnZentralschweiz from '../../data/routeData/sBahnZentralschweiz.json';
    const switzerlandRoutes  = [ arosalinie, sBahnZentralschweiz ];

    // Germany
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
    import schnellfahrstreckeKasselWurzburg from '../../data/routeData/schnellfahrstreckeKasselWurzburg.json';
    import schnellfahrstreckeKolnAachen from '../../data/routeData/schnellfahrstreckeKolnAachen.json';
    import tharandterRampe from '../../data/routeData/tharandterRampe.json';
    const germanyRoutes = [ bahnstreckeBremenOldenburg, hauptstreckeHamburgLubeck, hauptstreckeMunchenAugsburg, hauptstreckeRheinRuhr, linkeRheinstrecke, mainSpessartBahn, nahverkehrDresden, niddertalbahn, rapidTransit, rheinRuhrOsten, ruhrSiegNord, schnellfahrstreckeKasselWurzburg, schnellfahrstreckeKolnAachen, tharandterRampe];

    // United States
    import bostonSprinter from '../../data/routeData/bostonSprinter.json';
    import cajonPass from '../../data/routeData/cajonPass.json';
    import caneCreek from '../../data/routeData/caneCreek.json';
    import clinchfieldRailroad from '../../data/routeData/clinchfieldRailroad.json';
    import harlemLine from '../../data/routeData/harlemLine.json';
    import horseshoeCurve from '../../data/routeData/horseshoeCurve.json';
    import longIslandRailroad from '../../data/routeData/longIslandRailroad.json';
    import necNewYorkTrenton from '../../data/routeData/necNewYorkTrenton.json';
    import peninsulaCorridor from '../../data/routeData/peninsulaCorridor.json';
    import sandPatchGrade from '../../data/routeData/sandPatchGrade.json';
    import shermanHill from '../../data/routeData/shermanHill.json';
    const northAmericaRoutes = [bostonSprinter,cajonPass,caneCreek,clinchfieldRailroad,harlemLine,horseshoeCurve,longIslandRailroad,necNewYorkTrenton,peninsulaCorridor,sandPatchGrade,shermanHill];

    // Canada
    import cnOakvilleSubdivision from '../../data/routeData/cnOakvilleSubdivision.json';
    const canadaRoutes = [ cnOakvilleSubdivision ];
    
    // France
    import lgvMediterranee from '../../data/routeData/lgvMediterranee.json';
    const franceRoutes = [ lgvMediterranee ];
 
    const mapPositions = {
        "uk": { lat: 53.93526985773823, lng: -2.1347305373923304, zoom: 6 },
        "de": { lat: 51.26182749670485, lng: 10.357099638498696, zoom: 6 },
        "us": { lat: 40.31229204317356, lng: -100.1620247238612, zoom: 4 },
        "ot": { lat: 46.88911195203755, lng: 8.379947297716916, zoom: 7.5 },
        "ca": { lat: 43.38523929759912, lng: -79.8073780578543, zoom: 8.75 },
        "fr": { lat: 46.602752892780806, lng: 2.8949222749795687, zoom: 6.4 }
    };

    let selectedRouteName = 'United Kingdom';
    let selectedRoutes = unitedKingdomRoutes;
    let current = 'uk';

    function handleClick(msg) {
        switch (msg) {
           case 'uk':
                current = 'uk';
                selectedRouteName = 'United Kingdom';
                selectedRoutes = unitedKingdomRoutes;
                break;
            case 'de':
                current = 'de';
                selectedRouteName = 'Germany';
                selectedRoutes = germanyRoutes;
                break;
            case 'us':
                current = 'us';
                selectedRouteName = 'United States';
                selectedRoutes = northAmericaRoutes;
                break;
            case 'ot':
                current = 'ot';
                selectedRouteName = 'Switzerland';
                selectedRoutes = switzerlandRoutes;
                break;
            case 'ca':
                current = 'ca';
                selectedRouteName = 'Canada';
                selectedRoutes = canadaRoutes;
                break;
            case 'fr':
                current = 'fr';
                selectedRouteName = 'France';
                selectedRoutes = franceRoutes;
                break;
        }
    }
</script>

<main>
    <div class="row">
        <div class="blockLeft">
            <h1>TSW World Map</h1>
            <div class="flagContainer">
                <div class="innerFlagContainer">
                    <!-- Should switch this to use buttons instead of divs for security reasons -->
                    <div class="flag" on:click={() => handleClick('uk')}><img class="flagImage" alt="UK-Flag" src='https://tswassets.blob.core.windows.net/assets/svgs/flags/gb.png' /></div>
                    <div class="flag" on:click={() => handleClick('de')}><img class="flagImage" alt="GE-Flag" src='https://tswassets.blob.core.windows.net/assets/svgs/flags/de.png' /></div>
                    <div class="flag" on:click={() => handleClick('us')}><img class="flagImage" alt="US-Flag" src='https://tswassets.blob.core.windows.net/assets/svgs/flags/us.png' /></div>
                    <div class="flag" on:click={() => handleClick('ot')}><img class="flagImage" alt="OT-Flag" src='https://tswassets.blob.core.windows.net/assets/svgs/flags/ch.png' /></div>
                    <div class="flag" on:click={() => handleClick('ca')}><img class="flagImage" alt="CA-Flag" src='https://tswassets.blob.core.windows.net/assets/svgs/flags/ca.png' /></div>
                    <div class="flag" on:click={() => handleClick('fr')}><img class="flagImage" alt="FR-Flag" src='https://tswassets.blob.core.windows.net/assets/svgs/flags/fr.png' /></div>
                </div>
            </div>
            <h1>{selectedRouteName}</h1>
            <div class="text">Explore all the Train Sim World routes in your favorite country, choose a flag to select a different country. Click on any given route lines on the map for additional details.</div>
            
        </div>
        <div class="blockRight">
            {#if current === 'uk'}
                <LeafletCountryMap routes={selectedRoutes} mapPosition={mapPositions['uk']} />
            {:else if current === 'de'}
                <LeafletCountryMap routes={selectedRoutes} mapPosition={mapPositions["de"]} />
            {:else if current === 'us'}
                <LeafletCountryMap routes={selectedRoutes} mapPosition={mapPositions["us"]} />
            {:else if current === 'ot'}
                <LeafletCountryMap routes={selectedRoutes} mapPosition={mapPositions["ot"]} />
            {:else if current === 'ca'}
                <LeafletCountryMap routes={selectedRoutes} mapPosition={mapPositions["ca"]} />
            {:else if current === 'fr'}
                <LeafletCountryMap routes={selectedRoutes} mapPosition={mapPositions["fr"]} />
            {/if}
        </div>
    </div>
</main>

<style>
    div.text {
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 10px;
        font-size: 20px;
    }
    div.flagContainer {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
    }
    div.innerFlagContainer {
        display: flex;
        flex-direction: row;
        margin-left: auto;
        margin-right: auto;
    }
    div.flag {
        padding: 0px;
        border: 0;
        min-width: none;
        min-height: none;
        margin: 5px;
    }
    img.flagImage {
        max-height: 80px;
        width: 100%;
        object-fit: cover;
    }
    /* TODO - setup an on hover effect for the flags. */
    @media(min-width: 1000px) {
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
    }

    @media(max-width: 1000px) {
        div.row {
            width: 100%;
            height: 100%;
        }

        div.blockLeft {
            color: white;
        }

        div.blockRight {
            padding: 30px;
            color: white; 
        }
    }
</style>
