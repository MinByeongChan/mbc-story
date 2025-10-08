import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchProductList } from "@/services/fetchProductList/fetchProductList";

export const useFetchProductList = () => {
  return useSuspenseQuery({
    queryKey: ["product", "list"],
    queryFn: fetchProductList,
    staleTime: 0,
  });
};
