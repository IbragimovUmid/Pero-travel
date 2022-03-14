import React, { useContext } from "react";
import "./section.scss";
import SectionCards from "./SectionCards/SectionCards";
import datatur from "../../datatur";
import { Context } from "../../context";
const Section = () => {
  const { walksData } = useContext(Context);
  // console.log(datatur);
  return (
    <div className="section">
      <div className="section-start">
        <h1 className="sc-title">Популярные экскурсии</h1>
        <h2 className="sc-subtitle">Смотреть все</h2>
      </div>
      <div className="grid">
        {walksData.map((tours) => {
          return <SectionCards tours={tours} />;
        })}
      </div>
    </div>
  );
};

export default Section;
