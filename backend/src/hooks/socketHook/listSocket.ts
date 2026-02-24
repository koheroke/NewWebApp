import MngRecruitment from '@/hooks/MngRecruitment'
import type { RecruitmentCardType, Id, UpdatePayload } from '@/interfaces/recruitmentCard'
import { type Socket } from 'socket.io';
const mngRecruitment =  MngRecruitment
 const recruitment = {
  create(socket : Socket, data : RecruitmentCardType){
    const duplication = mngRecruitment.add(data)
    if(duplication){
      socket.broadcast.emit('duplicationId_post');
      return
    }
    socket.broadcast.emit('create',JSON.stringify(data));
  },
  update(socket : Socket, data : UpdatePayload){
    const index = mngRecruitment.update(data)
    if(!index)return
    socket.broadcast.emit('update', JSON.stringify({data:data,index:index}));
  },
  delete(socket : Socket, data : Id){
    const index = mngRecruitment.delete(data) 
    if(!index)return
    socket.broadcast.emit('delete', index);
  },
  request(socket : Socket){
    socket.emit('request', JSON.stringify(mngRecruitment.request()));
  },
}
export default recruitment