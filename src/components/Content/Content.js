import React, { useContext } from "react";
import data from "../../data";
import "./content.scss";
import { Link, Routes, Route } from "react-router-dom";
import { Context } from "../../context";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Content = () => {
  const { toursData } = useContext(Context);
  return (
    <div>
      <h1 className="con-turs">Наши туры</h1>
      {toursData.map((el) => {
        return (
          <div data-aos="fade-left" className="con-box">
            <img className="con-img" src={el.img} alt="" />
            <div className="con-data">
              <h1 className="con-title">{el.category}</h1>
              <h2 className="con-category">{el.title}</h2>
              <div className="con-card">
                <div className="con-ticket">
                  <h2 className="con-price">{el.price}</h2>
                  <h2 className="con-age">{el.adult}</h2>
                </div>
                <div className="con-ticket">
                  <h2 className="con-price">{el.pricech}</h2>
                  <h2 className="con-age">{el.child}</h2>
                </div>
                <h2 className="con-price">{el.time} часа</h2>
              </div>
              <h2 className="con-text">{el.text}</h2>
              <div className="con-btns">
                <button className="con-btn">
                  <Link className="con-btn" to="/page3">
                    Подробнее
                  </Link>
                </button>
                <button className="con-btnsave">
                  <img src="img/save.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
