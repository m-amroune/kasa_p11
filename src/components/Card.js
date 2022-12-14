import React from "react";
import "../styles/card.css";

const Card = ({ accomodation }) => {
  return (
    <li>
      <figure>
        <img src={accomodation.cover} alt="location" />
        <figcaption>{accomodation.title}</figcaption>
      </figure>
    </li>
  );
};

export default Card;
