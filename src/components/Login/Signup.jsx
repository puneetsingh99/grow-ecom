import { Link } from "react-router-dom";
import "./login-styles.css";
import { useEffect, useRef } from "react";
import { LogoSvg } from "../../assets";
import { useSignup } from "./useSignup";
import { useAuth } from "../../contexts";

export const Signup = () => {
  const nameRef = useRef();
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const { signupState, dispatch, signupUser } = useSignup();
  console.log(signupState);
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
              ref={nameRef}
              placeholder="Name"
              className={`text-input`}
              value={signupState.name}
              onChange={(e) =>
                dispatch({ type: "SET_NAME", payload: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Email"
              className={`text-input`}
              value={signupState.email}
              onChange={(e) =>
                dispatch({ type: "SET_EMAIL", payload: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className={`text-input`}
              value={signupState.password}
              onChange={(e) =>
                dispatch({ type: "SET_PASSWORD", payload: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className={`text-input`}
              value={signupState.confirmPassword}
              onChange={(e) =>
                dispatch({
                  type: "SET_CONFIRM_PASSWORD",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <button
            className={`btn`}
            onClick={() => signupUser(signupState)}
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
