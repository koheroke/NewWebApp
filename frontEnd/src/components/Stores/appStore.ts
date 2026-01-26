import { defineStore } from 'pinia'
export const appStore = defineStore('appStore',{
  state: () => ({
    search: 0
  }),
})