import "./account-styles.css";
import { useAuth } from "../../contexts";
import { useNavigate } from "react-router";

export const AccountDropdown = ({ showAccountMenu }) => {
  const { isUserLoggedIn, logout } = useAuth();
  console.log({ isUserLoggedIn });
  const navigate = useNavigate();
  return (
    <article className={`account-dropdown ${showAccountMenu && "show"}`}>
      <button
        className={`btn btn-outline login-logout-btn`}
        onClick={isUserLoggedIn ? logout : () => navigate("/login")}
      >
        {isUserLoggedIn ? `Logout` : `Login`}
      </button>
    </article>
  );
};
