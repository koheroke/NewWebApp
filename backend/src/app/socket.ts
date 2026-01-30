import { Server, Socket } from 'socket.io';
import { MngRecruitment } from '@/hooks/MngRecruitment'
import type { RecruitmentCardType, Id, UpdatePayload } from '@/interfaces/recruitmentCard.ts'
const mngRecruitment = new MngRecruitment()

const create_recruitment = (socket : Socket, data : RecruitmentCardType) => {
  const duplication = mngRecruitment.add(data)
  if(duplication){
    socket.broadcast.emit('duplicationId_post');
    return
  }
  socket.broadcast.emit('create_recruitment_post',JSON.stringify(data));
}

const update_recruitment = (socket : Socket, data : UpdatePayload) => {
  const index = mngRecruitment.update(data)
  if(!index)return
  socket.broadcast.emit('update_recruitment_post', JSON.stringify({data:data,index:index}));
}

const delete_recruitment = (socket : Socket, data : Id) => {
  const index = mngRecruitment.delete(data) 
  if(!index)return
  socket.broadcast.emit('delete_recruitment_post', index);
}
const request_recruitment = (socket : Socket) => {
  socket.emit('request_recruitment_post', JSON.stringify(mngRecruitment.recruitments()));
}

export const registerSocketHandlers = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    socket.on('create_recruitment', (data : RecruitmentCardType) => {
      create_recruitment(socket, data)
    });
    socket.on('update_recruitment', (data : UpdatePayload) => {
      update_recruitment(socket, data)
    });
    socket.on('delete_recruitment', (data : Id) => {
      delete_recruitment(socket, data)
    });
    socket.on('request_recruitment', () => {
      request_recruitment(socket)
    });
  });
};