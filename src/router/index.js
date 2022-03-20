import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Avatar/',
    name: 'Avatar',
    component: () => import('@/views/AvatarView.vue')
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
