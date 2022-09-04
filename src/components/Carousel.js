import React, { useState } from "react";
import "../styles/carousel.css";
import Left from "../assets/fonts/chevron-left-solid.svg";
import Right from "../assets/fonts/chevron-right-solid.svg";

const Carousel = ({ accomodation }) => {
  const [position, setPosition] = useState(0);
  const pictures = accomodation.pictures;

  if (position === 0 && pictures.length > 1) {
    return (
      <section className="background-slider">
        <figure>
          <img className="cover-slider" src={pictures[0]} alt="" />
        </figure>
        <button
          className="left-slider"
          onClick={() => setPosition(pictures.length - 1)}
        >
          <figure>
            <img className="img-left-slider" src={Left} alt="" />
          </figure>
        </button>
        <button
          className="right-slider"
          onClick={() => setPosition(position + 1)}
        >
          <figure>
            <img className="img-right-slider" src={Right} alt="" />
          </figure>
        </button>
      </section>
    );
  } else if (position > 0) {
    return (
      <section className="background-slider">
        <figure>
          <img
            className="cover-slider"
            src={pictures[position]}
            alt="hébergement"
          />
        </figure>

        <button
          className="left-slider"
          onClick={() =>
            position > 0
              ? setPosition(position - 1)
              : setPosition(pictures.length - 1)
          }
        >
          <figure>
            <img className="img-left-slider" src={Left} alt="" />
          </figure>
        </button>
        <button
          className="right-slider"
          onClick={() =>
            position < pictures.length - 1
              ? setPosition(position + 1)
              : setPosition(0)
          }
        >
          <figure>
            <img className="img-right-slider" src={Right} alt="" />
          </figure>
        </button>

        <figcaption className="slides-counter">
          {(position + 1).toString()}/{pictures.length.toString()}
        </figcaption>
      </section>
    );
  } else {
    return (
      <section className="background-slider">
        <figure>
          <img className="cover-slider" src={accomodation.pictures[0]} alt="" />
        </figure>
      </section>
    );
  }
};

export default Carousel;
