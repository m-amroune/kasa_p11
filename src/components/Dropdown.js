import React from "react";
import { useState } from "react";
import "../styles/dropdown.css";
import Down from "../assets/fonts/chevron-down-solid.svg";
import Up from "../assets/fonts/chevron-up-solid.svg";
const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Ternaire
  return isOpen ? (
    <div>
      <button className="btnDropdown" onClick={() => setIsOpen(false)}>
        {title} <img src={Up} alt="" />
      </button>
      <div>
        <ul className="btnContent">{content}</ul>
      </div>
    </div>
  ) : (
    <button className="btnDropdown" onClick={() => setIsOpen(true)}>
      {title} <img src={Down} alt="" />
    </button>
  );
};

export default Dropdown;
