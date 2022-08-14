import React from "react";
import { Formik, Form } from "formik";
import {
  onSubmit,
  signupInitialValues,
  radioLabel,
} from "../../../utils/utils";
import { SCHEMA_SIGN_UP } from "../../../utils/validateSchemas";
import InputLabel from "../InputLabel";
import RadioLabel from "../RadioLabel";

const SignupForm = () => {
  return (
    <Formik
      initialValues={signupInitialValues}
      onSubmit={onSubmit}
      validationSchema={SCHEMA_SIGN_UP}
    >
      {() => {
        return (
          <Form>
            <InputLabel name="fname" type="text" placeholder="First name" />
            <InputLabel name="lname" type="text" placeholder="Last name" />
            <InputLabel
              name="dname"
              type="text"
              placeholder="display name"
              inputClass={["capitalize"]}
            />
            <InputLabel
              name="email"
              type="email"
              placeholder="email adress"
              inputClass={["capitalize"]}
            />
            <InputLabel
              name="password"
              type="password"
              placeholder="password"
              inputClass={["capitalize"]}
            />
            <InputLabel
              name="confirm"
              type="password"
              placeholder="password confirmation"
              inputClass={["capitalize"]}
            />
            <RadioLabel name="picked" value="one" content={radioLabel.one} />
            <RadioLabel name="picked" value="two" content={radioLabel.two} />
            <InputLabel
              name="submit"
              type="submit"
              value="Create account"
              inputClass={["submit"]}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
