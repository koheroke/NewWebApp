import { createRouter, createWebHistory,type RouteRecordRaw } from 'vue-router'
import { bottomPage } from '@R/bottomPageRouter/bottomPageRouter'
import { entryPages } from '@R/loginRouter/loginRouter'
import { maxPages } from '@R/maxPagesRouter/maxPagesRouter'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/loby',
    component: () => import('@A/Pages/ButtomPage/ButtomPage'),
    children: bottomPage.map(route => ({
      ...route,
    }))
  },
  {
    path: '/entry',
    component: () => import('@A/Pages/Entry/Entry'),
    children: entryPages.map(route => ({
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

