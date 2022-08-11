import { useState, useEffect } from "react";

function WeeksLeft() {
  const [birthday, setBirthday] = useState("");
  const [ageInWeeks, setAgeInWeeks] = useState(0);

  const calcWeeks = (userBirthday) => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    today = `${yyyy}-${mm}-${dd}`;

    console.log(today);

    function getWeeksLived(startDate, endDate) {
      const msInWeek = 1000 * 60 * 60 * 24 * 7;

      return Math.round(Math.abs(endDate - startDate) / msInWeek);
    }
    console.log(userBirthday);

    const weeks = getWeeksLived(new Date(userBirthday), new Date(today));

    return weeks;
  };

  const renderWeeks = () => {
    if (ageInWeeks) {
      const remainingWeeks = 4680 - ageInWeeks;
      const weeksLived = new Array(ageInWeeks).fill(1);
      const weeksTotal = [...weeksLived, ...new Array(remainingWeeks).fill(0)];
      return weeksTotal.map((week, idx) => (
        <div
          key={idx}
          className={week === 1 ? "week-lived" : "week-to-live"}
        ></div>
      ));
    } else {
      const weeksToLive = new Array(4680).fill(0);
      return weeksToLive.map((week, idx) => (
        <div key={idx} className="week-to-live"></div>
      ));
    }
  };

  useEffect(() => {
    if (birthday && birthday?.slice(0, 4) > 1933) {
      const weeksLived = calcWeeks(birthday);
      setAgeInWeeks(weeksLived);
    }
  }, [birthday]);

  return (
    <div className="weeks-left">
      <h1>Weeks Left in a 90-Year Life</h1>
      <div className="weeks-wrapper">{renderWeeks()}</div>
      <div>
        <input
          onChange={(e) => setBirthday(e.target.value)}
          type="date"
          required
          pattern="\d{4}-\d{2}-\d{2}"
        />
        <label>Birthday</label>
      </div>
    </div>
  );
}

export default WeeksLeft;
