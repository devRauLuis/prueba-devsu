import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage';
import Root from './components/Root';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
