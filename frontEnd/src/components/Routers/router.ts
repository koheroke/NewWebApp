import { createRouter, createWebHistory,type RouteRecordRaw } from 'vue-router'
const bottomPage: Array<RouteRecordRaw> = [
  {
    path: '/recruitment',
    name: 'recruitment',
    component: () => import('@/components/AtomicDesign/Pages/RecruitmentListPage/RecruitmentListPage')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/components/AtomicDesign/Pages/CleateRecruitmentPage/CleateRecruitmentPage')
  },
  {
    path: '/AttendList',
    name: 'AttendList',
    component: () => import('@/components/AtomicDesign/Pages/AttendList/AttendList')
  },
]

const maxPages: Array<RouteRecordRaw> =[
  {
    path: '/',
    name: 'entrance',
    component: () => import('@/components/AtomicDesign/Pages/Entrance/Entrance')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('@/components/AtomicDesign/Pages/Chat/Chat')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/AtomicDesign/Pages/Login/Login')
  },
]

const routes: Array<RouteRecordRaw> = [
  {
    path: '/loby',
    component: () => import('@/components/AtomicDesign/Pages/ButtomPage/ButtomPage'),
    children: bottomPage.map(route => ({
      ...route,
    }))
  },
  ...maxPages
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes
})


export default router

