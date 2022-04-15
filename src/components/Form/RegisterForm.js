import React from "react";
//  ----STYLED-COMPONENTS----//
import { Wrapper } from "./RegisterStyle";
// ---- FORMIK ----//
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// ---- REUSABLE-COMPONENTS ----//
import { NextButton } from "../../reusableComponents/Button";
// ---- REDUX ----//
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAsync } from "../../Redux/registerSlice/registerSlice";
// VALUES
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  age: "",
};
// Yup
const validationSchema = Yup.object({
  name: Yup.string().required("name is required"),
  email: Yup.string().required("email is required"),
  password: Yup.string().required("password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "PASSWORD CONFIRMATION DOESN'T MATCH PASSWORD")
    .required("confirmPassword is required"),
  age: Yup.number().required("age is required"),
});

const RegisterForm = () => {
  const { error } = useSelector(state => state.register);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, onSubmitProps) => {
          console.log("Sub)mitValues", values);
          dispatch(userRegisterAsync(values));
          onSubmitProps.resetForm();
        }}
        validationSchema={validationSchema}
      >
        <Form method="POST">
          <Field type="text" placeholder="Name" name="name" />
          <div className="error">
            <ErrorMessage className="error" name="name" />
          </div>
          <Field type="text" placeholder="Email" name="email" />
          <div className="error">
            <ErrorMessage className="error" name="email" />
          </div>

          <Field type="text" placeholder="Password" name="password" />
          <div className="error">
            <ErrorMessage name="password" />
          </div>

          <Field type="text" placeholder="ConfirmPassword" name="confirmPassword" />
          <div className="error">
            <ErrorMessage className="error" name="confirmPassword" />
          </div>
          <Field type="text" placeholder="Age" name="age" />
          <div className="error">
            <ErrorMessage className="error" name="age" />
          </div>
          <div style={{ textAlign: "right" }}>
            <NextButton type="submit">submit</NextButton>
          </div>
          {error && (
            <div style={{ background: "red", color: "white", marginTop: "30px", padding: "3px ,14px" }}>{error}</div>
          )}
        </Form>
      </Formik>
    </Wrapper>
  );
};

export default RegisterForm;
