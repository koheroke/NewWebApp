export interface RecruitmentCard{
  name: string,
  time: string,
  people: string,
  detail: string,
  tag: string[]
  id: string,
}

export type Id = RecruitmentCard['id'];


type AtLeastOne<T> = {
    [K in keyof T]: Pick<T, K> & Partial<T>
  }[keyof T];
  
type CardWithoutId = Omit<RecruitmentCard, 'id'>;
export type UpdatePayload = { id: RecruitmentCard['id'] } & AtLeastOne<CardWithoutId>;