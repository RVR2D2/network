import {Route} from 'react-router-dom';
import './App.css';

import HeaderContainer from "./components/Header/headerContainer";
import SideBar from './components/SideBar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <SideBar/>
      <Route
        path='/dialogs'
        render={() => <DialogsContainer/>}
      />
      <Route
        path='/profile/:userId?'
        render={() => <ProfileContainer/>}
      />
      <Route
        path='/users'
        render={() => <UsersContainer/>}
      />
    </div>
  );
};

export default App;
