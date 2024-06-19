// stores/characterStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCharacterStore = defineStore('characterStore', () => {
  const characters = ref([])
  const isLoaded = ref(false)

  const fetchCharacters = async () => {
    if (!isLoaded.value) {
      try {
        const fetchPromises = []
        for (let i = 1; i <= 42; i++) {
          fetchPromises.push(
            fetch(`https://rickandmortyapi.com/api/character?page=${i}`).then((res) => res.json())
          )
        }

        const responses = await Promise.all(fetchPromises)
        const allCharacters = responses.flatMap((response) => response.results)
        characters.value = allCharacters
        isLoaded.value = true
        console.log('fetch yapıldı')
      } catch (error) {
        console.error('Error fetching characters:', error)
      }
    }
  }

  return {
    characters,
    fetchCharacters,
    isLoaded
  }
})
