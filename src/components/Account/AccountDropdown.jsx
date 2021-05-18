import "./account-styles.css";
import { useAuth } from "../../contexts";
import { useNavigate } from "react-router";
import { loginLogoutHandler } from "./loginLogoutHandler";

export const AccountDropdown = ({ showAccountMenu }) => {
  const { isUserLoggedIn, setIsUserLoggedIn, setLoggedInUser } = useAuth();
  const navigate = useNavigate();

  return (
    <article className={`account-dropdown ${showAccountMenu && "show"}`}>
      <button
        className={`btn btn-outline login-logout-btn`}
        onClick={() =>
          loginLogoutHandler(
            isUserLoggedIn,
            setIsUserLoggedIn,
            setLoggedInUser,
            navigate
          )
        }
      >
        {isUserLoggedIn ? `Logout` : `Login`}
      </button>
    </article>
  );
};
