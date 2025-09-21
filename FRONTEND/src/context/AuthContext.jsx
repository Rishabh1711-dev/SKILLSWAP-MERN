import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('skillswap-token'));
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('skillswap-token');
    const storedUser = localStorage.getItem('skillswap-user');

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setToken(storedToken);
        setUser(parsedUser);
        axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      } catch (e) {
        console.error("Failed to parse user from localStorage", e);
        // Clear corrupted data
        localStorage.removeItem('skillswap-token');
        localStorage.removeItem('skillswap-user');
      }
    }
  }, []);

  const login = async (userData) => {
    localStorage.setItem('skillswap-token', userData.token);
    localStorage.setItem('skillswap-user', JSON.stringify(userData.user));
    setToken(userData.token);
    setUser(userData.user);
    axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
    navigate('/skillswap');
  };

  const logout = () => {
    localStorage.removeItem('skillswap-token');
    localStorage.removeItem('skillswap-user');
    setToken(null);
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
    navigate('/login');
  };

  const authContextValue = {
    user,
    token,
    login,
    logout,
    isAuthenticated: !!token,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

