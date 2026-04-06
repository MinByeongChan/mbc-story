import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchProductList } from '@/services/fetchProductList/fetchProductList';
import { queryKeys } from '@/shared/queryKeys';

export const useFetchProductList = (category?: string) => {
  return useSuspenseQuery({
    queryKey: queryKeys.product.list(category),
    queryFn: () => fetchProductList(category),
  });
};
