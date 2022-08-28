import React from "react";
import Dropdown from "./Dropdown";
import Tag from "./Tag";
import "../styles/info.css";
import Stars from "./Stars";

const Info = ({ accomodation }) => {
  return (
    <section>
      <div className="profil-info">
        <div>
          <h1 className="title-info">{accomodation.title}</h1>
          <h2 className="location-info">{accomodation.location}</h2>
          <ul className="tags-info">
            {accomodation.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </ul>
        </div>
        <div>
          <div className="name-img-info">
            <h3 className="name-info"> {accomodation.host.name} </h3>
            <img className="img-info" src={accomodation.host.picture} alt="" />
          </div>
          <Stars accomodation={accomodation} />
        </div>
      </div>
      <section className="dropdowns-info">
        <Dropdown title="Description" content={accomodation.description} />
        <Dropdown
          title="Equipments"
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
