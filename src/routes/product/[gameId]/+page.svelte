<script>
import { onMount } from 'svelte';
import { page } from '$app/stores';
const gameId = $page.params.gameId;
let jsonData;

onMount(async () => {
    jsonData = (await import(`../../../data/gameData/${gameId}.json`)).default;
});
</script>

<pre>
    ayo
    {gameId}
    {JSON.stringify(jsonData, null, 2)}
</pre>