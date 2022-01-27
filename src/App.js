import { Route } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Profile from './components/Profile';
import './App.css';
import Dialogs from './components/Dialogs';

const App = ({ posts, dialogs, messages }) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <SideBar />
      <Route exact path='/dialogs' render={() => <Dialogs dialogs={dialogs} messages={messages} />} />
      <Route exact path='/profile' render={() => <Profile posts={posts} />} />
    </div>
  );
};

export default App;
