import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { Navbar } from "../../components/navbar/navbar";
import "../auth/signin.css";
import { AuthContext } from "../../contexts/authContext";

export const SignInPage = () => {
  const { handleSignIn, token } = useContext(AuthContext);

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });


  const [showPassword, setShowPassword] = useState(false);

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

  const passwordToggle = () => {
    setShowPassword((prevVal) => !prevVal);
  }

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
        <h2>Login</h2>
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
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="password-input"
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
          />

          {showPassword ? <FontAwesomeIcon
            icon={faEyeSlash}
            className="password-visibility-toggle"
            onClick={passwordToggle}
          /> :<FontAwesomeIcon
            icon={faEye}
            className="password-visibility-toggle"
            onClick={passwordToggle}
          />}
        </div>

        <div className="signin-buttons">
          <button className="auth-btn" onClick={handlingLogIn}>
            Log In
          </button>
          <button className="auth-btn" onClick={handleTestLogin}>
            Login with test credentials
          </button>
        </div>

        <NavLink className="account-navigate" to="/signup">
          Create new account
        </NavLink>
      </div>
    </div>
  );
};
