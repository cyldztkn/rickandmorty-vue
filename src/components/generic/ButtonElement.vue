<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  type: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button v-if="props.type == 'submit'" submit>Submit</button>
  <button v-else class="pagination-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
      <path
        d="M6.1 8.5L0 2.36667L1.86667 0.5L9.86667 8.5L1.86667 16.5L0 14.6333L6.1 8.5ZM14.9 8.5L8.8 2.36667L10.6667 0.5L18.6667 8.5L10.6667 16.5L8.8 14.6333L14.9 8.5Z"
        fill="#1E2838"
      />
    </svg>
  </button>
</template>

<style>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-default);
  color: var(--primary);
  padding: 16px 8px;
  border-radius: 8px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: var(--input-transition);
  border: none;
}

button:hover {
  box-shadow: var(--input-focus-shadow);
  border: 1px solid var(--white);
}

button:active {
  background-color: var(--secondary-dark);
}

button.pagination-button {
  height: 52px;
  margin: 0px auto;
}
</style>
