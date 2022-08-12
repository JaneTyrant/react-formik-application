import React from "react";
import LoginForm from "../components/forms/LoginForm";
import styles from "./Pages.module.scss";

const LoginPage = () => {
  return (
    <section>
      <h1 className={styles.heading}>login to your account</h1>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
