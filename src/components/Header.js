import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../assets/img/logo.jpg";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <figure>
        <img src={Img} alt="logo kasa" />
      </figure>
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
    </header>
  );
};

export default Header;
