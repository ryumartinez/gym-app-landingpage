<script>
    import ReviewCard from "./ReviewCard.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    import Stars from "./Stars.svelte";

    let lim = true;

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

<SectionWrapper id="reviews">
    <div class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center">
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                Rambosa
            </p>
            <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
                Nuestro <span class="text-indigo-400">Menú</span> del día
            </h3>
        </div>
        <!-- Loop para crear los cards -->
        <div class="flex flex-col md:flex-row gap-8 w-fit mx-auto">
            <div class="flex flex-col gap-8">
                {#each lim ? reviewsList.slice(0, 4) : reviewsList as reviewItem, index}
                    <ReviewCard {reviewItem} left={true} {index} />
                {/each}
            </div>
            <div class="w-[1px] bg-slate-950 hidden md:flex"></div>
            <div class="flex flex-col gap-8">
                {#each lim ? reviewsList.slice(0, 4) : reviewsList as reviewItem, index}
                    <ReviewCard {reviewItem} {index} />
                {/each}
            </div>
        </div>
        <button on:click={() => (lim = !lim)} class="specialBtn">
            <p>{lim ? "Ver mas" : "Ver menos"}</p>
        </button>
        <div class="flex flex-col gap-10">
            <p class="mx-auto text-lg sm:text-xl md:text-2xl font-semibold">
                Trusted by 1,349 Swoldiers
            </p>
            <Stars />
        </div>
    </div>
</SectionWrapper>
