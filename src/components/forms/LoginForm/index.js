import React from "react";
import { Formik, Form } from "formik";
import { onSubmit } from "../../../utils/utils";
import { SCHEMA_LOGIN } from "../../../utils/validateSchemas";
import InputLabel from "../InputLabel";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SCHEMA_LOGIN}
    >
      {() => {
        return (
          <Form>
            <InputLabel
              name="email"
              type="text"
              placeholder="Email adress"
              inputClass={["input-width"]}
            />
            <InputLabel
              name="password"
              type="password"
              placeholder="password"
              inputClass={["input-width"]}
            />
            <InputLabel
              name="submit"
              type="submit"
              value="login"
              inputClass={["submit", "login-submit"]}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
