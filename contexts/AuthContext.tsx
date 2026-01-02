import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { email: string } | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    // Check if user is already logged in (fake persistence)
    const checkStoredUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          setUser(userData);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error checking stored user:', error);
      }
    };
    checkStoredUser();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Fake authentication logic - accepts any email/password
    if (email && password) {
      const userData = { email };
      setUser(userData);
      setIsAuthenticated(true);
      try {
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        return true;
      } catch (error) {
        console.error('Error storing user data:', error);
        return false;
      }
    }
    return false;
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    // Fake signup logic - accepts any email/password/name
    if (email && password && name) {
      const userData = { email };
      setUser(userData);
      setIsAuthenticated(true);
      try {
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        return true;
      } catch (error) {
        console.error('Error storing user data:', error);
        return false;
      }
    }
    return false;
  };

  const logout = async () => {
    setUser(null);
    setIsAuthenticated(false);
    try {
      await AsyncStorage.removeItem('user');
    } catch (error) {
      console.error('Error removing user data:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
