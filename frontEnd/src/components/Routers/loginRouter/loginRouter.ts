import { type RouteRecordRaw } from 'vue-router'

const entryPagesParent="/entry"
export const entryPages: Array<RouteRecordRaw> =[
  {
    path: entryPagesParent+ '/',
    name: 'choiceEntry',
    component: () => import('@A/Pages/Entry/src/part/Choice.vue')
  },
  {
    path: entryPagesParent+'/inputEmail',
    name: 'inputEmail',
    component: () => import(`@A/Pages/Entry/src/part/InputEmail.vue`)
  },
  {
    path: entryPagesParent+ '/inputOTP',
    name: 'inputOTP',
      component: () => import('@A/Pages/Entry/src/part/InputOTP.vue')
  },
]
