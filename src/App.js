import "./App.css";
import logo from "./assets/og.png";
import bg1 from "./assets/bg1.jpeg";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="app-container-header">
        <header className="app-header">
          <img className="app-img" src={logo} alt="logo" />
        </header>
      </div>
      <nav className="app-nav">
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Message</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>
      <div className="app-content">
        <div className="app-bg-img">
          <img src={bg1} alt="bg-img" />
        </div>
        <div className="app-content-body">
          <div className="app-avatarBlock">ava + description</div>
          <div className="app-post">
            my post
            <div className="app-newPost">New Post</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
