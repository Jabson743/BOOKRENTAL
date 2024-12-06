import React, { useState } from "react";
import style from "../styles/signup.module.css";
import CustomButton from "../reuseables/CustomButton";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const userDetails = {
    username: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(userDetails);

  function handleChange(event) {
    console.log(event);
    const { name, value } = event.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  const handleSubmit = () => {
    console.log("Submitted.....");
    //setTimeout(()=>{
    navigate("/login");
    //}, 2000)
  };

  console.log(data);

  return (
    <div className={style.border}>
     <h2>Sign Up</h2>
     <p>Create your account</p>
      <form onSubmit={handleSubmit} action="">
        <div>
          <input
            type="text"
            name="Username"
            className={style.pass}
            onChange={handleChange}
            placeholder="Enter username..."
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="Email"
            className={style.pass}
            onChange={handleChange}
            placeholder="Enter your Email..."
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="Password"
            className={style.pass}
            placeholder="Enter Password"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password-confirmation"
            name="confirm-password"
            className={style.pass}
            placeholder="Confirm password"
          ></input>
        </div>
        <Link to="/mainpage">
        <CustomButton style={style.btn} type="Submit" textContent="Sign up" />
        </Link> <br></br>
        <span className={style.span}>Already have an account? </span>
        <Link to= "/mainpage">
        <CustomButton style={style.btn} type="Submit" textContent="Login" />
        </Link>
      </form>
      <div>
      </div>
    </div>
  );
};

export default SignUp;
