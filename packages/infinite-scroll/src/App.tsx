import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IntersectionObserverTest } from "./components/IntersectionObserverTest";
import { LazyLoad } from "./components/LazyLoad";
import { MovieList } from "./components/MovieList";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <IntersectionObserverTest />,
        },
        {
          path: "/lazy-load",
          element: <LazyLoad />,
        },
        {
          path: "/movie",
          element: <MovieList />,
        },
      ])}
    />
  );
}

export default App;
