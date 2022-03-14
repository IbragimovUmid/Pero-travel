import React from "react";
import "./expenses.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const Expenses = () => {
  return (
    <div data-aos="fade-up" className="exp-div">
      <h1 className="exp-title">Дополнительные расходы (по желанию)</h1>
      <div className="exp-main row">
        <div className="price-ticket col-sm-2">
          <h1 className="p-info-price">
            <img className="p-info-img" src="img/coins.png" alt="" />
            500 $
          </h1>
          <h1 className="p-info-age">Дача Сталина</h1>
        </div>
        <div className="price-ticket col-sm-2">
          <h1 className="p-info-price">
            <img className="p-info-img" src="img/coins.png" alt="" />
            300 $
          </h1>
          <h1 className="p-info-age">Молочный водопад</h1>
        </div>
        <div className="price-ticket col-sm-2">
          <h1 className="p-info-price">
            <img className="p-info-img" src="img/coins.png" alt="" />
            300 $
          </h1>
          <h1 className="p-info-age">Новоафинская пещера</h1>
        </div>
        <div className="price-ticket col-sm-2">
          <h1 className="p-info-price">
            <img className="p-info-img" src="img/coins.png" alt="" />
            300 $
          </h1>
          <h1 className="p-info-age">Термальный источник</h1>
        </div>
        <div className="price-ticket col-sm-2">
          <h1 className="p-info-price"></h1>
          <h1 className="p-info-age">Обед</h1>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
