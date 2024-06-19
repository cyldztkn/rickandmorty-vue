<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  img: {
    type: String,
    required: true
  }
})

</script>

<template>
    <div class="CharacterImg">
        <img :src="props.img" alt="">
    </div>

</template>

<style scoped>
div.CharacterImg {
    flex: 1 0 40%;
    height: 92dvh;
    padding: 24px;
    border-radius: 24px;
    background: var(--Primary, #1E2838);
    box-shadow: var(--main-shadow);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;

    }
}
</style>