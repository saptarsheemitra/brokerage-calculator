import { React, useEffect } from "react";
import css from "./nav.module.css";
function Nav() {
  useEffect(() => {
    function showLandingTime() {
      let date = new Date();
      let hour = date.getHours();
      let min = date.getMinutes();
      let LandingtimeContainer = document.querySelector(".landing-time");
      if (min < 10) {
        min = "0" + min;
      }

      if (LandingtimeContainer) {
        LandingtimeContainer.innerHTML = `${hour}:${min} `;
        setTimeout(showLandingTime, 1000);
      }
    }
    function showLandingDate() {
      let d = new Date();
      const weekday = new Array(7);
      const months = new Array(12);
      weekday[0] = "Sun";
      weekday[1] = "Mon";
      weekday[2] = "Tues";
      weekday[3] = "Wed";
      weekday[4] = "Thur";
      weekday[5] = "Fri";
      weekday[6] = "Sat";

      months[0] = "Jan";
      months[1] = "Feb";
      months[2] = "Mar";
      months[3] = "Apr";
      months[4] = "May";
      months[5] = "Jun";
      months[6] = "Jul";
      months[7] = "Aug";
      months[8] = "Sep";
      months[9] = "Oct";
      months[10] = "Nov";
      months[11] = "Dec";

      let day = weekday[d.getDay()];
      let month = months[d.getMonth()];
      let date = d.getDate();
      let toInsert = `${day}, ${month} ${date}`;
      document.querySelector(".landing-date").innerHTML = toInsert;
    }

    showLandingTime();
    showLandingDate();
  });
  const homeRoute = () => {
    window.location.pathname= "/"
  }
  const zerodhaEDRoute = () => {
    window.location.pathname="/zerodha-ed"
  }
  const growwEDRoute = () => {
    window.location.pathname="/groww-ed"
  }
  const upstoxEDRoute = () => {
    window.location.pathname="/upstox-ed"
  }

  const zerodhaIntraRoute = () => {
    window.location.pathname="/zerodha-intra"
  }
  const growwIntraRoute = () => {
    window.location.pathname="/groww-intra"
  }
  const upstoxIntraRoute = () => {
    window.location.pathname="/upstox-intra"
  }

  return (
    <div className={css.navcontainer}>
      <div className={css.navlogo} onClick={homeRoute}>
        <img src={""} className="logo" alt="Logo" />
      </div>
      <div className={css.navmain}>
        <ul className={css.navlist}>
        <li className={css.navitems} onClick={homeRoute}> Home</li>
          <li className={css.navitems}>Equity Delivery
		      <ul className={css.dropmenu}>
            <li className={css.droplist} onClick={zerodhaEDRoute}> Zerodha </li>
			      <li className={css.droplist} onClick={growwEDRoute}> Groww </li>
			      <li className={css.droplist} onClick={upstoxEDRoute}> Upstocks </li>
		      </ul> 
          </li>  
          <li className={css.navitems}>Intraday
          <ul className={css.dropmenu}>
			      <li className={css.droplist} onClick={zerodhaIntraRoute}> Zerodha </li>
			      <li className={css.droplist} onClick={growwIntraRoute}> Groww </li>
			      <li className={css.droplist} onClick={upstoxIntraRoute}> Upstocks </li>
		      </ul>
          </li>
          <li className={css.navitems}>About</li>
          <li className={css.navitems}>Feedback</li>
        </ul>
        <div className={css.darkmodelogo}>
        <img src={""} className="logo" alt="DarkMode" />
      </div>
      </div>
      <div className={css.timecontainer}>
          <span className="landing-time" />
          <span className="landing-partition"> | </span>
          <span className="landing-date" />
        </div>
    </div>
  );
}

export default Nav;
