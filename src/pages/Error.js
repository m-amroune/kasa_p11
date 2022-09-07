import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/error.css";

const Error = () => {
  return (
    <div className="error-page">
      <Header />
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </p>
      <Footer />
    </div>
  );
};

export default Error;
