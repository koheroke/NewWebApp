import {recruitmentApi} from "@H/api/useRecruitmentData"
import { ChatApi } from "@H/api/useChatData"
import { user } from '@/components/Stores/userStore';
const userStore = user();



const chatApi = new ChatApi()
import type {RecruitmentCardType ,UpdatePayload }  from "@I/web/recruitmentCard";
export const connect_toChat=(data:RecruitmentCardType)=>{
  const addpeople:UpdatePayload ={apo_people:data.apo_people++,id:data.id}
  recruitmentApi.update(addpeople)
  chatApi.onChat(data.id)
  userStore.setElement({onchat:data.name})
}