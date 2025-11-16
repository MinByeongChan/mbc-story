import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { fetchProductById } from "./fetchProductById";
import { ProductResponse } from "../types";
import { queryKeys } from "@/shared/queryKeys";

export const useFetchProductById = (id: string) => {
  const queryClient = useQueryClient();

  return useSuspenseQuery({
    queryKey: queryKeys.product.detail(id),
    queryFn: () => fetchProductById(id),
    initialData: () => {
      const targetProduct = queryClient
        .getQueryData<ProductResponse>(queryKeys.product.list())
        ?.find((product) => product.id === Number(id));
      return targetProduct;
    },
    initialDataUpdatedAt: () => {
      return queryClient.getQueryState(queryKeys.product.list())?.dataUpdatedAt;
    },
  });
};
