import axios from "axios";
import { isEmail } from "validator";
import { useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const signupReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };

    case "SET_CONFIRM_PASSWORD":
      return {
        ...state,
        confirmPassword: action.payload,
      };

    default:
      return state;
  }
};

const createUser = (name, email, password) => ({
  name,
  email,
  password,
});

export const useSignup = () => {
  const [signupState, dispatch] = useReducer(signupReducer, initialState);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { isUserLoggedIn, setIsUserLoggedIn } = useAuth();

  console.log({ isUserLoggedIn });

  const signupUser = async ({ name, email, password, confirmPassword }) => {
    if (!isEmail(email)) {
      return console.log("Invalid email");
    }
    if (password !== confirmPassword) {
      return console.log("Passwords do not match");
    }

    const user = createUser(name, email, password);

    const addUserUrl = `https://e-commerce-backend.puneetsingh2.repl.co/users/`;

    try {
      const { data } = await axios.post(addUserUrl, user);
      console.log(data);
      if (!data.success) {
        console.log(data.message);
      } else {
        console.log("State ");
        console.log({ state });
        setIsUserLoggedIn(() => true);
        navigate(state?.from ? state.from : "/");
      }
    } catch (error) {
      console.log("user creation failed");
      console.log(error.message);
    }
  };
  return { signupState, dispatch, signupUser };
};
