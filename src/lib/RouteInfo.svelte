<script>
    export let info;
</script>

<main>
    <div>
        <div class="description">{info.description}</div>
        {#each info.routeInfo as paragraph, i}
            <div class="description">{paragraph}</div>
        {/each}
        <table>            
            <tr>
                <th>Country</th>
                <td>{info.country}</td>
            </tr>
            <tr>
                <th>Operators</th>
                <td>{info.operators}</td>
            </tr>
            <tr>
                <th>Release Date</th>
                <td>{info.releaseDate}</td>
            </tr>
            <tr>
                <th>Designer</th>
                <td>{info.designer}</td>
            </tr>
            <tr>
                <th>Length</th>
                <td>{info.length}</td>
            </tr>
            <tr>
                <th>Signal System</th>
                <td>{info.signalSystem}</td>
            </tr>
            <tr>
                <th>Locomotives</th>
                <td>{info.locomotives}</td>
            </tr>
            <tr>
                <th>Wiki URL</th>
                <td><a href="{info.wikiUrl}">{info.name}</a></td>
            </tr>
          </table> 
        <div class="attribution">This article uses material from the <a class="attributionLink" href={info.wikiUrl} target="_blank">"{info.name}" article</a> on the <a class="attributionLink" href="https://train-sim-world.fandom.com/wiki/Train_Sim_World_Wiki" target="_blank">Train Sim World wiki</a> at <a class="attributionLink" href="https://www.fandom.com/" target="_blank">Fandom</a> and is licensed under the <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike License</a>.</div>
    </div>
</main>

<style>
    div.description {
        margin-left: 25px;
        margin-right: 25px;
        margin-bottom: 15px;
    }

    table {
        margin-left: auto;
        margin-right: auto;
    }

    th {
        margin: 15px;
    }

    div.attribution {
        font-size: 12px;
        padding-top: 2em;
        padding-left: 15px;
        padding-right: 15px;
    }

    @media (max-width: 1000px) {
        div.attribution {
            display: none;
        }
    }
</style>
