import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <footer>
        <nav className="container">
          <img className="plane" src="img/logocolor.png" alt="" />
          <ul>
            <li>Главная</li>
            <li>Экскурсии</li>
            <li>Личный кабинет</li>
          </ul>
          <ul>
            <li className="contacts">
              <img className="logo-links" src="img/fphone.png" alt="" />
              +998 97 700 95 69
            </li>
            <li className="contacts">
              <img className="logo-links" src="img/ftg.png" alt="" />
              +998 97 700 95 69
            </li>
            <li className="contacts">
              <img className="logo-links" src="img/ftg.png" alt="" />
              Телеграм-бот PeroTravel
            </li>
          </ul>
          <div>
            <ul>
              <li className="contacts">
                <img className="logo-links" src="img/fmail.png" alt="" />
                office@perotravel.ru
              </li>
            </ul>
            <div className="social-net">
              <img className="network" src="./img/iconsvk.png" alt="" />
              <img className="network" src="./img/iconsinst.png" alt="" />
              <img className="network" src="./img/iconsfb.png" alt="" />
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
