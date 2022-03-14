import React from "react";
import "./pagethree.scss";
import Navbars from "../Navbars/Navbars";

const Pagethree = () => {
  return (
    <div className="p-three-head">
      <Navbars />
      <div className="p-three-header">
        <h1 className="p-three-text">Автобусный тур</h1>
        <h1 className="p-three-title">
          САМАРКАНД — ЖЕМЧУЖИНА ВОСТОКА
          <br />
          (ИЗ ТАШКЕНТА)
        </h1>
        <button className="p-three-btn">К другим экскурсиям</button>
      </div>
    </div>
  );
};

export default Pagethree;
