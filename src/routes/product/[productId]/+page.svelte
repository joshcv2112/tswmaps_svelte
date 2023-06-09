<script>
    import { page } from '$app/stores';
    const productId = $page.params.productId;

    // import routeData from `../../../data/routeData/tsw2/harlemLine.json`;
</script>

<h1>Details about product {productId}</h1>
<pre>
    {JSON.stringify($page, null, 2)}
</pre>

<!-- <pre>
    {JSON.stringify(routeData, null, 2)}
</pre> -->