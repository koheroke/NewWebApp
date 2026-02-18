import {type messageInterface} from '@/interfaces/chat'
export class MngChat{
  private rooms: Record<string, messageInterface[]>;

  constructor() {
    this.rooms = {};
  }
  createRoom(roomID:string){
    this.rooms[roomID]
  }
  addMessage(message:messageInterface){
    this.rooms[message.roomId].push(message)
  }
  getallMessage(roomId:string){
    return this.rooms[roomId]
  }
}