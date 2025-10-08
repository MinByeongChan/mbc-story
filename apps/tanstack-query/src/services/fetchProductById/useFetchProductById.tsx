import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { fetchProductById } from "./fetchProductById";
import { ProductResponse } from "../types";

export const useFetchProductById = (id: string) => {
  const queryClient = useQueryClient();

  return useSuspenseQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    initialData: () => {
      const targetProduct = queryClient
        .getQueryData<ProductResponse>(["product", "list"])
        ?.find((product) => product.id === Number(id));
      return targetProduct;
    },
    staleTime: 0,
  });
};
