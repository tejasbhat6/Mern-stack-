import React from "react";
import "./css/Signin.css";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div class="signinFrm">
        <form action="" class="form">
          <h1 class="title">Sign in</h1>

          <div className="icon">
            <i class="zmdi zmdi-email"></i>
            <div class="inputContainer">
              <input type="text" class="input" placeholder="a" />
              <label for="" class="label">
                Email
              </label>
            </div>
          </div>

          <div className="icon">
            <i class="zmdi zmdi-lock"></i>
            <div class="inputContainer">
              <input type="text" class="input" placeholder="a" />
              <label for="" class="label">
                Password
              </label>
            </div>
          </div>

          <div className="icon">
          <i class="zmdi zmdi-lock"></i>
            <div class="inputContainer">
              <input type="text" class="input" placeholder="a" />
              <label for="" class="label">
                Confirm Password
              </label>
            </div>
          </div>
          <NavLink to="/signup">Create an Account</NavLink>
          <input type="submit" class="submitBtn" value="Sign in" />
        </form>
      </div>
    </>
  );
};

export default Login;
