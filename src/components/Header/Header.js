import React from "react";
import "./header.scss";
import { Link, Routes, Route } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headers">
        <div className="parent-text">
          <h1 className="title-header">ПУТЕШЕСТВУЙ</h1>
          <h3 className="text-header">
            <span>PERO TRAVEL</span>
          </h3>
        </div>

        <button className="hd-btn">
          <Link className="hd-btnp" to="/excursions">
            К экскурсиям
          </Link>
        </button>
      </div>
      <div className="icon-nets">
        <img className="icon-net" src="img/vk.png" alt="" />
        <img className="icon-net" src="img/inst.png" alt="" />
        <img className="icon-net" src="img/facebook.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
