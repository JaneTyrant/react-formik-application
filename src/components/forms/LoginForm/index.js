import React from "react";
import { Formik, Form } from "formik";
import { onSubmit } from "../../../utils/onSubmit";
import { SCHEMA_LOGIN } from "../../../utils/validateSchemas";
import InputLabel from "../InputLabel";
import styles from "../Forms.module.scss"

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
            <InputLabel className={styles.input} name="email" type="text" placeholder="Email adress" />
            <InputLabel className={styles.input}
              name="password"
              type="password"
              placeholder="password"
            />
            <input type="submit" value="login" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
