import Header from './components/Header';
import SideBar from './components/SideBar';
import Profile from './components/Profile';
import './App.css';
import Dialogs from './components/Dialogs';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <SideBar />
        {/*<Dialogs />*/}
        <Profile />
    </div>
  );
};

export default App;
