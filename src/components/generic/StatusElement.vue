<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  status: {
    type: String,
    required: true
  }
})
const statusClass = `card-status-area ${props.status.toLowerCase()}`
const statusSrc = `./status/${props.status.toLowerCase()}.svg`
</script>

<template>
  <div :class="statusClass">
    <img :src="statusSrc" alt="" />
    {{ props.status }}
  </div>
</template>

<style scoped>
div.card-status-area {
  font-size: 1rem;
  font-weight: 400;
  display: inline-flex;
  padding: 4px 8px;
  gap: 10px;
  align-items: center;
  border-radius: 0px 8px 8px 0px;
  position: absolute;
  bottom: 16px;
  left: 0;

  img {
    width: 15px;
    height: 15px;
  }
}

div.unknown {
  background-color: var(--disable);
  color: var(--Primary, #1e2838);
}

div.alive {
  background: var(--Sucsess, #b3e028);
  color: var(--Primary, #1e2838);
}

div.dead {
  background: var(--error, #e03328);
  color: var(--white, #f6feff);
}

@media screen and (max-width: 744px) {
  div.status-area {
    padding: 4px 8px;
    align-items: center;
    gap: 4px;
  }
}
</style>
