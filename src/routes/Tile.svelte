<script>
    // TODO - pass the image url/path from props instead of hardcoding it.
    import sandPatchGradeImg from '$lib/images/sandPatchGrade-tile.jpg';
</script>

<tile class='tile'>
    <div class="tile-caption">Game<br/>Train Sim World</div>
    <img class="tile" src={sandPatchGradeImg} alt="spg"/>
</tile>

<style>

    tile.tile {
        width: 25%;
        height: auto;
        position: relative;
        display: block;
        float: left;
    }

    div.tile-caption {
        position: absolute;
        width: 100%;
        height: 13%;
        background: #001219;
        color: white;
        opacity: 0.8;
        bottom: 0;
    }

    img.tile {
        min-width: 100%;
        min-height: 100%;
    }

    tile.tile:hover, div.tile-caption:hover {
        background: blue;
    }

</style>