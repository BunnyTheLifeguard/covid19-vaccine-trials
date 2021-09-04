import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: null },
  { path: '/about', component: null }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
