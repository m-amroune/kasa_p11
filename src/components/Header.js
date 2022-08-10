import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../assets/img/logo.jpg";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={Img} alt="logo kasa" />
      <ul className="navigation">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-active" : "nav-link")}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-active" : "nav-link")}
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
