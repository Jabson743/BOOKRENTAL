import React, { useState } from "react";
import style from "../styles/login.module.css";
import CustomButton from "../reuseables/CustomButton";
import { Link } from "react-router-dom";

const Login = () => {
  const userLoginDetails = {
    email: "",
    password: "",
  };

  const [data, setLoginData] = useState(userLoginDetails);

  function handleChange(event) {
    console.log(event);
    const { name, value } = event.target;

    setLoginData((prevDataLogin) => {
      return { ...prevDataLogin, [name]: value };
    });
  }

  return (
    <div className={style.mainContainer}>
      <h2>Welcome Back</h2>
      <p>Enter your credentials to login</p>
      <form action="">
        <div>
          <input
            type="email"
            name="Email"
            className={style.input}
            onChange={handleChange}
            placeholder="Enter your Email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="Password"
            className={style.input}
            placeholder="Enter Password"
            onChange={handleChange}
            required
          />
        </div>
        <Link to= "/mainpage">
        <CustomButton style={style.btn} type="Submit" textContent="Login" />
        </Link>
        <p>Forget password</p>
        <p>
          Don't have an account? <span style={style.spanning}>sign up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
