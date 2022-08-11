import React from "react";
import SignupForm from "../components/forms/SignupForm";

const SignupPage = () => {
  return (
    <section>
      <h1>create an account</h1>
      <h2>We always keep your name and email adress private.</h2>
      <SignupForm />
    </section>
  );
};

export default SignupPage;
