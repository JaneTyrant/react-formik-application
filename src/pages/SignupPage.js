import React from "react";
import SignupForm from "../components/forms/SignupForm";
import styles from "./Pages.module.scss";

const SignupPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>create an account</h1>
        <h2 className={styles["sub-heading"]}>We always keep your name and email adress private.</h2>
        <SignupForm />
      </div>
    </section>
  );
};

export default SignupPage;
