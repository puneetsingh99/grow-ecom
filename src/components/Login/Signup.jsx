import { Link } from "react-router-dom";
import "./login-styles.css";

export const Signup = () => {
  return (
    <div className={`auth-form-container`}>
      <article className={`auth-form`}>
        <h1 className={`form-title`}> {`Signup`} </h1>
        <div className={`input-text-container`}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className={`text-input`}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className={`text-input`}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Password"
            className={`text-input`}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Confirm Password"
            className={`text-input`}
          />
        </div>

        <button className={`btn`}>{`Signup`}</button>
        <p className={`signup-link`}>
          {`Already have an account? `}
          <Link className={`text-link`} to={`/login`}>
            <span className={`dark-text`}>{`Login`}</span>
          </Link>
        </p>
      </article>
    </div>
  );
};
