<script setup>
import { defineProps, onMounted, reactive } from 'vue';
const props = defineProps({
    info: {
        type: Object,
        required: true
    }
})

let data = props.info
const allEpisodes = data.episode;
const allEpisodesData = reactive({
    allEpisodeNames: null
})

const fetchAllEpisodesName = async () => {
    try {
        const fetchPromises = [];
        allEpisodes.map((item) => {
            fetchPromises.push(fetch(item).then((res) => res.json()));
        });
        const response = await Promise.all(fetchPromises);
        allEpisodesData.allEpisodeNames = response;
    } catch (error) {
        console.log("Episode Name Fetch Error", error);
    }
};

onMounted(async () => {
    await fetchAllEpisodesName()
})
</script>

<template>
    <div class="CharacterInfo">
        <div class="container">
            <h1>{{ data.name }}</h1>
            <ul>
                <li>
                    <p class="list-title">Status:</p>
                    <p class="list-content">{{ data.status }}</p>
                </li>
                <li>
                    <p class="list-title">Species:</p>
                    <p class="list-content">{{ data.species }}</p>
                </li>
                <li>
                    <p class="list-title">Type:</p>
                    <p class="list-content">{{ data.type ? data.type : "Undifined" }}</p>
                </li>
                <li>
                    <p class="list-title">Gender:</p>
                    <p class="list-content">{{ data.gender }}</p>
                </li>
                <li>
                    <p class="list-title">Origin:</p>
                    <p class="list-content">{{ data.origin.name }}</p>
                </li>
            </ul>
        </div>
        <div class="container" v-if="allEpisodesData.allEpisodeNames">
            <h1>Episodes</h1>
            <ul>
                <li v-for="episode in allEpisodesData.allEpisodeNames.slice(0, 7)" :key="episode.name">
                    <p class="list-title">{{ episode.episode }}</p>
                    <p class="list-content">{{ episode.name }}</p>
                </li>
                <li v-if="allEpisodesData.allEpisodeNames.length > 7">...</li>
            </ul>
        </div>

    </div>

</template>

<style scoped>
div.CharacterInfo {
    flex: 1 0 40%;
    display: flex;
    flex-direction: column;
    gap: 24px;


    div.container {
        padding: 24px;
        border-radius: 24px;
        background: var(--Primary, #1E2838);
        box-shadow: var(--main-shadow);


        h1 {
            margin-top: 0;
            margin-bottom: 24px;
        }

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            padding: 0px;
            gap: 8px;

            li {
                display: flex;
                gap: 0.75rem;



                p {
                    margin: 0px;
                    font-size: 1.25rem;
                    font-style: normal;
                    line-height: normal;

                }

                p.list-title {

                    font-weight: 600;
                }

                p.list-content {
                    font-weight: 200;
                }
            }
        }
    }
}

@media screen and (max-width: 744px) {

    div.CharacterInfo {
        width: 100%;
    }
}
</style>