import css from "./nav.module.css";
function Nav() {
  return (
    <div className={css.navcontainer}>
      <div className={css.navlogo}>
        <img src={""} className="logo" alt="Logo" />
      </div>
      <div className={css.navmain}>
        <ul className={css.navlist}>
          <li className={css.navitem}>TesT</li>
          <li className={css.navitem}>TesT</li>
          <li className={css.navitem}>TesT</li>
        </ul>
        <div className={css.navlogo}>
        <img src={""} className="logo" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
