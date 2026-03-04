import io from "socket.io-client"; 
import { backendUrl } from "@H/web/env";
const socket = io(`${backendUrl}/chat`);
socket.on("create", (data :string) => {  

})
export class ChatApi{  
  onChat(userID:string){
    socket.emit("joinchat",userID)
  }
  sendMessage(userID:string,message:string){
    socket.emit("joinchat",userID)
  }
  sendImage(userID:string,image:string){
    socket.emit("joinchat",userID)
  }
}

