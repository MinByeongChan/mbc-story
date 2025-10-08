import { BASE_URL } from "@/services/utils";
import { Product } from "@/services/types";

export const fetchProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/${id}`).then((response) =>
    response.json()
  );
  return response;
};
