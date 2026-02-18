import type { RecruitmentCardType, Id, UpdatePayload } from '@/interfaces/recruitmentCard'
import { getTestData } from "../testmodule/InputFromWebsocket"
const MngRecruitment = {
  recruitments : [] as RecruitmentCardType[],
  extraction(key: keyof RecruitmentCardType){
    const extraction = this.recruitments.map(card => card[key]);
    return extraction
  },
  add(recruitmentCard : RecruitmentCardType){
    if(!this.check(recruitmentCard.id)){
      return false
    }
    this.recruitments.push(recruitmentCard)
  },
  check(id:Id){
    const allId = this.extraction("id")
    if(allId.includes(id)){
      return false
    }
    return true
  },
  delete(id:Id){
    const index = this.recruitments.findIndex(card => card.id === id);
    if (index === -1) {
      return false;
    }
    this.recruitments.splice(index, 1);
    return index;
  },
  update(data:UpdatePayload){
    const index = this.recruitments.findIndex(card => card.id === data.id); 
    this.recruitments[index] = { ...this.recruitments[index], ...data };
    return index
  },
  request(){
    return this.recruitments 
  }
}
export default MngRecruitment
MngRecruitment.recruitments = getTestData()