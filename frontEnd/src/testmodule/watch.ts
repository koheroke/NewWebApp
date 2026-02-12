import { watch } from "vue";
export function this_watch (data:any){
watch(
  () => data.value,
  (newValue) => {
    console.log(newValue);
  },
);
}