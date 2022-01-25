import { Route } from 'react-router-dom';
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
      <Route exact path='/dialogs' component={Dialogs}/>
      <Route exact path='/profile' component={Profile}/>
    </div>
  );
};

export default App;
