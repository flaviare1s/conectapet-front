import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/userContext";

export const PrivateRoute = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" />
  }

  if (user.role !== "guardian") {

    return <Navigate to="/forbidden" replace />;
  }

  return children;
};
