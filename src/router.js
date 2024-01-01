import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import NewPropertyView from './views/NewPropertyView.vue'

console.log(import.meta.env.BASE_URL);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new-property',
      name: 'newProperty',
      component: NewPropertyView
    },
  ]
})

export default router
