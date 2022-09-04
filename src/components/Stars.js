import React from "react";
import RedStar from "../assets/fonts/red-stars.svg";
import GreyStar from "../assets/fonts/grey-stars.svg";

import "../styles/stars.css";

const Stars = ({ accomodation }) => {
  const allStars = Array(5).fill(0);
  return (
    <div className="stars-rating">
      {allStars.map((_, index) =>
        accomodation.rating > index ? (
          <i key={index}>
            <img className="starRating" src={RedStar} alt="" />
          </i>
        ) : (
          <i key={index}>
            <img className="starRating" src={GreyStar} alt="" />
          </i>
        )
      )}
    </div>
  );
};

export default Stars;
