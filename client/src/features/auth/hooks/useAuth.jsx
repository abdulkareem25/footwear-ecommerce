import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { getMe, signIn, signOut } from "../services/auth.api";

const useAuth = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);

  const handleSignUp = async (username, email, password) => {
    setLoading(true);
    const data = await signOut(username, email, password);
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
    const data = await getMe();
    setUser(data.user);
    setLoading(false);
  };

  const handleSignOut = async () => {
    setLoading(true);
    setUser(null);
    setLoading(false);
  };

  useEffect(() => {
    handleGetMe();
  }, []);
  
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
