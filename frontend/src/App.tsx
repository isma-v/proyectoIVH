import './App.css';
import Login from './pages/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import GestionUsuarios from './pages/GestionUsuarios';

import ErrorPage from './pages/ErrorPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Login />
        },
        {
          path: 'home',
          element: <Home /> 
        },
        {
          path: 'reports',
          element: <Reports />
        },
        {
          path: 'gestion',
          element: <GestionUsuarios />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
