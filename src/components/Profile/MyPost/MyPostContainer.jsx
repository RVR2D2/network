import React from "react";
import {
  addPostCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/reducers/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text)
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostCreator())
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
