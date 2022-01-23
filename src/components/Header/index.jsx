import s from './style.module.css'
import logo from "../../assets/og.png";

const Header = () => {
  return (
    <div className={s.appContainerHeader}>
      <header className={s.appHeader}>
        <img className={s.appImg} src={logo} alt="logo" />
      </header>
    </div>
  );
};

export default Header;