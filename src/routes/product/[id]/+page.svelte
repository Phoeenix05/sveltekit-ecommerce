<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
    const product: Product = data.data
</script>

<!-- <img src={data.thumbnail} alt=""> -->
<h1>{ product.title }</h1>
<p>{ product.description }</p>