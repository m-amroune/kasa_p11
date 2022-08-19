import React from "react";
import { useState } from "react";
import "../styles/dropdown.css";
import Down from "../assets/fonts/chevron-down-solid.svg";
import Up from "../assets/fonts/chevron-up-solid.svg";
const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Ternaire
  return isOpen ? (
    <div className="btnBgc">
      <button className="btnDropdown" onClick={() => setIsOpen(false)}>
        {title} <img src={Down} alt="" />
      </button>
      <p className="btnContent">{content}</p>
    </div>
  ) : (
    <button className="btnDropdown" onClick={() => setIsOpen(true)}>
      {title} <img src={Up} alt="" />
    </button>
  );
};

export default Dropdown;
