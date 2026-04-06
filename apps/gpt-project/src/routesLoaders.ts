import type { QueryClient } from '@tanstack/react-query';
import { fetchProductList } from '@/services/fetchProductList/fetchProductList';
import { fetchProductById } from '@/services/fetchProductById/fetchProductById';
import { queryKeys } from '@/shared/queryKeys';

export const productsLoader = (queryClient: QueryClient) => async () => {
  const query = {
    queryKey: queryKeys.product.list(),
    queryFn: () => fetchProductList(),
    staleTime: 1000 * 60 * 2,
  } as const;

  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

export const productDetailLoader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: { id?: string } }) => {
    const id = params.id ?? '';
    const query = {
      queryKey: queryKeys.product.detail(id),
      queryFn: () => fetchProductById(id),
      staleTime: 1000 * 60 * 2,
    } as const;

    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
  };
