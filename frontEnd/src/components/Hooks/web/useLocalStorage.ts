// @/hooks/web/useLocalStorage.ts
export const useLocalStorage = () => {
  const setItem = (key: string, value: any) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("LocalStorage save error:", error);
    }
  };

  const getItem = (key: string) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      return null;
    }
  };

  return { setItem, getItem };
};
