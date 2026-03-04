import { type AtLeastOne } from "@/interfaces/interfase"
export interface RecruitmentCardType{
  name: string,
  scheduledtimeString: string,
  scheduledtime:number,
  apo_people: number,
  join_people: number,
  detail: string,
  tag: string[]
  id: string,
  cleatedData: number
}
export type cardInList = Omit<RecruitmentCardType, 'apo_people' | 'join_people'>&{
   ButtonTitile: string,
   people:number
}

export type Id = RecruitmentCardType['id'];



type CardWithoutId = Omit<RecruitmentCardType, 'id'>;
export type UpdatePayload = { id: RecruitmentCardType['id'] } & AtLeastOne<CardWithoutId>;

// ln -s /Users/azumakoutaira/workspace/vueApp/backend/src/interfaces/communication.ts communication.ts