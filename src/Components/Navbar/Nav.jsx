import { React, useEffect } from "react";
import {Link } from "react-router-dom";
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
      const months = new Array();
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
  return (
    <div className={css.navcontainer}>
      <div className={css.navlogo}>
        <img src={""} className="logo" alt="Logo" />
      </div>
      <div className={css.navmain}>
        <ul className={css.navlist}>
        <li className={css.navitems}> Home</li>
          <li className={css.navitems}>Equity Delivery
		      <ul className={css.dropmenu}>
            {/* <Link to={"/ed-zerodha"}> */}
			      {/* <li className={css.droplist}><Link to={"/ed-zerodha"}>  Zerodha </Link> </li> */}
            <li className={css.droplist}> Zerodha </li>
            {/* </Link> */}
			      <li className={css.droplist}> Groww </li>
			      <li className={css.droplist}> Upstocks </li>
		      </ul> 
          </li>  
          <li className={css.navitems}>Intraday
          <ul className={css.dropmenu}>
			      <li className={css.droplist}> Zerodha </li>
			      <li className={css.droplist}> Groww </li>
			      <li className={css.droplist}> Upstocks </li>
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
