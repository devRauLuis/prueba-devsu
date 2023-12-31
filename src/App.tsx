import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage';
import Root from './components/Root';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ProductFormPage from './pages/ProductFormPage';

export const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/formulario-producto/:productId?',
          element: <ProductFormPage />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
