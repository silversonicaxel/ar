import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Portfolio',
      component: () => import('../views/portfolio/index.vue')
    },
  ]
})

export default router
