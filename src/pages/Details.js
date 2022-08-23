import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Info from "../components/Info";
import Error from "./Error";

const Details = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("../../data.json").then((res) => setData(res.data));
  }, []);

  const { id } = useParams();
  let getId = data.filter((accomodation) => accomodation.id === id);

  return getId.length > 0 ? (
    getId.map((accomodation, id) => (
      <div key={id}>
        <Header />
        <Carousel accomodation={accomodation} />
        <Info accomodation={accomodation} />
      </div>
    ))
  ) : (
    <Error />
  );
};

export default Details;
