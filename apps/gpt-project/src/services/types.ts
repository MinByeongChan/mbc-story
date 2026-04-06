export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface CartResponse {
  id: number;
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
}

export type ProductResponse = Product[];

export interface AddProductRequest {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export type AddProductResponse = Product;
