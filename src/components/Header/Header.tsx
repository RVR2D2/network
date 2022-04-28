import React from "react";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Button, Layout } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUserLogin,
  selectIsAuth,
} from "../../redux/auth-selectors";
import { logout } from "../../redux/auth-reducer";

const { Header } = Layout;

const AppHeader: React.FC = (props) => {
  const isAuth = useSelector(selectIsAuth);
  const login = useSelector(selectCurrentUserLogin);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Header
      // @ts-ignore
      className="site-layout-background"
      style={{
        padding: "20px",
        display: " flex",
        justifyContent: "flex-end",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {isAuth ? (
          <div>
            <Avatar
              style={{ backgroundColor: "#87d068", marginRight: "5px" }}
              icon={<UserOutlined />}
            />
            {login}{" "}
            <Button
              type="primary"
              icon={<PoweroffOutlined />}
              onClick={handleLogout}
              style={{ marginLeft: "5px" }}
            />
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </Header>
  );
};

export default AppHeader;
