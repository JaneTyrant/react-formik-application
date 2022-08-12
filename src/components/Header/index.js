import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from './Header.module.scss'

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <Link className={styles["header-heading"]} to="/">
        <img src="./static/images/logo.png" alt="logo" />
      </Link>
      {pathname === "/login" ? (
        <Link className={styles["sign-link"]} to="/signup">Signup</Link>
      ) : (
        <Link className={styles["sign-link"]} to="/login">Login</Link>
      )}
    </header>
  );
};

export default Header;
