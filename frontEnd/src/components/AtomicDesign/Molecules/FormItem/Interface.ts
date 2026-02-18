import {type RecruitmentCardType} from "@/components/Interfaces/web/recruitmentCard"

export interface formItemType {
  props: { [key: string]: any };
  id: keyof RecruitmentCardType;
  component: string | any;
  label: string;
  required: boolean;
  event?: {
    hold?: () => void;   
    trigger?: () => void; 
  };
  isValid?:(input:any)=> boolean
}