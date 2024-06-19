<script setup>
import { onMounted, ref, reactive } from 'vue';

import CharacterImage from '@/components/character/CharacterImage.vue';
import CharacterInfo from '@/components/character/CharacterInfo.vue';
import LoadingScreen from '../generic/LoadingScreen.vue';

const path = window.location.pathname.split("/").slice(-1)[0];
let data = reactive({
    content: null
});
let isLoaded = ref(false);

onMounted(async () => {
    let url = `https://rickandmortyapi.com/api/character/${path}`;
    try {
        const response = await fetch(url);
        const result = await response.json();
        data.content = result;
        isLoaded.value = true;
    } catch (error) {
        console.error("Fetch error: ", error);
    }
});

</script>

<template>
    <section class="content-provider" v-if="isLoaded">
        <CharacterImage v-show="isLoaded" :img="data.content.image"></CharacterImage>
        <CharacterInfo v-show="isLoaded" :info="data.content"></CharacterInfo>
    </section>
    <LoadingScreen v-if="!isLoaded" />
</template>

<style scoped>
section.content-provider {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex: 18 0 0;
    gap: 24px;
    padding-right: 24px;
}

@media screen and (max-width: 744px) {
    section.content-provider {
        flex-direction: column;
        padding-left: 24px;
        gap: 24px;
    }

    aside.item-page {
        position: absolute;
    }
}
</style>
