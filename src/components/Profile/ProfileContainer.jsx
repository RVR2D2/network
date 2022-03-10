import React from "react";
import { connect } from "react-redux";

import Profile from "./index";
import { profileThunk } from "../../redux/reducers/profile-reducer";
import { Redirect, withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14506;
    }
    this.props.profileThunk(userId);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={"/login"} />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};

const WithUrlComponentContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, { profileThunk })(
  WithUrlComponentContainer
);
