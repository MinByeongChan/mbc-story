import { AddProductRequest, Product } from '@/services/types';
export declare function useAddProduct(): import("@tanstack/react-query").UseMutationResult<Product, Error, AddProductRequest, {
    previous?: Product[];
}>;
