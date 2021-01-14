import React from "react";
import validate from "./validate";
import { useFormik } from "formik";

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
  return <div></div>;
}

export default Register;
