import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider";

const Details = ({ data }) => {
  const { id } = useParams();
  const getId = data.filter((accomodation) => accomodation.id === id);
  return getId.map((accomodation, id) => (
    <div key={id}>
      <Header />
      <Slider accomodation={accomodation} />
    </div>
  ));
};

export default Details;
