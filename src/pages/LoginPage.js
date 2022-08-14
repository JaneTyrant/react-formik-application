import React from "react";
import LoginForm from "../components/forms/LoginForm";
import styles from "./Pages.module.scss";

const LoginPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>login to your account</h1>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
