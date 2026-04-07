import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { initializeAuth, signIn, signOut, signUp } from "../services/auth.api";

const useAuth = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);

  const handleSignUp = async (username, email, password) => {
    setLoading(true);
    const data = await signUp(username, email, password);
    setUser(data.user);
    setLoading(false);
  };

  const handleSignIn = async (credential, password) => {
    setLoading(true);
    const data = await signIn(credential, password);
    setUser(data.user);
    setLoading(false);
  };

  const handleGetMe = async () => {
    setLoading(true);
    const initialUser = await initializeAuth();
    setUser(initialUser);
    setLoading(false);
  };

  const handleSignOut = async () => {
    setLoading(true);
    await signOut();
    setUser(null);
    setLoading(false);
  };

  return ({
    user,
    loading,
    handleSignUp,
    handleSignIn,
    handleGetMe,
    handleSignOut
  });
}

export default useAuth;
