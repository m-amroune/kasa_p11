import React from "react";
import Img from "../assets/img/logo-footer.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Img} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
