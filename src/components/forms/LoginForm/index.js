import { Form, Formik } from "formik";
import React from "react";
import { SCHEMA_LOGIN } from "../../../utils/validateSchemas";
import InputLabel from "../InputLabel";

const initialValues = {
  login: "",
};

const LoginForm = (props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SCHEMA_LOGIN}
    >
      {(formikProps) => {
        return (
          <Form>
            <InputLabel name="login" type="text" placeholder="login" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
