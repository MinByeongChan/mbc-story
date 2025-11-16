import { lazy } from "react";
const Products = lazy(() => import("@/pages/Products"));
const ProductDetails = lazy(() => import("@/pages/ProductDetails"));

export const AppRouter = [
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
];
