import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/usuarios/:id',
    name: 'usuarios',
    component: () => import('../views/UserEditView.vue')
  },
  {
    path: '/lessons',
    name: 'lessons',
    component: () => import('../views/LessonsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
