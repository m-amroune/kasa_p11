import React from "react";
import "../styles/card.css";
const Card = ({ accomodation }) => {
  return (
    <li className="card">
      <img src={accomodation.cover} alt="location" />
      <h3>{accomodation.title}</h3>
    </li>
  );
};

export default Card;
