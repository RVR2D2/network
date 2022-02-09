import React from "react";
import {
  addPostCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/reducers/profile-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
  let state = props.store.getState();
  const handleClick = () => {
    props.store.dispatch(addPostCreator());
  };

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action);
  };

  return (
    <MyPost
      updateNewPostText={onPostChange}
      newPostText={state.profilePage.newPostText}
      addPost={handleClick}
      posts={state.profilePage.posts}
    />
  );
};

export default MyPostContainer;
