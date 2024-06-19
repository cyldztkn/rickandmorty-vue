<script setup>
// Vue Components
import { watch, ref, onMounted, toRaw, reactive } from 'vue'
// Ui Components
import Aside from '@/components/homepage/AsideSection.vue'
import MainSection from '@/components/homepage/MainSection.vue'
import LoadingScreen from '@/components/generic/LoadingScreen.vue'
import CharacterCard from '@/components/generic/CharacterCard.vue'
import FormElement from '@/components/homepage/FormElement.vue'

// Pinia Store
import { useCharacterStore } from '@/stores/characterStore'

const store = useCharacterStore()
const isFetchingData = ref(false)
let allCharacters = reactive({
  allChars: []
})
let uiData = reactive({
  characters: []
})
let reactiveFilteredData = reactive({
  characters: []
})
let count = ref(20)
let filteredData = reactive([])

// Fetch characters when the component mounts
onMounted(async () => {
  await store.fetchCharacters()
  isFetchingData.value = store.isLoaded
  allCharacters.allChars = store.characters
  uiData.characters = allCharacters.allChars.slice(0, 2)
  filteredData.value = store.characters
  // uiData.value = filteredData.value.slice(0, 2);
  // console.log(allCharacters.allChars, uiData.characters)
})

// Watch the isLoaded ref to check when data fetching is complete
// watch(
//   () => store.isLoaded,
//   (newVal) => {
//     isFetchingData.value = newVal
//     filteredData.value = toRaw(store.characters)
//     uiData.value = filteredData.value.slice(0, 2)
//   }
// )

// // watch the see more button

watch(count, () => {
  uiData.characters = filteredData.value.slice(0, count.value)
})

watch(reactiveFilteredData, (char) => {
  console.log("wathcer", char);
  console.log("wathcer", uiData.characters);

  uiData.characters = [];
  console.log("wathcer", uiData.characters);
  uiData.characters = char.characters
  console.log("wathcer", uiData.characters);

})


// filter character function
const filterCharacter = (userInput) => {
  // uiData.value = null
  let tempData = [...toRaw(allCharacters.allChars)];
  console.log(tempData)


  // Check status
  if (userInput.Dead || userInput.Alive || userInput.Unknown) {
    tempData = tempData.filter((item) => {
      if (userInput.Dead && item.status.toLowerCase() === 'dead') return true
      if (userInput.Alive && item.status.toLowerCase() === 'alive') return true
      if (userInput.Unknown && item.status.toLowerCase() === 'unknown') return true
      return false
    })
  }

  // Check species
  if (
    !userInput.Human ||
    !userInput.Humanoid ||
    !userInput.Mythological ||
    !userInput.Disease ||
    !userInput.Cronenberg ||
    !userInput.Alien ||
    !userInput.Poopybutthole ||
    !userInput.Animal ||
    !userInput.Robot ||
    !userInput.UnknownSpacies
  ) {
    tempData = tempData.filter((item) => {
      if (!userInput.Human && item.species.toLowerCase() === 'human') return false
      if (!userInput.Humanoid && item.species.toLowerCase() === 'humanoid') return false
      if (!userInput.Mythological && item.species.toLowerCase() === 'mythological creature')
        return false
      if (!userInput.Disease && item.species.toLowerCase() === 'disease') return false
      if (!userInput.Cronenberg && item.species.toLowerCase() === 'cronenberg') return false
      if (!userInput.UnknownSpacies && item.species.toLowerCase() === 'unknown') return false
      if (!userInput.Alien && item.species.toLowerCase() === 'alien') return false
      if (!userInput.Poopybutthole && item.species.toLowerCase() === 'poopybutthole') return false
      if (!userInput.Animal && item.species.toLowerCase() === 'animal') return false
      if (!userInput.Robot && item.species.toLowerCase() === 'robot') return false
      return true
    })
  }

  // Check name
  if (userInput.name !== '') {
    tempData = tempData.filter((item) =>
      item.name.toLowerCase().includes(userInput.name.toLowerCase())
    )
  }

  // Update uiData with the filtered results
  console.log(tempData)


  reactiveFilteredData.characters = tempData
  console.log("reactive", reactiveFilteredData)
  console.log("reactive", reactiveFilteredData.characters)
  // uiData.value = [...tempData];
  // console.log(uiData.value)
  // uiData.value = filteredData.value


}

let handleSubmit = (e) => {
  const formData = new FormData(e.srcElement)
  console.log(e)
  const userInput = Object.fromEntries(formData.entries())
  // console.log(userInput)
  filterCharacter(userInput)
}

let handleReset = () => {
  console.log('reset Edildi')
  filteredData.value = toRaw(store.characters)
  uiData.value = filteredData.value.slice(0, 20)
}

// let handleChange = (e) => {
//   const formData = new FormData(e.target.form)
//   const userInput = Object.fromEntries(formData.entries())
//   filterCharacter(userInput)
// }

let seeMore = () => {
  count.value += 20
}
</script>

<template>
  <LoadingScreen v-show="!isFetchingData" />
  <Aside v-show="isFetchingData">
    <FormElement @reset="handleReset" @submit.prevent="(e) => handleSubmit(e)" />
  </Aside>

  <MainSection v-show="isFetchingData">
    <template #articles>
      <CharacterCard v-for="(character, index) in uiData.characters" :key="index" :cardData="character" />
    </template>
    <template #button>
      <button class="pagination-button" @click="seeMore">See More</button>
    </template>
  </MainSection>
</template>

<style scoped></style>
