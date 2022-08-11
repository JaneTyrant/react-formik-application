import React from "react";
import { Formik, Form } from "formik";
import { onSubmit } from "../../../utils/onSubmit";
import { SCHEMA_SIGN_UP } from "../../../utils/validateSchemas";
import InputLabel from "../InputLabel";

const initialValues = {
  fname: "",
  lname: "",
  dname: "",
  email: "",
  password: "",
  confirm: "",
  buyer: "",
  seller: "",
};

const SignupForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SCHEMA_SIGN_UP}
    >
      {() => {
        return (
          <Form>
            <InputLabel name="fname" type="text" placeholder="First name" />
            <InputLabel name="lname" type="text" placeholder="Last name" />
            <InputLabel name="dname" type="text" placeholder="display name" />
            <InputLabel name="email" type="email" placeholder="email adress" />
            <InputLabel
              name="password"
              type="password"
              placeholder="password"
            />
            <InputLabel
              name="confirm"
              type="password"
              placeholder="password confirmation"
            />
            <InputLabel name="buyer" type="checkbox" />
            <InputLabel name="seller" type="checkbox" />
            <input type="submit" value="Create account" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
