export interface formItemType {
  props: { [key: string]: any };
  id: string;
  component: string | any;
  label: string;
  required: boolean;
  event?: {
    hold?: () => void;   
    trigger?: () => void; 
  };
  isValid?:(input:any)=> boolean
}