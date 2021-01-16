import React from "react";
import validate from "./validate";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import "../Auth.css";

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
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <main>
        <form onSubmit={formik.handleSubmit}>
          <div className="form__info text-center">
            <h2>Create a Free Account</h2>
          </div>
          <div className="form__control">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="form__control">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="LastName"
              id="lastName"
              placeholder="Last Name"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div className="form__control">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form__control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="form__control">
            <label htmlFor="Vpassword">Verify Password</label>
            <input
              type="password"
              name="Vpassword"
              id="Vpassword"
              placeholder="Verify Password"
              {...formik.getFieldProps("Vpassword")}
            />
            {formik.touched.Vpassword && formik.errors.Vpassword ? (
              <div>{formik.errors.Vpassword}</div>
            ) : null}
          </div>
          <div className="form__control">
            <input type="submit" value="Register" />
          </div>
        </form>
      </main>
      <footer className="text-center">
        <p>
          Already have an account?{" "}
          <Link to="/signin" id="co">
            Login
          </Link>
        </p>
      </footer>
    </>
  );
}

export default Register;
