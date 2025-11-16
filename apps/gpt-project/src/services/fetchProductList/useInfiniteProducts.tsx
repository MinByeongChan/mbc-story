import { useInfiniteQuery } from "@tanstack/react-query";
import { apiGet } from "@/shared/apiClient";
import { queryKeys } from "@/shared/queryKeys";
import { Product } from "@/services/types";

const PAGE_SIZE = 6;

async function fetchProductsPage(page: number): Promise<Product[]> {
  // fakestoreapi는 페이지네이션을 직접 지원하지 않으므로 클라이언트 측에서 분할
  const all = await apiGet<Product[]>("/products");
  const start = (page - 1) * PAGE_SIZE;
  return all.slice(start, start + PAGE_SIZE);
}

export const useInfiniteProducts = () => {
  return useInfiniteQuery({
    queryKey: [...queryKeys.product.list(), "infinite"],
    queryFn: ({ pageParam = 1 }) => fetchProductsPage(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < PAGE_SIZE) return undefined;
      return (allPages.length + 1);
    },
  });
};


