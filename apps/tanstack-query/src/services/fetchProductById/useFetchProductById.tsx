import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { fetchProductById } from './fetchProductById';
import { ProductResponse } from '../types';
import { queryKeys } from '@/shared/queryKeys';

export const useFetchProductById = (id: string) => {
  const queryClient = useQueryClient();
  const queryKey = queryKeys.product.detail(id);

  return useSuspenseQuery({
    queryKey,
    queryFn: () => fetchProductById(id),
    initialData: () => {
      const targetProduct = queryClient
        .getQueryData<ProductResponse>(queryKey)
        ?.find((product) => product.id === Number(id));
      return targetProduct;
    },
    initialDataUpdatedAt: () => {
      console.log('getQueryState', queryClient.getQueryState(queryKey));
      return queryClient.getQueryState(queryKey)?.dataUpdatedAt;
    },
    staleTime: 1000 * 5,
  });
};
