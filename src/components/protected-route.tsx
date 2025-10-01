import React from "react";
import useUser from "../hook/useUser";
import { Navigate } from "react-router-dom";
import { paths } from "@/config";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  if (user) {
    return children;
  }
  return <Navigate to={paths.home} replace />;
}

export default ProtectedRoute;
