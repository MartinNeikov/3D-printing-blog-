import { Navigate, Outlet } from "react-router";

import { useAuth } from "../../hooks/useAuth.js";

function GuestRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return !isAuthenticated
    ? <Outlet />
    : <Navigate to="/" replace />;
}

export default GuestRoute;