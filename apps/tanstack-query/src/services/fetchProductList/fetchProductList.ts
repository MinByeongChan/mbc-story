import { Product } from '@/services/types';
import { apiGet } from '@/shared/apIClient';

export const fetchProductList = async (category?: string) => {
  const endPoint = category && category !== 'all' ? `/products/category/${category}` : '/products';
  return apiGet<Product[]>(endPoint);
};
