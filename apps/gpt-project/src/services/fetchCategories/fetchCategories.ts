import { apiGet } from "@/shared/apiClient";

export const fetchCategories = async (): Promise<string[]> => {
  return apiGet<string[]>("/products/categories");
};


