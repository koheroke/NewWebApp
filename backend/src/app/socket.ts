import { Server, Socket } from 'socket.io';
import { MngRecruitment } from '@/hooks/MngRecruitment'
import type { RecruitmentCard, Id, UpdatePayload } from '@/interfaces/recruitmentCard.ts'
const mngRecruitment = new MngRecruitment()

const create_recruitment = (socket : Socket, data : RecruitmentCard) => {
  const duplication = mngRecruitment.add(data)
  if(duplication){
    socket.broadcast.emit('duplicationId_post');
    return
  }
  socket.broadcast.emit('create_recruitment_post', data);
}

const update_recruitment = (socket : Socket, data : UpdatePayload) => {
  mngRecruitment.update(data)
  socket.broadcast.emit('update_recruitment_post', data);
}

const delete_recruitment = (socket : Socket, data : Id) => {
  const existence = mngRecruitment.delete(data)
  if(!existence)return
  socket.broadcast.emit('delete_recruitment_post', data);
}
const request_recruitment = (socket : Socket) => {
  socket.emit('request_recruitment_post', mngRecruitment.recruitments());
}

export const registerSocketHandlers = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    socket.on('create_recruitment', (data : RecruitmentCard) => {
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