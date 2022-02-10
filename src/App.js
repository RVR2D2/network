import {Route} from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Profile from './components/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <SideBar/>
      <Route
        exact
        path='/dialogs'
        render={() => <DialogsContainer/>}
      />
      <Route
        exact
        path='/profile'
        render={() => <Profile/>}
      />
    </div>
  );
};

export default App;
