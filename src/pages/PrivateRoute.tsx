import { Navigate } from 'react-router-dom'
import { useStore } from '../store'

type PrivateRouteProps = {
  children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = useStore((state) => state.isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />
  }

  return children
}

export default PrivateRoute
