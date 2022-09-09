import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Img from "../assets/img/banner-about.jpg";
import Dropdown from "../components/Dropdown";
import "../styles/index.css";

const About = () => {
  const fiability = `Les annonces postées sur Kasa garantissent une fiabilité totale. 
  Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées 
  par nos équipes.`;
  const respect = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout 
  comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre 
  plateforme.`;
  const service = ` Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question. `;
  const responsability = `La sécurité est la priorité de Kasa. Aussi bien pour nos 
  hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos 
  services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de 
  vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité 
  domestique pour nos hôtes.`;

  return (
    <div className="about-page">
      <Header />
      <section className="main-about">
        <figure>
          <img className="img-about" src={Img} alt="banner about" />
        </figure>

        <div className="dropdowns">
          <Dropdown title="Fiabilité" content={fiability} />
          <Dropdown title="Respect" content={respect} />
          <Dropdown title="Service" content={service} />
          <Dropdown title="Responsabilité" content={responsability} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
