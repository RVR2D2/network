import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import {
  BrowserRouter,
  Link,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import { LoginPage } from "./components/Login/LoginPage";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store, { AppStateType } from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";
import { UsersPage } from "./components/Users/UsersContainer";

import { Layout, Menu, Breadcrumb, MenuProps } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "./logo.svg";
import AppHeader from "components/Header/Header";

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: JSX.Element[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Profile", "1", [
    <PieChartOutlined />,
    <Link style={{ paddingLeft: "10px" }} to="/profile" />,
  ]),
  getItem("Messages", "2", [
    <DesktopOutlined />,
    <Link style={{ paddingLeft: "10px" }} to="/dialogs" />,
  ]),
  getItem("Users", "sub1", [
    <UserOutlined />,
    <Link style={{ paddingLeft: "10px" }} to="/users" />,
  ]),
];

const DialogsContainer = React.lazy(
  () => import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(
  () => import("./components/Profile/ProfileContainer")
);

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void;
};

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);

class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert("Some error occured");
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    const { collapsed } = this.state;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo">
            <img src={logo} />{" "}
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <AppHeader />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {/*Из пропсов вывести данные что за страница*/}
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to={"/profile"} />}
                />
                <Route path="/dialogs" render={() => <SuspendedDialogs />} />
                <Route
                  path="/profile/:userId?"
                  render={() => <SuspendedProfile />}
                />
                <Route
                  path="/users"
                  render={() => <UsersPage pageTitle={"Самураи"} />}
                />
                <Route path="/login" render={() => <LoginPage />} />
                <Route path="*" render={() => <div>404 NOT FOUND</div>} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Network ©2021 Created Vadim
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJSApp;
