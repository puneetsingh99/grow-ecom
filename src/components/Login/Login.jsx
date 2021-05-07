import "./login-styles.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className={`auth-form-container`}>
      <article className={`auth-form`}>
        <h1 className={`form-title`}> Login </h1>
        <div className={`input-text-container`}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className={`text-input`}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className={`text-input`}
          />
        </div>

        <button className={`btn`}>{`Login`}</button>
        <p className={`signup-link`}>
          {`Don't have an account? `}
          <Link className={`text-link`} to={`/signup`}>
            <span className={`dark-text`}>{`Signup`}</span>
          </Link>
        </p>
      </article>
    </div>
  );
};
