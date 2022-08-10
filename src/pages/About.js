import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Img from "../assets/img/banner-about.jpg";

const About = () => {
  return (
    <div>
      <Header />
      <img className="img-about" src={Img} alt="banner about" />
      <Footer />
    </div>
  );
};

export default About;
