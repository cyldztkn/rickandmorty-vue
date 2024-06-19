import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'RickAndMorty',
      component: HomePageView
    },
    {
      path: '/character/:id',
      name: 'character',
      component: () => import('../views/CharacterView.vue')
    }
  ]
})

export default router
