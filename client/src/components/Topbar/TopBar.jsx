import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";

export default function TopBar() {
  let data = sessionStorage.getItem("userdata");
  data = JSON.parse(data);

  let user;
  if (data) {
    user = true;
  } else {
    user = false;
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="toplistItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>

          <li className="toplistItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>

          <li className="toplistItem">
            {user && <li className="topListItem">LOGOUT</li>}
          </li>
        </ul>
      </div>

      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://unsplash.com/photos/oW0CzBnJHec"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="toplistItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="top"></li>
            <li className="toplistItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
