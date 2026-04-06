import { useQuery } from '@tanstack/react-query';
import { fetchCarts } from '@/services/fetchCarts/fetchCarts';

export const useFetchCarts = () => {
  return useQuery({
    queryKey: ['carts'],
    queryFn: fetchCarts,
  });
};
