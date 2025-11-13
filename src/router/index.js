import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PontosView from '@/views/PontosView.vue'
import EventosView from '@/views/EventosView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/pontos', name: 'pontos', component: PontosView },
  { path: '/eventos', name: 'eventos', component: EventosView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
