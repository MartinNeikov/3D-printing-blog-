import { Navigate, Outlet } from "react-router";

import { useAuth } from "../../hooks/useAuth.js";

function PrivateRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return isAuthenticated
    ? <Outlet />
    : <Navigate to="/login" replace />;
}

export default PrivateRoute;