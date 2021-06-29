import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="join-main d-flex ">
      <div className="join-left d-flex flex-column align-items-center justify-content-center  bg-dark">
        <i className="bi bi-cash-coin join-logo d-flex justify-content-center"></i>
        <h1>Welcome to the Investing Blog</h1>
        <h5>Please Signup to Unlock following features: </h5>
      </div>
      <div className="join-right w-50">
        <form className="join-form mx-auto ">
          <h1>Signup</h1>
          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="emails" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>

          <p className="join-policy">
            By clicking "Signup", you agree to the Terms and Privacy Policy to
            create a Investing Blog account
          </p>

          <button type="submit " className="btn btn-dark w-100 ">
            Signup
          </button>
          <p className="mt-2">Already have Account ?</p>
          <Link to="/login">
            <button
              type="button"
              className="btn btn-sm join-login-buton w-100 btn-dark mt-3"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Join;
