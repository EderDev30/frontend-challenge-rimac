import React from "react";
import useUser from "../hook/useUser";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  if (user) {
    return children;
  }
  return <Navigate to="/" replace />;
}

export default ProtectedRoute;
