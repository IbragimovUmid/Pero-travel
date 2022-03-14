import React, { useContext } from "react";
import "./sectionCards.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Context } from "../../../context";
AOS.init();

const SectionCards = ({ tours }) => {
  return (
    <div className="grid">
      <div style={{ backgroundImage: `url("${tours.img}" )` }} className="card">
        <h2 className="card-text">{tours.category}</h2>
        <h1 className="card-text-name">{tours.title}</h1>
        <div className="card-text-div">
          <h2 className="card-text-p">{tours.price} $</h2>
          <h2 className="card-text-d">{tours.time} часа</h2>
        </div>
        <h2 className="card-text">{tours.text}</h2>
        <button className="scc-btn">Подробнее</button>
      </div>
    </div>
  );
};


export default SectionCards;
