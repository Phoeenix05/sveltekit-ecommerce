<script lang="ts">
	import ProductCard from '../components/ProductCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
    const { products } = data
</script>

<!-- <a href="/product/1">1</a> -->

<div id="product_card_list">
    {#each products as product}
        <!-- <a href="/product/{id}">
            <h1>{ title }</h1>
            <p>{ description }</p>
        </a> -->
        <ProductCard {product} />
    {/each}
</div>

<style scoped>
    #product_card_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0 2rem;
    }
</style>
