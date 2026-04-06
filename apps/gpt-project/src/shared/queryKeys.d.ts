export declare const queryKeys: {
    readonly product: {
        readonly list: (category?: string) => readonly ["product", "list", string];
        readonly detail: (id: string | number) => readonly ["product", string];
        readonly categories: readonly ["product", "categories"];
    };
};
