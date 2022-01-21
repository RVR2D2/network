import logo from "../../assets/og.png";

const Header = () => {
  return (
    <div className="app-container-header">
      <header className="app-header">
        <img className="app-img" src={logo} alt="logo" />
      </header>
    </div>
  );
};

export default Header;