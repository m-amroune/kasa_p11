import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "../styles/card.css";
import { Link } from "react-router-dom";

const ListCards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("../../data.json").then((res) => setData(res.data));
  }, []);

  return (
    <div className="accomodations">
      <ul className="list-cards">
        {data.map((accomodation, index) => (
          <Link to="/accomodation:id">
            <Card key={index} accomodation={accomodation} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ListCards;
