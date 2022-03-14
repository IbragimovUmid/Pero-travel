import React from "react";
import "./secondSection.scss";
import SecondSectionCard from "./SecondSectionCard/SecondSectionCard";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const SecondSection = () => {
  return (
    <div data-aos="fade-up" className="second-section">
      <h1 className="ss-name">Виды экскурсий</h1>
      <div className="row ss-card">
        <SecondSectionCard />
        <SecondSectionCard />
        <SecondSectionCard />
        <SecondSectionCard />
      </div>
      <div className="ss-title">
        <p className="ss-text">
          Выбирайте на нашем сайте экскурсию, которая подходит именно вам и
          <br />
          записывайтесь онлайн без очередей, просто и быстро!
        </p>
        <button className="ss-btn">К экскурсиям</button>
      </div>
    </div>
  );
};

export default SecondSection;
