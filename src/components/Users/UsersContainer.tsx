import React from "react";
import Users from "./Users";

import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsersThunk,
} from "../../redux/reducers/users-reducer";
import {
  getCurrentPageSelector,
  getFollowingInProgressSelector,
  getIsFetchingSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getUsersSuperSelector,
} from "../../redux/selectors/users";

type MapStatePropsType = {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalUsersCount: number;
  users: Array<object>;
  followingInProgress: Array<number>;
};

type MapDispatchPropsType = {
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  toggleFollowingProgress: (isFetching: boolean, userId: number) => void;
  getUsersThunk: (currentPage: number, pageSize: number) => void;
  setCurrentPage: (pageNumber: number) => void;
};
type OwnPropsType = {
  pageTitle: string;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

class UsersComponent extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  handleClickPageChanged = (pageNumber: number) => {
    this.props.getUsersThunk(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        handleClickPageChanged={this.handleClickPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress}
      />
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsersSuperSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    followingInProgress: getFollowingInProgressSelector(state),
  };
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsersThunk,
})(UsersComponent);
