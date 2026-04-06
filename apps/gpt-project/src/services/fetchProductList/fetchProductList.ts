import { Product } from '@/services/types';
import { apiGet } from '@/shared/apiClient';

export const fetchProductList = async (category?: string): Promise<Product[]> => {
  const endpoint = category && category !== 'all' ? `/products/category/${category}` : '/products';
  return apiGet<Product[]>(endpoint);
};
