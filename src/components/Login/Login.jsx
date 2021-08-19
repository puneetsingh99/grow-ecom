import "./login-styles.css";
import { LogoSvg } from "../../assets";
import { useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLogin } from "./useLogin";
import { useAuth } from "../../contexts";
import { ROUTE_SIGNUP } from "../../routes";

export const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { isUserLoggedIn } = useAuth();

  const login = useLogin();

  const focusInput = useRef(null);

  useEffect(() => {
    isUserLoggedIn && navigate(state?.from || "/");
    focusInput.current && focusInput.current.focus();
  }, [focusInput, isUserLoggedIn]);

  return (
    <>
      <div className={`flex ml-4 p-4`}>
        <div className="logo-icon">
          <Link to="/" className={`text-link`}>
            <LogoSvg />
          </Link>
        </div>

        <div className="logo-name">
          <Link to="/" className={`text-link`}>
            <h1>Grow</h1>
          </Link>
        </div>
      </div>
      <div className={`auth-form-container`}>
        <article className={`auth-form`}>
          <h1 className={`form-title`}> Login </h1>
          <div className={`input-text-container`}>
            <input
              type="text"
              name="email"
              id="email"
              ref={focusInput}
              placeholder="Email"
              className={`text-input`}
              onChange={login.setEmail}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className={`text-input`}
              onChange={login.setPassword}
            />
          </div>

          <button
            className={`btn`}
            onClick={login.onLoginClicked}
          >{`Login`}</button>

          <button
            className={`btn`}
            onClick={login.onGuestLoginClicked}
          >{`Login as guest`}</button>
          <p className={`signup-link`}>
            {`Don't have an account? `}
            <Link className={`text-link`} to={ROUTE_SIGNUP}>
              <span className={`dark-text`}>{`Signup`}</span>
            </Link>
          </p>
        </article>
      </div>
    </>
  );
};
