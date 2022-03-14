import React from "react";
import "./route.scss";
const Route = () => {
  return (
    <div className="route">
      <div className="route-el">
        <h1 className="route-title">Описание маршрута</h1>
        <h3 className="route-text">
          <img className="ellipse" src="img/ellipse.png" alt="" />
          Город Гагра, Колоннада, ресторан "Гагрипш", Парк принца
          Ольденбурского;
        </h3>
        <h3 className="route-text">
          <img className="ellipse" src="img/ellipse.png" alt="" />
          Смотровая площадка "Прощай Родина", "Чабгарский" карниз, Подвесной
          мост через реку "Бзыбь";
        </h3>
        <h3 className="route-text">
          <img className="ellipse" src="img/ellipse.png" alt="" />
          Дегустация сыра, меда, вина, чачи (входит в стоимость экскурсии),
          Голубое Озеро, Юпшарский каньон ("Каменный мешок"), Озеро "Рица",
          Водопады "Девичьи и мужские слезы".
        </h3>
        <h2 className="route-subtitle">Далее на выбор:</h2>
        <h3 className="route-text">
          <img className="ellipse" src="img/ellipse.png" alt="" />
          Монастырь "Новый Афон", Новоафонская Пещера, "Рукотворный" водопад,
          храм "Симона Кананита", Лебединое озеро.
        </h3>
        <h3 className="route-text">
          <img className="ellipse" src="img/ellipse.png" alt="" />
          Термальный источник в с. Приморское.
        </h3>
      </div>
    </div>
  );
};

export default Route;
