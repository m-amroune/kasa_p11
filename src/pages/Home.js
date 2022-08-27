import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/index.css";

import ListCards from "../components/ListCards";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="title-home">Chez vous, partout et ailleurs</h1>
      </div>
      <ListCards />
      <Footer />
    </div>
  );
};

export default Home;
