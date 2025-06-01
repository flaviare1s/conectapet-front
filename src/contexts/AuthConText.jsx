import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        return jwtDecode(token);
      } catch (err) {
        console.error("Token inválido:", err);
        return null;
      }
    }
    return null;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        setUser(jwtDecode(token));
      } catch (err) {
        setUser(null);
        console.error("Token inválido:", err);
      }
    }
  }, []);

  const login = (userData) => {
    const { token } = userData;
    try {
      const decoded = jwtDecode(token);
      localStorage.setItem('token', token);
      setUser(decoded);
      const redirectTo = decoded.role === "guardian" ? "/mypets" : "/";
      setTimeout(() => navigate(redirectTo), 100);
    } catch (err) {
      console.error("Token inválido:", err);
    }
  };
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
