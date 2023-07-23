import { Navigate } from 'react-router-dom';
import { useAuth } from '../utils/useAuth';

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ component, redirect = '/contacts' }) => {
  const { isAuthorized, isRefreshing } = useAuth();
  const shouldRedirect = !isAuthorized && !isRefreshing;
  
  return shouldRedirect ? component : <Navigate to={redirect} replace />;
};

export default PublicRoute;