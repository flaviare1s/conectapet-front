import { Route, Navigate } from "react-router-dom";
import { useUser } from "../contexts/userContext";

export const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useUser();

  if (!user || user.role !== "guardian") {

    return <Navigate to="/forbiden" replace />;
  }

  return <Route {...rest} element={element} />;
};
