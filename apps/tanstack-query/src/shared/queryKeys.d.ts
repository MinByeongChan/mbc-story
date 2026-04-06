export declare const queryKeys: {
  product: {
    list: (category?: string) => readonly ['product', 'list', string];
    detail: (id?: string | number) => readonly ['product', string];
    categories: readonly ['product', 'categories'];
  };
};
