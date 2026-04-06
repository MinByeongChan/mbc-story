import { Product } from '@/services/types';
import { apiGet } from '@/shared/apIClient';

export const fetchProductById = async (id: string): Promise<Product> => {
  return apiGet<Product>(`/products/${id}`);
};
