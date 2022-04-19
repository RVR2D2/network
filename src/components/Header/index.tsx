import { NavLink } from "react-router-dom";
// @ts-ignore
import s from "./style.module.css";
// @ts-ignore
import logo from "../../assets/og.png";
import React from "react";

type PropsType = {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
};

const Header: React.FC<PropsType> = (props) => {
  return (
    <div className={s.appContainerHeader}>
      <header className={s.appHeader}>
        <img className={s.appImg} src={logo} alt="logo" />
        <div className={s.appLogin}>
          {props.isAuth ? (
            <p>
              {props.login} -{" "}
              <button onClick={props.logout} className={s.button}>
                Log out
              </button>
            </p>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
