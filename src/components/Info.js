import React from "react";
import Dropdown from "./Dropdown";
import Tag from "./Tag";
import "../styles/info.css";
import Stars from "./Stars";

const Info = ({ accomodation }) => {
  return (
    <section>
      <section className="section-info">
        <h1 className="title-info">{accomodation.title}</h1>
        <figure className="img-info">
          <img src={accomodation.host.picture} alt="" />
          <figcaption>{accomodation.host.name}</figcaption>
        </figure>
        <p className="location-info">{accomodation.location}</p>
        <ul className="tags-info">
          {accomodation.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </ul>
        <Stars accomodation={accomodation} />
      </section>
      <section className="dropdowns-info">
        <Dropdown title="Description" content={accomodation.description} />
        <Dropdown
          title="Equipements"
          content={accomodation.equipments.map((item, index) => (
            <li key={index} className="list-equipments">
              {item}
            </li>
          ))}
        />
      </section>
    </section>
  );
};
export default Info;
