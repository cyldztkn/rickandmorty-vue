<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  chacked: {
    type: String,
    required: true
  },
  inner: {
    type: String,
    required: true
  }
})
let htmlFor = props.inner == 'UnknownSpacies' ? 'UnknownSpacies' : props.inner
let inputname = props.inner == 'UnknownSpacies' ? 'UnknownSpacies' : props.inner
let inner = props.inner == 'UnknownSpacies' ? 'Unknow' : props.inner
</script>

<template>
  <label :for="htmlFor">
    <input type="checkbox" :name="inputname" :id="inputname" :checked="props.chacked" />
    {{ inner }}
  </label>
</template>
