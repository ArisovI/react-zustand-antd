import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import PrivateRoute from './pages/PrivateRoute'
import Login from './pages/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
])
