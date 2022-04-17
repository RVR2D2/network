import React from "react";
import { actions } from "../../../redux/reducers/profile-reducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(actions.addPostCreator(newPostText));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
