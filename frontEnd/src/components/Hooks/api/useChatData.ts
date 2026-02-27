import io from "socket.io-client"; 
import { backendUrl } from "@H/web/env";
const socket = io(`${backendUrl}/chat`);
socket.on("create", (data :string) => {  

})
export class ChatApi{  
  onChat(userID:string){
    socket.emit("joinchat",userID)
  }
}