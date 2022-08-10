import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/index.css";
import Img from "../assets/img/banner-home.jpg";
import ListCards from "../components/ListCards";

const Home = () => {
  return (
    <div>
      <Header />
      <img className="img-home" src={Img} alt="banner homePage" />
      <h1 className="title-home">Chez vous, partout et ailleurs</h1>
      <ListCards />
      <Footer />
    </div>
  );
};

export default Home;
