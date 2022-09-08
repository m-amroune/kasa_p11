import React from "react";
import { useState } from "react";
import "../styles/dropdown.css";
import Down from "../assets/fonts/chevron-down-solid.svg";
import Up from "../assets/fonts/chevron-up-solid.svg";
const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Ternaire
  return isOpen ? (
    <section className="section-dropdowns">
      <button className="btn-dropdown" onClick={() => setIsOpen(false)}>
        {title} <img src={Up} alt="chevron up" />
      </button>
      <div>
        <ul className="btn-content">{content}</ul>
      </div>
    </section>
  ) : (
    <section className="section-dropdowns">
      <button className="btn-dropdown" onClick={() => setIsOpen(true)}>
        {title} <img src={Down} alt="chevron down" />
      </button>
    </section>
  );
};

export default Dropdown;
