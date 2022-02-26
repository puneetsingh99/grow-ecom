import { createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const loginWithUserCredentials = async (username, password) => {
    try {
      console.log("it works");
    } catch (error) {
      // set an alert over here afterwards
      console.log(error.message);
    }
  };
};
