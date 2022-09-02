import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useParams, Navigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Info from "../components/Info";

import Footer from "../components/Footer";

const Details = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("../../data.json").then((res) => setData(res.data));
  }, []);
  // utiliser async await
  const { id } = useParams();
  let getId = data.filter((accomodation) => accomodation.id === id);
  console.log(getId);
  // if (getId.length === 0) {
  //   return <Navigate to="*" />;
  // }
  return getId.map((accomodation, id) => (
    <div key={id}>
      <Header />
      <Carousel accomodation={accomodation} />
      <Info accomodation={accomodation} />
      <Footer />
    </div>
  ));
};

export default Details;
