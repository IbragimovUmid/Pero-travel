import React from "react";
// import { Navbar } from 'react-bootstrap'
import Navbar from "../Navbars/Navbars"
import "./headerexcur.scss";

const Headerexcur = () => {
  return (
    <div className="head-img">
      <Navbar/>
      <h1 className="head-ex">НАШИ ЭКСКУРСИИ</h1>
    </div>
  );
};

export default Headerexcur;
