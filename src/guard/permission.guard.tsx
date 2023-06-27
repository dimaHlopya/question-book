import { Navigate } from 'react-router-dom';

import { AuthService } from '@utils/auth';

const withProtectedRoute = <T extends Record<string, any>>(
  Component: React.ComponentType<T>
): React.ComponentType<T> => {
  return (props: T) => {
    const isAuth = AuthService.isLoggedIn();

    if (!isAuth) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  };
};

export default withProtectedRoute;
