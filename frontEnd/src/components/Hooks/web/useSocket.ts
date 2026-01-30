import io from "socket.io-client"; 
import type recruitmentCard from "@/components/Interfaces/web/recruitmentCard";
import type UpdatePayload from "@/components/Interfaces/web/recruitmentCard";
type Id = recruitmentCard['id'];
const socket = io("http://localhost:3000"); 
socket.on("create_recruitment_post", (data :recruitmentCard) => {}) 
socket.on("update_recruitment_post", (data :UpdatePayload) => {}) 
socket.on("delete_recruitment_post", (data :Id) => {}) 
socket.on("request_recruitment_post", (data :recruitmentCard[]) => {}) 





      // create_recruitment

      // update_recruitment

      // delete_recruitment

      // request_recruitment

      // create_recruitment_post

      // duplicationId_post

      // update_recruitment_post

      // delete_recruitment_post

      // request_recruitment_post