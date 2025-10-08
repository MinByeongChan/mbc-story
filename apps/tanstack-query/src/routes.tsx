import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Products = lazy(() => import("@/pages/Products"));
const ProductDetails = lazy(() => import("@/pages/ProductDetails"));

export const AppRouter: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <Products />,
    },
    {
      path: "/product/:id",
      element: <ProductDetails />,
    },
  ]);
