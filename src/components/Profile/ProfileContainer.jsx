import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Profile from "./index";
import {setUserProfile} from "../../redux/reducers/profile-reducer";


class ProfileContainer extends React.Component {
  componentDidMount() {
    const baseUsl = 'https://social-network.samuraijs.com/api/1.0';
    axios
      .get(
        `${baseUsl}/profile/2`
      )
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}



export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
