import React from "react";
import { connect } from "react-redux";
import Header from "./index";
import {
  authMeThunk,
  setAuthUserData,
} from "../../redux/reducers/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMeThunk();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData, authMeThunk })(
  HeaderContainer
);
