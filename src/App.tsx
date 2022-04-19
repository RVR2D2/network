import React from "react";
import { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/reducers/app-reducer";

import "./App.css";
import HeaderContainer from "./components/Header/headerContainer";
import SideBar from "./components/SideBar";
import Login from "./components/Login";
import Preloader from "./components/Preloader";
import { AppStateType } from "./redux/redux-store";

const ProfileContainer = React.lazy(
  () => import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(
  () => import("./components/Dialogs/DialogsContainer")
);

const UsersContainer = React.lazy(
  () => import("./components/Users/UsersContainer")
);

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void;
};

class App extends Component<MapPropsType & DispatchPropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <SideBar />
        <React.Suspense fallback={<Preloader />}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/profile" />
            </Route>
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            {/*@ts-ignore*/}
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route
              path="*"
              render={() => <h1 style={{ color: "white" }}>404 NOT FOUND</h1>}
            />
          </Switch>
        </React.Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
