import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "./register.css";
export default function Register() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterpassword: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(e.target);
  };

  const register = () => {
    const { name, email, password, reEnterpassword } = user;

    if (name && email && password && reEnterpassword === password) {
      axios.post("http://localhost:3002/register", user).then((res) => {
        alert(res.data.message);
        history.push("/login");
      });
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <>
      <div className="register">
        <span className="registerTitle">Register</span>
        <div className="registerForm">
          <label>Username</label>
          <input
            name="name"
            className="registerInput"
            type="text"
            placeholder="Enter your username..."
            value={user.name}
            onChange={handelChange}
          />
          <label>Email</label>
          <input
            name="email"
            className="registerInput"
            type="email"
            value={user.email}
            placeholder="Enter your email..."
            onChange={handelChange}
          />
          <label>Password</label>
          <input
            name="password"
            className="registerInput"
            type="password"
            value={user.password}
            placeholder="Enter your password..."
            onChange={handelChange}
          />
          <label>Confirm Password</label>
          <input
            name="reEnterpassword"
            className="registerInput"
            type="password"
            value={user.reEnterpassword}
            placeholder="Enter your password..."
            onChange={handelChange}
          />
          <button className="registerButton" onClick={register}>
            Register
          </button>
        </div>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </div>
    </>
  );
}
