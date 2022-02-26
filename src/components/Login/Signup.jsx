import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login-styles.css";
import { useEffect, useRef } from "react";
import { LogoSvg } from "../../assets";
import { useSignup } from "./useSignup";
import { useAuth } from "../../contexts";

export const Signup = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { isUserLoggedIn } = useAuth();

  const signup = useSignup();
  const { signupState } = signup;
  // const { status, error } = signup.signupState;

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
          <h1 className={`form-title`}> {`Signup`} </h1>
          <div className={`input-text-container`}>
            <input
              type="text"
              ref={focusInput}
              placeholder="Name"
              className={`text-input`}
              value={signupState.name}
              onChange={signup.setName}
            />
            <input
              type="text"
              placeholder="Email"
              className={`text-input`}
              value={signupState.email}
              onChange={signup.setEmail}
            />
            <input
              type="password"
              placeholder="Password"
              className={`text-input`}
              value={signupState.password}
              onChange={signup.setPassword}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className={`text-input`}
              value={signupState.confirmPassword}
              onChange={signup.setConfirmPassword}
            />
          </div>

          <button
            className={`btn`}
            onClick={signup.onSignupClicked}
          >{`Signup`}</button>
          <p className={`signup-link`}>
            {`Already have an account? `}
            <Link className={`text-link`} to={`/login`}>
              <span className={`dark-text`}>{`Login`}</span>
            </Link>
          </p>
        </article>
      </div>
    </>
  );
};
