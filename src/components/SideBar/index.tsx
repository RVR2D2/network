import { NavLink } from "react-router-dom";
/*@ts-ignore*/
import s from "./style.module.css";

const SideBar = () => {
  return (
    <nav className={s.appNav}>
      <div className={s.link}>
        <NavLink to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/dialogs" activeClassName={s.active}>
          Message
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/users" activeClassName={s.active}>
          Users
        </NavLink>
      </div>
      {/*<div>*/}
      {/*  <Link className={s.link}>News</Link>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <Link className={s.link}>Music</Link>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <Link className={s.link}>Settings</Link>*/}
      {/*</div>*/}
    </nav>
  );
};

export default SideBar;
