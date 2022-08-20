import React from "react";
import Dropdown from "./Dropdown";
import Tag from "./Tag";

const Info = ({ accomodation }) => {
  return (
    <div>
      <h1>{accomodation.title}</h1>
      <h2>{accomodation.location}</h2>
      <ul>
        {accomodation.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </ul>
      <h3> {accomodation.host.name} </h3>
      <img src={accomodation.host.picture} alt="" />

      <Dropdown title="Description" />
      <Dropdown title="Equipments" />
    </div>
  );
};

export default Info;
