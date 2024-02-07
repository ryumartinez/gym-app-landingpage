<script>
    import Conversion from "../components/Conversion.svelte";
    import FaQs from "../components/FAQs.svelte";
    import Hero from "../components/Hero.svelte";
    import Product from "../components/Product.svelte";
    import Reviews from "../components/Reviews.svelte";
    export let data

    let reviewsList = [
        {
            name: "Pollo al horno",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
            features: [
                "Personalized workout plans",
                "Community features",
                "Workout recommendation system",
            ],
        },
        {
            name: "Omelette",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
            features: [
                "Guided workouts",
                "Meal logging and tracking",
                "User-friendly interface",
            ],
        },
        {
            name: "Tallarín",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
            features: [
                "Variety of workout routines and challenges",
                "Nutrition tips",
                "Progress tracking and challenges",
            ],
        },
        {
            name: "Estofado",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
            features: [
                "Quick and effective workouts",
                "Timer feature",
                "Variety of workouts",
            ],
        },
        {
            name: "Milanesa",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
            features: [
                "Advanced workout programs",
                "Customization options",
                "Detailed data analysis",
            ],
        },
        {
            name: "Guiso de arroz",
            review: "Swoley Moley has helped me overcome my fear of going to the gym. The encouraging community and supportive environment have made me feel comfortable and confident. I love the social features that allow me to connect with other fitness enthusiasts and share my progress.",
            features: [
                "Supportive community",
                "Social features",
                "Encouraging environment",
            ],
        },
        {
            name: "Asado a la olla",
            review: "Swoley Moley is more than just a fitness app; it's a lifestyle change. It's helped me develop healthy habits and make better choices about my diet and exercise. I'm incredibly grateful for this app and the positive impact it's had on my life.",
            features: [
                "Focus on healthy habits",
                "Nutritional guidance",
                "Positive lifestyle impact",
            ],
        },
    ];
</script>

<main class="flex flex-col">
    {#each data.menuItems as { name, price }}
		<li><p>{name}{price}</p></li>
	{/each}
    <!-- <Hero />
    <Product /> -->
    <Reviews  {reviewsList}/>
    <!-- <FaQs /> -->
    <!-- <Conversion /> -->
</main>
