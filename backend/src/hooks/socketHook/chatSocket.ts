import {type Socket} from 'socket.io'
import {type messageInterface} from '@/interfaces/chat'
import { MngChat } from '@/hooks/Mngchat'
import type { Id } from '@/interfaces/recruitmentCard'
const mngchat =new MngChat()

export const Chat ={
  sendMessage(socket:Socket,data: messageInterface){
    socket.in(data.roomId).emit("sendMessage",data)
    mngchat.addMessage(data)
  },
  getMessage(socket:Socket,data: messageInterface){
    socket.emit("getMessage",data)
  }, 
  getAllMessage(socket:Socket,roomId:Id){
    const roomAllData = mngchat.getallMessage(roomId)
    socket.emit("getAllMessage",roomAllData)
  },
  joinchat(socket:Socket,id:Id){
    socket.join(id);
    mngchat.createRoom(id)
  } 
}

