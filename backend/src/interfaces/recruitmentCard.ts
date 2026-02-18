export interface RecruitmentCardType{
  name: string,
  time: string,
  people: number,
  detail: string,
  tag: string[]
  id: string,
  data: number
}
export type cardInList = RecruitmentCardType&{
   ButtonTitile: string,
}

export type Id = RecruitmentCardType['id'];


type AtLeastOne<T> = {
    [K in keyof T]: Pick<T, K> & Partial<T>
  }[keyof T];
  
type CardWithoutId = Omit<RecruitmentCardType, 'id'>;
export type UpdatePayload = { id: RecruitmentCardType['id'] } & AtLeastOne<CardWithoutId>;

// ln -s /Users/azumakoutaira/workspace/vueApp/backend/src/interfaces/communication.ts communication.ts