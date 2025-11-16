import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchCategories } from "./fetchCategories";
import { queryKeys } from "@/shared/queryKeys";

export const useFetchCategories = () => {
  return useSuspenseQuery({
    queryKey: queryKeys.product.categories,
    queryFn: fetchCategories,
  });
};


