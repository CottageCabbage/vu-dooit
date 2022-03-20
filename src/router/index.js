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
    path: '/TodoList/',
    name: 'TodoList',
    component: () => import('@/views/TodoList.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
