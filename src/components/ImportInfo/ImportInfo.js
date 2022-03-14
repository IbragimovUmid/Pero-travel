import React from 'react'
import './importinfo.scss'

const ImportInfo = () => {
  return (
    <div className="imp-info">
      <h1 className="imp-info-title">Важная информация</h1>
      <div>
        <h2 className="imp-info-titles">
          При пересечении границы (Россия-Абхазия) при себе иметь:
        </h2>
        <div className="imp-info-pas">
          <img className="imp-info-img" src="img/passport.png" alt="" />
          <h3 className="imp-info-subtitle">Паспорт гражданина РФ</h3>
        </div>
        <div className="imp-info-pas">
          <img className="imp-info-img" src="img/passport.png" alt="" />
          <h3 className="imp-info-subtitle">
            Гражданам до 14 лет свидетельство о рождении
          </h3>
        </div>
        <p className="imp-info-text">
          Несовершеннолетние дети пересекают границу в сопровождении родителей,
          в сопровождении законного представителя (нотариально заверенная
          доверенность с указанием страны вывоза ребенка).
        </p>
      </div>
      <div>
        <p>
          Иностранным гражданам въезд в Абхазию ограничен, кроме граждан
          Украины, республик ДНР и ЛНР.
        </p>
      </div>
    </div>
  );
}

export default ImportInfo