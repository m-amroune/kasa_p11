import React from "react";
import data from "./../data/data.json";
import Card from "./Card";
import "../styles/card.css";
import { Link } from "react-router-dom";

const ListCards = () => {
  return (
    <div className="accomodations">
      <ul className="list-cards">
        {data.map((accomodation, index) => (
          <div className="card" key={index}>
            <Link
              to={`/details-logement/${accomodation.id}`}
              key={accomodation.id}
            >
              <Card key={index} accomodation={accomodation} />
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListCards;
