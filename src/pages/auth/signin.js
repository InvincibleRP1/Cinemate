/* eslint-disable */
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";

import "../auth/signin.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext";

export const SignInPage = () => {
  const { handleSignIn, token } = useContext(AuthContext);

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handlingLogIn = () => {
    if (loginDetails.email && loginDetails.password !== "") {
      handleSignIn(loginDetails.email, loginDetails.password);
    }
  };

  const handleTestLogin = () => {
    setLoginDetails((loginDetails) => ({
      ...loginDetails,
      email: "rahulpandey@gmail.com",
      password: "noice123",
    }));
  };

  useEffect(() => {
    if (token) {
      navigate(location?.state?.from?.pathname || "/shelf");
    }
  }, [token]);

  useEffect(() => {
    handleSignIn(loginDetails.email, loginDetails.password);
  }, [loginDetails.email, loginDetails.password]);

  return (
    <div className="main-container">
      <Navbar></Navbar>
      <div className="login-container">
        <div className="input-area">
          <input
            type="text"
            placeholder="Enter your email"
            className="email-input"
            value={loginDetails.email}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="password-input"
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
          />
        </div>

        <div className="signin-buttons">
          <button className="auth-btn" onClick={handlingLogIn}>
            Log In
          </button>
          <button className="auth-btn" onClick={handleTestLogin}>
            Login with test credentials
          </button>
        </div>

        <NavLink to="/signup">Create new account</NavLink>
      </div>
    </div>
  );
};
