import '@/App.css';

import { MainLayout } from '@/components/layout';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createAppRouter } from './routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: 1000 * 60 * 2,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      // 전역 에러 로깅. 실제 앱에서는 토스트/로그 수집 연동.
      console.error('Query error:', error);
    },
  }),
});

function App() {
  const router = createAppRouter(queryClient);
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={createBrowserRouter(router)} />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
