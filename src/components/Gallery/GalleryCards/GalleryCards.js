import React from "react";
import "./galleryCards.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const GalleryCards = () => {
  return (
    <div data-aos="fade-up" className="container">
      <div className="grid">
        <div className="one">
          <img src="img/5.png" alt="" />
        </div>
        <div className="two">
          <img src="img/3.png" alt="" />
        </div>
        <div className="three span-v">
          <img src="img/2.png" alt="" />
        </div>
        <div className="four span-h">
          <img src="img/8.png" alt="" />
        </div>
        <div className="one span-v span-h">
          <img src="img/1.png" alt="" />
        </div>
        <div className="two">
          <img src="img/6.png" alt="" />
        </div>
        <div className="three span-h">
          <img src="img/7.png" alt="" />
        </div>
        <div className="four span-v">
          <img src="img/4.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GalleryCards;
