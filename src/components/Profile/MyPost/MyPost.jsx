import React from "react";
import s from "./style.module.css";
import Post from "./Post";
import TextArea from "../../TextArea";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";

const MyPost = ({ posts, newPostText, dispatch }) => {
  const newPostEl = React.createRef();

  const handleClick = () => {
    dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    let text = newPostEl.current.value;
    let action = updateNewPostTextActionCreator(text);
    dispatch(action);
  };

  return (
    <div className={s.appPost}>
      <h3>my post</h3>
      <TextArea ref={newPostEl} onChange={onPostChange} value={newPostText} />

      <button className={s.appPostButton} onClick={handleClick}>
        Send
      </button>
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
