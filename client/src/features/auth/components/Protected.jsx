import Spinner from "../../../components/ui/Spinner";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Protected = ({ children }) => {

  const { user, loading } = useAuth();
  
  if (loading) {
    return <Spinner />
  };
  
  if (!user) {
    return <Navigate to={'/signin'} />
  };
  
  return children
}

export default Protected;