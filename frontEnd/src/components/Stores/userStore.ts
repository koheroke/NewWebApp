import { defineStore } from 'pinia'
import {type AtLeastOne} from "@/components/Interfaces/interface"
import { type User,type userKeys } from "@/components/Interfaces/web/UserInterface"
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
