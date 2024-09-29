import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { IntersectionObserverTest } from './components/IntersectionObserverTest'
import { LazyLoad } from './components/LazyLoad'

function App() {
  return (
    <>
    <RouterProvider router={createBrowserRouter([
        {
          path: '/',
          element: <IntersectionObserverTest />
        },
        {
          path: '/lazy-load',
          element: <LazyLoad />
        }
      ])} />
    </>
  )
}

export default App
