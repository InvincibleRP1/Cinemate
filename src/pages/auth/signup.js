import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import { Navbar } from "../../components/navbar/navbar";
import "../auth/signin.css";
import { AuthContext } from "../../contexts/authContext";

export const SignUpPage = () => {
  const { handleSignUp, token } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const handleSigningUp = () => {
    const { firstName, lastName, email, password, confirmedPassword } =
      signupDetails;
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== "" &&
      confirmedPassword !== ""
    ) {
      if (password === confirmedPassword && email.includes("@")) {
        handleSignUp(firstName, lastName, email, password);
      } else if (!email.includes("@")) {
        toast.error("Invalid Email!");
      } else if (password !== confirmedPassword) {
        toast.error("Passwords don't match!");
      }
    } else {
      toast.error("Fields cannot be empty!");
    }
  };

  useEffect(() => {
    if (token) {
      navigate(location?.state?.from?.pathname || "/shelf");
    }
  }, [token]);

  return (
    <div className="main-container">
      <Navbar></Navbar>
      <div className="login-container">
        <h2>Signup</h2>
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
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="password-input"
            onChange={(e) =>
              setSignupDetails({ ...signupDetails, password: e.target.value })
            }
          />

          {showPassword ? (
            <FontAwesomeIcon
              className="password-hide-toggle"
              icon={faEyeSlash}
              onClick={() => setShowPassword((val) => !val)}
            />
          ) : (
            <FontAwesomeIcon
              className="password-hide-toggle"
              icon={faEye}
              onClick={() => setShowPassword((val) => !val)}
            />
          )}

          <input
            type={showPassword ? "text" : "password"}
            placeholder=" Confirm password"
            className="password-input"
            onChange={(e) =>
              setSignupDetails({
                ...signupDetails,
                confirmedPassword: e.target.value,
              })
            }
          />

          {showPassword ? (
            <FontAwesomeIcon
              className="password-hide-toggle-confirm"
              icon={faEyeSlash}
              onClick={() => setShowPassword((val) => !val)}
            />
          ) : (
            <FontAwesomeIcon
              className="password-hide-toggle-confirm"
              icon={faEye}
              onClick={() => setShowPassword((val) => !val)}
            />
          )}
        </div>

        <div className="signin-buttons">
          <button className="auth-btn" onClick={handleSigningUp}>
            Sign Up
          </button>
        </div>

        <NavLink to="/signin" className="account-navigate">
          Already have an account? Click here to Login
        </NavLink>
      </div>
    </div>
  );
};
