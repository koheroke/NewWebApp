import { useRouter } from 'vue-router';
const router = useRouter();
export const goNext = () => {
  router.push('/create'); 
};