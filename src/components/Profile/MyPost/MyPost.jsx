import React from "react";
import s from "./style.module.css";
import Post from "./Post";
import TextArea from "../../TextArea";
import Button from "../../Button";

import {
  addPostCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";

const MyPost = ({ posts, newPostText, dispatch }) => {
  const handleClick = () => {
    dispatch(addPostCreator());
  };

  const onPostChange = (e) => {
    const text = e.target.value;
    dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={s.appPost}>
      <h3>my post</h3>
      <TextArea onChange={onPostChange} value={newPostText} />
      <Button onClick={handleClick} text="Send" />
      <div>
        {posts.length === 0 ? (
          <i
            style={{ textAlign: "center", display: "block", marginTop: "20px" }}
          >
            Пока постов нету
          </i>
        ) : (
          "" ||
          posts.map((item) => (
            <Post key={item.id} message={item.message} like={item.like} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyPost;
