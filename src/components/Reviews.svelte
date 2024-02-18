<script>
  import ReviewCard from "./ReviewCard.svelte";
  import SectionWrapper from "./SectionWrapper.svelte";
  import Stars from "./Stars.svelte";

  let lim = true;

  export let reviewsList;
</script>

<SectionWrapper id="reviews" {reviewsList}>
  <div class="ks">
    <!-- Titulo -->
    <div class="bc">
      <p class="E1">Rambosa</p>
      <h3 class="S9">
        Nuestro <span class="U9">Menú</span> del día
      </h3>
    </div>
    <!-- Form para crear un menu item -->
    <form method="POST">
        <input name="name" autocomplete="off" placeholder="name"/>
        <input name="price" type="number" placeholder="price"/>
        <input name="description" placeholder="description">
        <button>add</button>
    </form>
    <!-- Loop para crear los cards -->
    <div class="bf">
      <div class="QD">
        {#each lim ? reviewsList.slice(0, 4) : reviewsList as reviewItem, index}
          <ReviewCard {reviewItem} left={true} {index} />
        {/each}
      </div>
      <div class="KR"></div>
      <div class="dV">
        {#each lim ? reviewsList.slice(0, 4) : reviewsList as reviewItem, index}
          <ReviewCard {reviewItem} {index} />
        {/each}
      </div>
    </div>
    <button on:click={() => (lim = !lim)} class="K3">
      <p>{lim ? "Ver mas" : "Ver menos"}</p>
    </button>
    <div class="Jj">
      <p class="c1">Trusted by 1,349 Swoldiers</p>
      <Stars />
    </div>
  </div>
</SectionWrapper>
