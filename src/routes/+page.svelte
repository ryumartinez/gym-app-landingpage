<script>
    import Conversion from "../components/Conversion.svelte";
    import FaQs from "../components/FAQs.svelte";
    import Hero from "../components/Hero.svelte";
    import Product from "../components/Product.svelte";
    import Reviews from "../components/Reviews.svelte";
    export let data
</script>

<main class="flex flex-col">
    {#each data.menuItems as { name, price }}
		<li><p>{name}{price}</p></li>
	{/each}
    <!-- <Hero />
    <Product /> -->
    <Reviews />
    <!-- <FaQs /> -->
    <!-- <Conversion /> -->
</main>
