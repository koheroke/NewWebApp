import { createRouter, createWebHistory,type RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/recruitment',
    name: 'recruitment',
    component: () => import('@/components/AtomicDesign/Peges/RecruitmentListPage/RecruitmentListPage')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/components/AtomicDesign/Peges/CleateRecruitmentPage/CleateRecruitmentPage')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('@/components/AtomicDesign/Peges/Chat/Chat')
  },
  {
    path: '/AttendList',
    name: 'AttendList',
    component: () => import('@/components/AtomicDesign/Peges/AttendList/AttendList')
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes
})

export default router