import { BASE_URL } from "@/services/utils";
import { Product } from "@/services/types";

export const fetchProductList = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products`).then((response) =>
    response.json()
  );
  return response;
};
