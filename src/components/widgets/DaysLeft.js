import { useState, useEffect } from "react";

function DaysLeft() {
  const renderDays = () => {
    const daysLived = new Array(20375).fill(1);
    const daysTotal = [...daysLived, ...new Array(7000).fill(0)];
    return daysTotal.map((day) => (
      <div className={day === 1 ? "day-lived" : "day-to-live"}></div>
    ));
  };

  return (
    <div className="days-left">
      <h1>Days Left</h1>
      <div className="days-wrapper">{renderDays()}</div>
    </div>
  );
}

export default DaysLeft;
