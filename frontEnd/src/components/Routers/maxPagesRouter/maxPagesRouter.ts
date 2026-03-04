import { type RouteRecordRaw } from 'vue-router'
export const maxPages: Array<RouteRecordRaw> =[
  {
    path: '/',
    name: 'entrance',
    component: () => import('@A/Pages/Entrance/Entrance')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('@A/Pages/Chat/Chat')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@A/Pages/Login/Login')
  },
]

