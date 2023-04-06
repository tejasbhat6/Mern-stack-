import React, { useState } from "react";
import "./css/Signup.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("Successful Registration");
      console.log("Successful registration");

      navigate("/login");
    }
  };

  return (
    <>
      <div class="signupFrm">
        <form method="POST" class="form">
          <h1 class="title">Sign up</h1>

          <div className="icon">
            <i class="zmdi zmdi-account"></i>
            <div class="inputContainer">
              <input
                type="text"
                class="input"
                name="name"
                value={user.name}
                onChange={handleInputs}
                placeholder="a"
              />
              <label for="" class="label">
                Name
              </label>
            </div>
          </div>

          <div className="icon">
            <i class="zmdi zmdi-email"></i>
            <div class="inputContainer">
              <input
                type="text"
                class="input"
                name="email"
                value={user.email}
                onChange={handleInputs}
                placeholder="a"
              />
              <label for="" class="label">
                Email
              </label>
            </div>
          </div>

          <div className="icon">
            <i class="zmdi zmdi-lock"></i>
            <div class="inputContainer">
              <input
                type="text"
                class="input"
                name="password"
                value={user.password}
                onChange={handleInputs}
                placeholder="a"
              />
              <label for="" class="label">
                Password
              </label>
            </div>
          </div>

          <div className="icon">
            <i class="zmdi zmdi-lock"></i>
            <div class="inputContainer">
              <input
                type="text"
                class="input"
                name="cpassword"
                value={user.cpassword}
                onChange={handleInputs}
                placeholder="a"
              />
              <label for="" class="label">
                Confirm Password
              </label>
            </div>
          </div>
          <NavLink to="/login" className="signup-image-link">
            I am already register
          </NavLink>
          <input
            type="submit"
            class="submitBtn"
            value="Sign up"
            onClick={PostData}
          />
        </form>
      </div>
    </>
  );
};

export default Signup;
