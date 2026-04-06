import type { QueryClient } from '@tanstack/react-query';
export declare const createAppRouter: (queryClient: QueryClient) => {
    path: string;
    element: import("react/jsx-runtime").JSX.Element;
    loader: ({ params }: {
        params: {
            id?: string;
        };
    }) => Promise<{}>;
}[];
