import React from "react";
import data from "./../data/data.json";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Error from "./Error";

const Details = () => {
  const { id } = useParams();
  const getId = data.filter((accomodation) => accomodation.id === id);

  if (getId.length === 0) {
    return <Error />;
  }

  return getId.map((accomodation, id) => (
    <div className="details-page" key={id}>
      <Header />
      <section className="main-details">
        <Carousel accomodation={accomodation} />
        <Info accomodation={accomodation} />
      </section>
      <Footer />
    </div>
  ));
};

export default Details;
