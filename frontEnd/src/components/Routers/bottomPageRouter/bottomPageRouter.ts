import { type RouteRecordRaw } from 'vue-router'
export const bottomPage: Array<RouteRecordRaw> = [
  {
    path: '/recruitment',
    name: 'recruitment',
    component: () => import('@A/Pages/RecruitmentListPage/RecruitmentListPage')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@A/Pages/CleateRecruitmentPage/CleateRecruitmentPage')
  },
  {
    path: '/AttendList',
    name: 'AttendList',
    component: () => import('@A/Pages/AttendList/AttendList')
  },
]
