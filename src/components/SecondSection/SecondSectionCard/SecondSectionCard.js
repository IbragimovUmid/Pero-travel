import React from "react";
import "./secondSectionCard.scss";

const SecondSectionCard = () => {
  return (
    <div className="col-lg-6 col-md-3 ssc-card">
      <div className="tours-card d-flex">
        <img className="ssc-img" src="img/bus.png" alt="" />
        <div>
          <h2 className="ssc-title">Автобусный тур</h2>
          <p className="ssc-subtitle">
            Один из самых насыщенных впечатлениями, доступных по цене и
            популярных видов отдыха. Во время одной поездки можно посмотреть
            достопримечательности сразу нескольких городов, причем обойдется это
            едва ли не в разы дешевле классического экскурсионного тура с
            ночевками в отелях.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSectionCard;
