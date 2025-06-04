import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Home } from "../pages/Home";

export const RedirectHome = () => {
  const { user } = useAuth();

  if (user?.role === "guardian") {
    return <Navigate to="/mypets" replace />;
  }
  
  return <Home />;
};
