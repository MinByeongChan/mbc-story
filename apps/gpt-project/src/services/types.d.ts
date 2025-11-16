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
    products: Product[];
}
export type ProductResponse = Product[];
