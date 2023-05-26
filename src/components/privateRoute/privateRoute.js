import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";


export function PrivateRoute({ children }) {
  const { token } = useContext(AuthContext);

  const location = useLocation();
  
  return token ? children : <Navigate to="/signin" state={{ from: location?.pathname }} />;
}