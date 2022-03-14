import React from "react";
import Headerexcur from "../components/HeadExcursion/Headerexcur";
import InfoExcursion from "../components/InfoExcursion/InfoExcursion";
import Filter from "../components/Filter/Filter";
import Content from "../components/Content/Content";


const Excursions = () => {
  return (
    <div>
      <Headerexcur />
      <div className="container">
        <InfoExcursion />
        <div className="d-flex">
          <Filter />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Excursions;
