import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />
  }

  if (user.role !== "guardian") {

    return <Navigate to="/forbidden" replace />;
  }

  return children;
};
