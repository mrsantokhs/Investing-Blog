import React from "react";
import "./Components.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-main d-flex ">
      <div className="login-left d-flex flex-column align-items-center justify-content-center  bg-dark">
        <h1>
          Investing <br />
          Blog
        </h1>
        <p>Please Log in to continue reading premium content</p>
      </div>
      <div className="login-right w-50">
        <form className="login-form mx-auto ">
          <i className="bi bi-cash-coin login-logo d-flex justify-content-center"></i>
          <h1>Login</h1>
          <div className="mb-3">
            <label htmlFor="emails" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>

          <button type="submit " className="btn btn-dark ">
            Login
          </button>

          <Link to="/join">
            <button type="submit" className="btn w-100 btn-dark mt-3">
              Create an Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
