import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <Content />
    </div>
  );
};

export default App;
