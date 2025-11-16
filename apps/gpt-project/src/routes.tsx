import { lazy } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { productsLoader, productDetailLoader } from "@/routesLoaders";
const Products = lazy(() => import("@/pages/Products"));
const ProductDetails = lazy(() => import("@/pages/ProductDetails"));
const ProductsInfinite = lazy(() => import("@/pages/ProductsInfinite"));

export const createAppRouter = (queryClient: QueryClient) =>
  [
    {
      path: "/",
      element: <Products />,
      loader: productsLoader(queryClient),
    },
    {
      path: "/infinite",
      element: <ProductsInfinite />,
      loader: productsLoader(queryClient),
    },
    {
      path: "/product/:id",
      element: <ProductDetails />,
      loader: productDetailLoader(queryClient),
    },
  ];
