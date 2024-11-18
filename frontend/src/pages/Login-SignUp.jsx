
import React, { useState } from "react";
import "./css/Login-SignUp.css";

export default function LoginSignUp() {
  const [satate, setSatate] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const Login = async () => {
    let responData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((respon) => respon.json())
      .then((data) => (responData = data));
    console.log(responData.success);

    if (responData.success) {
      localStorage.setItem("auth-token", responData.token);
      window.location.replace("/");
    } else {
      alert(responData.errors);
    }
    console.log("sign Up", formData);
  };

  const Sign_Up = async () => {
    let responData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((respon) => respon.json())
      .then((data) => (responData = data));
    console.log(responData.success);

    if (responData.success) {
      localStorage.setItem("auth-token", responData.token);
      window.location.replace("/");
    } else {
      alert(responData.errors);
    }

    //console.log("login", formData);
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-SignUp">
      <div className="loginsignup-container">
        <h1>{satate}</h1>
        <div className="loginsignup-fields">
          {satate === "Sign Up" ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Your Name"
              onChange={changeHandler}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>
        <button
          onClick={() => {
            satate === "Sign Up" ? Sign_Up() : Login();
          }}
        >
          Continue
        </button>

        {satate === "Sign Up" ? (
          <p className="loginsignup-login">
            {" "}
            Already have an account"
            <span
              onClick={() => {
                setSatate("Login");
              }}
            >
              "Login here"
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account ?
            <span
              onClick={() => {
                setSatate("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}
