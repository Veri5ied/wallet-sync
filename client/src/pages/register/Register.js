import React from "react";
import validate from "./validate";
import { useFormik } from "formik";
import "./Register.css";

function Register() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      Vpassword: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <main>
        <form>
          <div className="form__info text-center">
            <h2>Create a Free Account</h2>
          </div>
          <div className="form__control">
            <label for="fullname">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="form__control">
            <label for="lastname">Last Name</label>
            <input
              type="text"
              name="LastName"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="form__control">
            <label for="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div className="form__control">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form__control">
            <label for="Vpassword">Verify Password</label>
            <input
              type="password"
              name="Vpassword"
              id="Vpassword"
              placeholder="Verify Password"
            />
          </div>
          <div className="form__control">
            <input type="submit" value="Register" />
          </div>
        </form>
      </main>
      <footer className="text-center">
        <p>
          <a href="#">Already have an account? Login</a>
        </p>
      </footer>
    </>
  );
}

export default Register;
