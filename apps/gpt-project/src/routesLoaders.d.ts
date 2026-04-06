import type { QueryClient } from '@tanstack/react-query';
export declare const productsLoader: (queryClient: QueryClient) => () => Promise<{}>;
export declare const productDetailLoader: (queryClient: QueryClient) => ({ params }: {
    params: {
        id?: string;
    };
}) => Promise<{}>;
