import { createContext, useState } from "react";

// import axios from "axios";

export const AuthContext = createContext();

export const AuthHandler = ({ children }) => {
  const tokenInLocalStorage = JSON.parse(localStorage.getItem("signin"));

  const [token, setToken] = useState(tokenInLocalStorage?.token);

  const [currentUser, setCurrentUser] = useState(tokenInLocalStorage?.user);

  const handleSignIn = async (email, password) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (res.status === 200 || res.status === 201) {
        const { foundUser, encodedToken } = await res.json();
        localStorage.setItem(
          "signin",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setToken(encodedToken);
        setCurrentUser(foundUser);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSignUp = async (firstName, lastName, email, password) => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      if (res.status === 200 || res.status === 201) {
        const { createdUser, encodedToken } = await res.json();
        localStorage.setItem(
          "signup",
          JSON.stringify({ token: encodedToken, currentUser: createdUser })
        );
        setCurrentUser(createdUser);
        setToken(encodedToken);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("signin");
    localStorage.removeItem("signup");
    setToken(null);
    setCurrentUser(null);
  };

  //   console.log(token, currentUser?.cart);

  return (
    <AuthContext.Provider
      value={{ handleSignIn, token, currentUser, handleSignOut, handleSignUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};
