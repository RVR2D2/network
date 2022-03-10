import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { profileThunk } from "../../redux/reducers/profile-reducer";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import Profile from "./index";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14506;
    }
    this.props.profileThunk(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};
export default compose(
  connect(mapStateToProps, { profileThunk }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
