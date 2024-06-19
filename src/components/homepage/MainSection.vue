<script setup></script>

<template>
  <main>
    <div class="articles-container">
      <slot name="articles"></slot>
    </div>
    <div class="button-container">
      <slot name="button"></slot>
    </div>
  </main>
</template>

<style>
main {
  background-color: var(--primary);
  box-shadow: var(--main-shadow);
  border-radius: 20px 0px 0px 20px;
  max-height: 92dvh;
  overflow-y: auto;
  flex: 18 0 0;
  padding: 28px;
  div.button-container {
    width: 100%;
  }

  div.articles-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 12px;

    a {
      flex: 25% 1 auto;
      max-width: 250px;
      min-width: 18%;
      aspect-ratio: 168/236;
      /* padding: 0; */
    }
  }
}

@media screen and (max-width: 744px) {
  main {
    border-radius: 20px;
    margin: 20px;
    padding: 24px;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
