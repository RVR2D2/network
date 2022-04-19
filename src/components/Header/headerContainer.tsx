import React from "react";
import { connect } from "react-redux";
import Header from "./index";
import { logout } from "../../redux/reducers/auth-reducer";
import { AppStateType } from "../../redux/redux-store";

type PropsType = {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
};

class HeaderContainer extends React.Component<PropsType> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

// @ts-ignore
export default connect(mapStateToProps, { logout })(HeaderContainer);
