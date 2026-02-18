import io from "socket.io-client"; 
import type {RecruitmentCardType ,UpdatePayload }  from "@/components/Interfaces/web/recruitmentCard";
import { backendUrl } from "@/components/Hooks/web/env";
const socket = io(backendUrl); 
import { ref } from 'vue';
export const RecruitmentCards = ref<RecruitmentCardType[]>([]); 

socket.on("create_recruitment_post", (data :string) => {  
  const RecruitmentCard = JSON.parse(data)
  create_recruitment_post(RecruitmentCard);
}) 
socket.on("update_recruitment_post", (data :string) => {
  const updateRecruitment = JSON.parse(data).data
  const index = JSON.parse(data).index

  update_recruitment_post(updateRecruitment,index);
}) 
socket.on("delete_recruitment_post", (data :number) => {
 delete_recruitment_post(data)
}) 
socket.on("request_recruitment_post", (data :string) => {
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

export class RecruitmentApi{
  create(data:RecruitmentCardType){
    socket.emit("create_recruitment", data)
  }
  update(){ 
    socket.emit("update_recruitment", {
  })
  }
  delete(){
    socket.emit("delete_recruitment", {
  })
  }
  request(){
    socket.emit("request_recruitment", {
  })
  }
}