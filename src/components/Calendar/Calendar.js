import React, { useState } from "react";
import "./calendar.scss";
import Calendar from "react-calendar";

const Calendars = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="cal-parent">
      <div className="cal-img">
        <div className="cal-child">
          <div className="cal-box">
            <Calendar className="cal-dar" onChange={onChange} value={value} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendars;
