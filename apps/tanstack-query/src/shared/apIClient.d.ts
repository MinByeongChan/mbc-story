export declare function apiGet<T>(path: string): Promise<T>;
export declare function apiPost<TBody extends object, TResponse>(
  path: string,
  body: TBody,
): Promise<TResponse>;
