import {Route} from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Profile from './components/Profile';
import './App.css';
import Dialogs from './components/Dialogs';

const App = ({state, dispatch}) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <SideBar/>
      <Route
        exact
        path='/dialogs'
        render={() => <Dialogs
          dialogs={state.profilePage.dialogs}
          messages={state.dialogsPage.messages}
        />}
      />
      <Route
        exact
        path='/profile'
        render={() => <Profile
          posts={state.profilePage.posts}
          dispatch={dispatch}
          newPostText={state.profilePage.newPostText}
        />}
      />
    </div>
  );
};

export default App;
