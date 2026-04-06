/* eslint-disable react-refresh/only-export-components -- 라우트 정의; 페이지는 lazy 로 분리 */
import { lazy } from 'react';
const Products = lazy(() => import('@/pages/Products'));
const ProductDetails = lazy(() => import('@/pages/ProductDetails'));

export const AppRouter = [
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/product/:id',
    element: <ProductDetails />,
  },
];
