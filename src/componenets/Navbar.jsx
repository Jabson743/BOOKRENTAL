import React from "react";
import style from "../styles/navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className={style.main}>
      <navbar className={style.navbar}>
        <h2>BookRental</h2>
        <ul>
          <li>
            <a href="home"></a>Home
          </li>
          <li>
            <a href="about"></a>About
          </li>
          <li>
            <a href="service"></a>Service
          </li>
          <li>
            <a href="contact"></a>Contact
          </li>
        </ul>
        <div>
          {/* <Link to="/Login">
            <button>Login</button>
          </Link> */}
          <Link to="/mainpage">
            <button>Sign Up</button>
          </Link>
        </div>
      </navbar>
    </div>
  );
};

export default Navbar;
