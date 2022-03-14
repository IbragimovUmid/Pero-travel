import React from 'react'
import './personalar.scss'

const PersonalAr = () => {
  return (
    <div data-aos="fade-up" className="person-list">
      <h1 className="person-title">Личный кабинет</h1>
      <nav className="per-nav">
        <ul className="per-ul">
          <li className="per-li">Проверка брони</li>
          <li className="per-li">Аренда машин</li>
          <li className="per-li">Заказать гида</li>
          <li className="per-li">Оплата</li>
        </ul>
      </nav>
    </div>
  );
}

export default PersonalAr