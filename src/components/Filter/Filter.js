import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./filter.scss";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Filter = () => {
  return (
    <div data-aos="fade-up" className="filter-list">
      <h1 className="filter-title">Фильтры</h1>
      <div className="fl-prise">
        <h1 className="fl-text">Стоимость</h1>
        <input className="fl-price-output" type="text" />
        <input className="fl-price-output" type="text" />
        <input className="fl-range" type="range" />
      </div>
      <div>
        <h1 className="fl-text">Количество человек</h1>
        <button className="fl-btn">1 чел.</button>
        <button className="fl-btn">2 чел.</button>
        <button className="fl-btn">3 чел.</button>
        <button className="fl-btn">4 чел.</button>
        <button className="fl-btn">5 чел.</button>
        <button className="fl-btn">6 чел.</button>
        <button className="fl-btn">7 чел.</button>
        <button className="fl-btn">8 чел.</button>
        <button className="fl-btn">9 чел.</button>
        <button className="fl-btn">10 чел.</button>
        <button className="fl-bigbtn">Больше 10 чел.</button>
      </div>
      <div className="location-fl">
        <h1 className="fl-text">Место</h1>
        <div>
          <input id="abxaz" type="radio" />
          <label className="location-text" htmlFor="abxaz">
            Самарканд
          </label>
        </div>
        <div>
          <input id="abxaz" type="radio" />
          <label className="location-text" htmlFor="abxaz">
            Бухара
          </label>
        </div>
        <div>
          <input id="abxaz" type="radio" />
          <label className="location-text" htmlFor="abxaz">
            Харезм
          </label>
        </div>
        <div>
          <input id="abxaz" type="radio" />
          <label className="location-text" htmlFor="abxaz">
            Нефритовое озеро
          </label>
        </div>
        <div>
          <input id="abxaz" type="radio" />
          <label className="location-text" htmlFor="abxaz">
            Горы Узбекистана
          </label>
        </div>
      </div>
      <div className="ducation">
        <h1 className="fl-text">Длительность</h1>
      </div>
      <div className="day">
        <h1 className="fl-text">Дата</h1>
      </div>
    </div>
  );
};

export default Filter;
