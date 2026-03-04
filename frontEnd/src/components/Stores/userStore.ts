import { defineStore } from 'pinia'
import {type AtLeastOne} from "@I/interface"
import { type User,type userKeys } from "@I/web/UserInterface"
export const user = defineStore('user',{
  state: ():User => ({
      id:"",
      login:false,
      onchat:false,
  }),
  getters: {
    
  },
  actions: {
    setElement(payload:AtLeastOne<User>){
      Object.assign(this, payload);
    },
    get(reqItem:userKeys|undefined){
      if(reqItem==undefined){
        return this
      }
      return this[reqItem]
    }
  }
})
