import "@/App.css";

import { MainLayout } from "@/components/layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: 1000 * 60 * 2,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={AppRouter} />
        </Suspense>
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
