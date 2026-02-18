

export type StorageKeys = "schedule" | "user";
export const useLocalStorage = () => {
  const setItem = (key: StorageKeys,data:string) => {
    try {
      const item =window.localStorage.getItem(key)
      if(item==null||item==undefined){
        const this_data:string[]=[data]
        window.localStorage.setItem(key, JSON.stringify(this_data));
      }else{
        const this_item=JSON.parse(item)
        this_item.push(data)
        window.localStorage.setItem(key, JSON.stringify(this_item));
      }
    } catch (error) {
      console.error("LocalStorage save error:", error);
    }
  };
  const deleteItem = (key: StorageKeys, data:string) => {
    try {
      const item = window.localStorage.getItem(key)
      if(item==null||item==undefined)return 
       const row:string[] = JSON.parse(item)
       const newData:string[] = row.filter((this_data)=>this_data!==data)
       window.localStorage.setItem(key, JSON.stringify(newData));
    } catch (error) {
      console.error("LocalStorage save error:", error);
    }
  };
  const getItem = (key: StorageKeys) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      return null;
    }
  };

  return { setItem, getItem,deleteItem };
};
