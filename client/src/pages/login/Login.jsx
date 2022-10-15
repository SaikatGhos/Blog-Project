import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
export default function Login({ setLoginUser }) {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:3002/login", user).then((res) => {
      alert(res.data.message);
      // setLoginUser(res.data.user);
      sessionStorage.setItem("userdata", JSON.stringify(res.data.user));
      history.push({ pathname: "/", state: res.data.user });
    });
  };
  return (
    <>
      <div className="login">
        <span className="loginTitle">Login</span>
        <div className="loginForm">
          <label>Email</label>
          <input
            name="email"
            className="loginInput"
            type="email"
            placeholder="Enter your email..."
            value={user.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            name="password"
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
            value={user.password}
            onChange={handleChange}
          />
          <button className="loginButton" onClick={login}>
            Login
          </button>
        </div>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </div>
    </>
  );
}
