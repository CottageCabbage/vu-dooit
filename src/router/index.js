import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Profile/',
    name: 'Profile',
    component: () => import('@/views/ProfileView.vue')
  },
  {
    path: '/Project/',
    name: 'Project',
    component: () => import('@/views/ProjectView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
