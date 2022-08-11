import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header>
      <Link to="/">
        <img src="./static/images/logo.png" alt="logo" />
      </Link>
      {pathname === "/login" ? (
        <Link to="/signup">Signup</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <h1>home</h1>
    </header>
  );
};

export default Header;
