<script>
    export let imageUrl;
    export let title;
    export let url;
</script>

<div class="tile">
    <a href={url}>
        <div class="image" style="--image: url({imageUrl});">
            <div class="caption-container">
                <!-- TODO - Setup TM superscript  -->
                <!-- <div class="caption">TRAIN SIM WORLD<div class="super">TM</div> 3</div> -->
                <div class="caption">{title}</div>
            </div>
        </div>
    </a>
</div>

<style>
    @media (min-width: 1000px) {
        div.tile {
            display: block;
            float: left;
            min-width: 25%;
            height: 500px;
            max-width: 424px;
        }

        div.image {
            height: 100%;
            /* margin-left: 3px;
            margin-right: 3px; */
            background-image: var(--image);
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            position: relative;
        }

        div.image:hover div.caption-container {
            background-color: #D47C2E;
            opacity: 100%;
        }

        div.caption-container {
            background-color: #1d2834;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 60px;
            opacity: 85%;
        }

        div.caption {
            color: #FFF;
            font-size: 1.25rem;
            top: 50%;
            margin: 1.25rem;
        }
    }
    

    @media (max-width: 1000px) {
        div.tile {
            height: 300px;
            max-width: 90%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 10px;
        }

        div.image {
            height: 100%;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            background-image: var(--image);
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            position: relative;
        }

        div.image:hover div.caption-container {
            background-color: #D47C2E;
            opacity: 100%;
        }

        div.caption-container {
            background-color: #1d2834;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 60px;
            opacity: 85%;
        }

        div.caption {
            color: #FFF;
            font-size: 1.25rem;
            top: 50%;
            margin: 1.25rem;
        }
    }

    
</style>