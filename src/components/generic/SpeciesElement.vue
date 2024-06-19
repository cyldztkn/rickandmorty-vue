<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  species: {
    type: String,
    required: true
  }
})

const imgSrc = `./species/${
  props.species == 'Mythological Creature' ? 'mytologycal' : props.species.toLowerCase()
}.svg`
</script>

<template>
  <div class="species-area">
    <img :src="imgSrc" alt="" />
    {{ props.species }}
  </div>
</template>

<style scoped>
div.species-area {
  color: var(--white, #f6feff);

  /* caption/light */
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  display: inline-flex;
  padding: 4px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

@media screen and (max-width: 744px) {
  div.species-area {
    padding: 4px 0px;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    gap: 4px;
  }
}
</style>
