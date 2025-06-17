import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from '../services/api';

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
        const decoded = jwtDecode(token);

        axios
          .get(`/users/${decoded.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setUser({
              ...decoded,
              nome: response.data.nome,
            });
          })
          .catch((error) => {
            console.error('Erro ao buscar dados do usuário:', error);
            setUser(null);
          });

      } catch (error) {
        console.error('Erro ao decodificar token:', error);
        setUser(null);
      }
    }
  }, []);
  
  const login = (userData) => {
    const { accessToken, refreshToken } = userData;

    try {
      const decoded = jwtDecode(accessToken);
      localStorage.setItem('token', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      axios
        .get(`/users/${decoded.id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          setUser({
            ...decoded,
            nome: response.data.nome,
          });

          const redirectTo = decoded.role === "guardian" ? "/mypets" : "/";
          setTimeout(() => navigate(redirectTo), 100);
        })
        .catch((error) => {
          console.error('Erro ao buscar dados do usuário:', error);
        });

    } catch (error) {
      console.error('Token inválido:', error);
    }
  };  
  
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
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
