import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  getStatusThunk,
  profileThunk,
  savePhotoThunk,
  updateStatusThunk,
} from "../../redux/reducers/profile-reducer";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import Profile from "./index";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.profileThunk(userId);
    this.props.getStatusThunk(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatusThunk={this.props.updateStatusThunk}
        savePhotoThunk={this.props.savePhotoThunk}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};
export default compose(
  connect(mapStateToProps, {
    profileThunk,
    getStatusThunk,
    updateStatusThunk,
    savePhotoThunk,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
