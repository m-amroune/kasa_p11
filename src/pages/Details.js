import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Info from "../components/Info";
import Footer from "../components/Footer";

const Details = ({ data }) => {
  const { id } = useParams();
  const getId = data.filter((accomodation) => accomodation.id === id);
  // if url unknown : error page
  if (getId.length === 0) {
    return <Navigate to="*" />;
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
