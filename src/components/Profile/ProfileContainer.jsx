import React from "react";
import { connect } from "react-redux";

import Profile from "./index";
import { profileThunk } from "../../redux/reducers/profile-reducer";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../../HOC/withAuthRedirect";

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

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);
const WithUrlComponentContainer = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, { profileThunk })(
  WithUrlComponentContainer
);
