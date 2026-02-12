import {type RecruitmentCardType} from "@/components/Interfaces/web/recruitmentCard"
export const searchResults = (data:RecruitmentCardType[],searchKeyword: string) => data.filter(item => 
  item.name.includes(searchKeyword)
);
export const andResults = (data:RecruitmentCardType[],tags: string[]) => data.filter(item => 
  tags.every(t => item.tag.includes(t))
);
