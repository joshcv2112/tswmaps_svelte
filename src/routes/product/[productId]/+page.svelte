<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    const productId = $page.params.productId;

    let jsonData;
    const dataPath = `../../../data/routeData/tsw2/${productId}.json`;
    

    onMount(async () => {
        jsonData = (await import(`../../../data/routeData/tsw2/${productId}.json`)).default;
    });
</script>


<pre>
    {dataPath}
</pre>

<pre>
    {JSON.stringify(jsonData, null, 2)}
</pre>

<h1>Details about product {productId}</h1>
<pre>
    {JSON.stringify($page, null, 2)}
</pre>
