import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import { getUser } from "./getUser";

export const UserContext = createContext(null);

const initialState = {
  status: "idle",
  user: null,
  error: null,
};

export const UserProvider = ({ children }) => {
  const { userId } = useAuth();
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    if (userId) {
      (async function () {
        try {
          setUser((prevUser) => ({
            ...prevUser,
            status: "loading",
          }));

          const response = await getUser(userId);

          if (response.user) {
            return setUser({
              status: "succeeded",
              user: response.user,
              error: null,
            });
          }

          setUser({
            status: "error",
            user: null,
            error: response.message,
          });
        } catch (error) {
          console.error(error.message);
        }
      })();
    }
  }, [userId]);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
