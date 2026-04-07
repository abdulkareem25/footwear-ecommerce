import { createContext, useEffect, useState } from "react";
import { initializeAuth } from "../services/auth.api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const initialUser = await initializeAuth();
      setUser(initialUser);
      setLoading(false);
    };
    init();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  )
}