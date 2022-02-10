import React from "react";
import {
  addPostCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/reducers/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../context/StoreContext";

const MyPostContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        const handleClick = () => {
          store.dispatch(addPostCreator());
        };

        const onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text)
          store.dispatch(action);
        };

        return <MyPost
          updateNewPostText={onPostChange}
          newPostText={state.profilePage.newPostText}
          addPost={handleClick}
          posts={state.profilePage.posts}
        />
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostContainer;
