import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search-cep',
      name: 'search-cep',
      component: () => import('../views/SerachCep/SerachCep.vue')
    }
  ]
})

export default router
