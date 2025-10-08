import { BASE_URL } from "@/services/utils";
import { CartResponse } from "@/services/types";

export const fetchCarts = async (): Promise<CartResponse[]> => {
  const response = await fetch(`${BASE_URL}/carts`).then((response) =>
    response.json()
  );
  return response;
};
