import { createRouter, createWebHistory,type RouteRecordRaw } from 'vue-router'
import HomeView from '@/components/AtomicDesign/Peges/CleateRecruitmentPage/CleateRecruitmentPage';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes
})

export default router