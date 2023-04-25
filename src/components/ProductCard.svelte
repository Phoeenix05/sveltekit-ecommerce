<script lang="ts">
	// export let id: string;
	// export let title: string;
	// export let description: string;

    export let product: Product;
</script>

<!-- <p>Product id is {id}</p> -->
<a data-sveltekit-preload-data href="/product/{product.id}" id="product_card">
    <h1>{ product.title }</h1>
    <p>{ product.description }</p>
</a>

<style scoped>
    #product_card {
        width: 500px;
    }
</style>
