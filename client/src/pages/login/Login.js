import React from "react";
import { Link } from "react-router-dom";
import "../Auth.css";

function Login() {
  return (
    <>
      <main>
        <form>
          <div className="form__info text-center">
            <h2>Welcome back! Sign In</h2>
          </div>
          <div className="form__control">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div className="form__control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form__control">
            <input type="submit" value="Sign In" />
          </div>
        </form>
      </main>
      <footer className="text-center">
        <p>
          No account?{" "}
          <Link to="/register" id="co">
            Register
          </Link>
        </p>
      </footer>
    </>
  );
}

export default Login;
