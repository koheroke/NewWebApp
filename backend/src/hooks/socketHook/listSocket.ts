import MngRecruitment from '@/hooks/MngRecruitment'
import type { RecruitmentCardType, Id, UpdatePayload } from '@/interfaces/recruitmentCard'
import { type Socket } from 'socket.io';
import { getTestData } from "../../testmodule/InputFromWebsocket"

const RecruitmentData =getTestData()
const mngRecruitment =  MngRecruitment
 const recruitment = {
  create(socket : Socket, data : RecruitmentCardType){
    const duplication = mngRecruitment.add(data)
    if(duplication){
      socket.broadcast.emit('duplicationId_post');
      return
    }
    socket.broadcast.emit('create_recruitment_post',JSON.stringify(data));
  },
  update(socket : Socket, data : UpdatePayload){
    const index = mngRecruitment.update(data)
    if(!index)return
    socket.broadcast.emit('update_recruitment_post', JSON.stringify({data:data,index:index}));
  },
  delete(socket : Socket, data : Id){
    const index = mngRecruitment.delete(data) 
    if(!index)return
    socket.broadcast.emit('delete_recruitment_post', index);
  },
  request(socket : Socket){
    socket.emit('request_recruitment_post', JSON.stringify(mngRecruitment.request()));
  },
}
export default recruitment