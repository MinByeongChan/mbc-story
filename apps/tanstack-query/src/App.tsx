import '@/App.css';

import { MainLayout } from '@/components/layout';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRouter } from './routes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: 1000 * 5,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      console.error(error);
    },
  }),
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={createBrowserRouter(AppRouter)} />
        </Suspense>
      </MainLayout>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
