import React from "react";
import "./pageinfo.scss";

const Pageinfo = () => {
  return (
    <div className="p-info-sec row">
      <div className="p-info-box">
        <div className="p-info-subtitle col-md-4">
          <h1 className="p-info-title">Описание экскурсии</h1>
          <p className="p-info-text">
            Вас ждет путешествие по "Жемчужине Востока" на Мерседес Спринтер (20
            мест). По маршруту вас будет сопровождать профессиональный гид.
            Посадка на экскурсию осуществляется с вашего отеля или ближайшей
            автобусной остановки.
          </p>
        </div>

        <div className="price-ticket col-sm-2">
          <h1 className="p-info-price">
            <img className="p-info-img" src="img/coins.png" alt="" />
            500 $
          </h1>
          <h1 className="p-info-age">Взрослый билет</h1>
        </div>
        <div className="price-ticket col-sm-2">
          <h1 className="p-info-price">
            <img className="p-info-img" src="img/coins.png" alt="" />
            300 $
          </h1>
          <h1 className="p-info-age">Детский билет</h1>
        </div>
        <div className="price-ticket col-sm-2">
          <h1 className="p-info-price">
            <img className="p-info-img" src="img/clok.png" alt="" />
            12 часов
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Pageinfo;
