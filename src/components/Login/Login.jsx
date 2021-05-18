import "./login-styles.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { LogoSvg } from "../../assets";
import { useAuth } from "../../contexts";

export const Login = () => {
  const emailInputRef = useRef();
  const {
    loginUserWithCredentials,
    isUserLoggedIn,
    setIsUserLoggedIn,
    loggedInUser,
  } = useAuth();

  console.log("useAuth data coming from login page");
  console.log(useAuth());

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

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
              ref={emailInputRef}
              placeholder="Email"
              className={`text-input`}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className={`text-input`}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className={`btn`}
            onClick={() => loginUserWithCredentials(email, password)}
          >{`Login`}</button>
          <p className={`signup-link`}>
            {`Don't have an account? `}
            <Link className={`text-link`} to={`/signup`}>
              <span className={`dark-text`}>{`Signup`}</span>
            </Link>
          </p>
        </article>
      </div>
    </>
  );
};
