import React from "react";
import data from "./../data/data.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/index.css";
import ListCards from "../components/ListCards";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <section className="main-home">
        <div className="cover-home">
          <h1 className="title-home">Chez vous, partout et ailleurs</h1>
        </div>

        <ListCards data={data} />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
