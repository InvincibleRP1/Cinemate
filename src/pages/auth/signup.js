
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";

import "../auth/signin.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext";

export const SignUpPage = () => {
  const { handleSignUp, token } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSigningUp = () => {
    const { firstName, lastName, email, password } = signupDetails;
    if (firstName !== "" && lastName !== "" && email !=="" && password !== "") {
      handleSignUp(firstName, lastName, email, password);
    }
  };
  

  useEffect(() => {
    if (token) {
      navigate(location?.state?.from?.pathname || "/shelf");
    }
  }, [token]);

  console.log(token);

  return (
    <div className="main-container">
      <Navbar></Navbar>
      <div className="login-container">
        <div className="input-area">
          <input
            type="text"
            placeholder="Enter your First Name"
            className="email-input"
            onChange={(e) =>
              setSignupDetails({ ...signupDetails, firstName: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Enter your Last Name"
            className="password-input"
            onChange={(e) =>
              setSignupDetails({ ...signupDetails, lastName: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Enter your email"
            className="email-input"
            onChange={(e) =>
              setSignupDetails({ ...signupDetails, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="password-input"
            onChange={(e) =>
              setSignupDetails({ ...signupDetails, password: e.target.value })
            }
          />
        </div>

        <div className="signin-buttons">
          <button className="auth-btn" onClick={handleSigningUp}>
            Sign Up
          </button>
        </div>

        <NavLink to="/signin">
          Already have an account? Click here to Login
        </NavLink>
      </div>
    </div>
  );
};
