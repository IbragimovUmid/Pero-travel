import React from 'react'
import './infoexcursion.scss'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const InfoExcursion = () => {
  return (
    <div data-aos="fade-up" className="main-div">
      <div className="excursion-list">
        <button className="swiper-tur">АВТОБУСНЫЙ ТУР</button>
        <button className="swiper-tur">ДЖИППИНГ</button>
        <button className="swiper-tur">ЯХТИНГ</button>
        <button className="swiper-tur">КАНЬОНИНГ</button>
      </div>
    </div>
  );
}

export default InfoExcursion