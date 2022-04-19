import React from "react";
import { connect } from "react-redux";
import Header from "./index";
import { logout } from "../../redux/reducers/auth-reducer";
import { AppStateType } from "../../redux/redux-store";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
