export const queryKeys = {
  product: {
    list: (category?: string) =>
      ["product", "list", category ?? "all"] as const,
    detail: (id?: string | number) => ["product", String(id)] as const,
    categories: ["product", "categories"] as const,
  },
};
