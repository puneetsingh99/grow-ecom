import { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isEmail } from "validator";

import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(() =>
    localStorage.getItem("isUserLoggedIn")
  );
  const [loggedInUser, setLoggedInUser] = useState(() =>
    localStorage.getItem("loggedInUser")
  );

  console.log("logged in user");
  console.log(isUserLoggedIn);

  console.log("logged in user");
  console.log(loggedInUser);

  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    localStorage.setItem("isUserLoggedIn", isUserLoggedIn);
    localStorage.setItem("userId", loggedInUser);
  }, [isUserLoggedIn, loggedInUser]);

  const loginUserWithCredentials = async (email, password) => {
    if (!isEmail(email)) {
      return console.log("Invalid email");
    }
    const loginUrl = `https://e-commerce-backend.puneetsingh2.repl.co/users/login`;
    try {
      const { data } = await axios.post(loginUrl, {
        email,
        password,
      });

      console.log(data);

      if (data.success) {
        setIsUserLoggedIn(() => true);
        setLoggedInUser(() => data.user);
        navigate(state?.from ? state.from : "/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        loggedInUser,
        setLoggedInUser,
        loginUserWithCredentials,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
