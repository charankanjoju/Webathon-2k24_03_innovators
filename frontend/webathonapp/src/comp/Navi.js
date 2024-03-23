import React from "react";
import { Link } from "react-router-dom";

function Navi() {
  return (
    <ul className="nav bg-black justify-content-end">
      <li className="nav-item">
        <Link className="nav-link " to="register">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="login">
          Login
        </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link " to="contactus">
          Contact Us
        </Link>
      </li>
    </ul>
  );
}

export default Navi;