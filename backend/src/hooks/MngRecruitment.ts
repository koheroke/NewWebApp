import type { RecruitmentCard, Id, UpdatePayload } from '@/interfaces/recruitmentCard.ts'
const MngRecruitment = {
  recruitments : [] as RecruitmentCard[],
  extraction(key: keyof RecruitmentCard){
    const extraction = this.recruitments.map(card => card[key]);
    return extraction
  },
  add(recruitmentCard : RecruitmentCard){
    if(!this.check(recruitmentCard.id)){
      return false
    }
    this.recruitments.push(recruitmentCard)
  },
  check(id:Id){
    //**idの重複チェック */
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
    return true;
  },
  update(data:UpdatePayload){
    const index = this.recruitments.findIndex(card => card.id === data.id); 
    this.recruitments[index] = { ...this.recruitments[index], ...data };
  },
  request(){
    return this.recruitments 
  }
}
export default MngRecruitment