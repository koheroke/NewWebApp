import { Server, Socket } from 'socket.io';
import type { RecruitmentCardType, Id, UpdatePayload } from '@/interfaces/recruitmentCard'
import listSocket from '@/hooks/socketHook/listSocket'
import {Chat} from '@/hooks/socketHook/chatSocket'
import {type messageInterface} from '@/interfaces/chat'
const listsocket = listSocket;
const chat = Chat;

export const registerSocketHandlers = (io: Server) => {
  const listNamespace = io.of('/list')

  listNamespace.on('connection', (socket: Socket) => {
    socket.on('create', (data: RecruitmentCardType) => {
      listsocket.create(socket, data)
    })
    socket.on('update', (data: UpdatePayload) => {
      listsocket.update(socket, data)
    })
    socket.on('delete', (data: Id) => {
      listsocket.delete(socket, data)
    })
    socket.on('request', () => {
      listsocket.request(socket)
    })
  })

  const chatNamespace = io.of('/chat')

  chatNamespace.on('connection', (socket: Socket) => {
    socket.on('join', (id: Id) => {
      chat.joinchat(socket, id)
    })
    socket.on('send', (data: messageInterface) => {
      chat.sendMessage(socket, data)
    })
    socket.on('getAll', (id: Id) => {
      chat.getAllMessage(socket, id)
    })
  })
}



