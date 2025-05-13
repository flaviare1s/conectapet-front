import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

// eslint-disable-next-line no-unused-vars
export const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useUser();

  if (!user || user.role !== 'guardian') {
    return <Navigate to="*" replace />;
  }

  return element;
};
