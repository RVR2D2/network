import {Route} from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Profile from './components/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import './App.css';
import UsersContainer from "./components/Users/UsersContainer";

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
      <Route
        exact
        path='/users'
        render={() => <UsersContainer/>}
      />
    </div>
  );
};

export default App;
