import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiPost } from "@/shared/apiClient";
import { AddProductRequest, AddProductResponse, Product } from "@/services/types";
import { queryKeys } from "@/shared/queryKeys";

async function addProduct(body: AddProductRequest) {
  return apiPost<AddProductRequest, AddProductResponse>("/products", body);
}

export function useAddProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProduct,
    onMutate: async (newProduct) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.product.list() });
      const previous = queryClient.getQueryData<Product[]>(queryKeys.product.list());

      queryClient.setQueryData<Product[]>(queryKeys.product.list(), (old) => [
        ...(old ?? []),
        {
          id: Math.floor(Math.random() * 1000000),
          ...newProduct,
        },
      ]);

      return { previous } as { previous?: Product[] };
    },
    onError: (_err, _newProduct, ctx) => {
      if (ctx?.previous) {
        queryClient.setQueryData<Product[]>(queryKeys.product.list(), ctx.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.product.list() });
    },
  });
}


