import io from "socket.io-client"; 
import type {RecruitmentCardType ,UpdatePayload }  from "@/components/Interfaces/web/recruitmentCard";
import { backendUrl } from "@/components/Hooks/web/env";
const socket = io(`${backendUrl}/list`);
import { ref } from 'vue';
export const RecruitmentCards = ref<RecruitmentCardType[]>([]); 

socket.on("create", (data :string) => {  
  const RecruitmentCard = JSON.parse(data)
  create_recruitment_post(RecruitmentCard);
}) 
socket.on("update", (data :string) => {
  const updateRecruitment = JSON.parse(data).data
  const index = JSON.parse(data).index
  update_recruitment_post(updateRecruitment,index);
}) 
socket.on("delete", (data :number) => {
 delete_recruitment_post(data)
}) 
socket.on("request", (data :string) => {
 const RecruitmentCards = JSON.parse(data)
 request_recruitment_post(RecruitmentCards);
}) 

const create_recruitment_post =(RecruitmentCard:RecruitmentCardType)=>{
  RecruitmentCards.value.push(RecruitmentCard);
}
const update_recruitment_post =(updateRecruitment:UpdatePayload, index:number)=>{
  RecruitmentCards.value[index] = { ...RecruitmentCards.value[index], ...updateRecruitment } as RecruitmentCardType;;
}
const delete_recruitment_post =(index :number)=>{
  RecruitmentCards.value.splice(index, 1);
}
const request_recruitment_post =(recruitmentCard:RecruitmentCardType[])=>{
  RecruitmentCards.value = recruitmentCard;
}


 class RecruitmentApi{
  create(data:RecruitmentCardType){
    socket.emit("create", data)
  }
  update(data:UpdatePayload){ 
    socket.emit("update",data)
  }
  delete(){
    socket.emit("delete")
  }
  request(){
    socket.emit("request")
  }
}
export const recruitmentApi =new RecruitmentApi()

