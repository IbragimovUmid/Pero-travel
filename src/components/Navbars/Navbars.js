import React from "react";
import "./navbars.scss";
import { Link, Routes, Route } from "react-router-dom";

const Navbars = () => {
  return (
    <div className="parent-nav">
      <div className="container">
        <nav>
          <img className="logo" src="img/лого.png" alt="" />
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/excursions">Экскурсии</Link>
            </li>
            <li>
              <Link to="/ownRoom">Личный кабинет</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbars;
