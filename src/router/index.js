import { createRouter, createWebHistory } from 'vue-router'

// Importações das páginas principais
// Deixei tudo separado pra ficar fácil entender o que é cada rota
import HomeView from '@/views/HomeView.vue'
import PontosView from '@/views/PontosView.vue'
import EventosView from '@/views/EventosView.vue'

const routes = [
  // Rota inicial: página Home
  { path: '/', name: 'home', component: HomeView },

  // Página com a lista de pontos turísticos
  { path: '/pontos', name: 'pontos', component: PontosView },

  // Página com os eventos da cidade
  { path: '/eventos', name: 'eventos', component: EventosView },

  // Aqui é onde deixei a rota dinâmica para abrir o detalhe de cada ponto
  {
    path: '/ponto/:id',
    name: 'PontoDetalhe',
    component: () => import('../views/PontoDetalhe.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router