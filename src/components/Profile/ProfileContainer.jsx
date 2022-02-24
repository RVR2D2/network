import React from "react";
import {connect} from "react-redux";

import axios from "axios";
import Profile from "./index";
import {setUserProfile} from "../../redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
  componentDidMount() {
    const baseUsl = 'https://social-network.samuraijs.com/api/1.0';
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14506;
    }

    axios
      .get(
        `${baseUsl}/profile/${userId}`
      )
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}


const WithUrlComponentContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WithUrlComponentContainer);
