import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  getStatusThunk,
  profileThunk,
  savePhotoThunk,
  saveProfileThunk,
  updateStatusThunk,
} from "../../redux/reducers/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import Profile from "./index";
import { AppStateType } from "../../redux/redux-store";

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  profileThunk: (userId: number) => void;
  getStatusThunk: (userId: number) => void;
  updateStatusThunk: (status: string) => void;
  savePhotoThunk: () => void;
  saveProfileThunk: () => void;
};

type PathParamsType = {
  userId: string;
};

type PropsType = MapPropsType &
  DispatchPropsType &
  RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let userId: number | null = +this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.profileThunk(userId as number);
    this.props.getStatusThunk(userId as number);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
    // @ts-ignore
    if (this.props.match.params.userId !== prevProps) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        // @ts-ignore
        profile={this.props.profile}
        status={this.props.status}
        updateStatusThunk={this.props.updateStatusThunk}
        savePhotoThunk={this.props.savePhotoThunk}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    // @ts-ignore
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};
export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    profileThunk,
    getStatusThunk,
    updateStatusThunk,
    savePhotoThunk,
    saveProfileThunk,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
