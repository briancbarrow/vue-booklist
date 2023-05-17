import { createRouter, createWebHistory } from 'vue-router'
import DashView from '../views/DashView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashView
    }
  ]
})

export default router
