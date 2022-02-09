import React from "react";
import s from "./style.module.css";
import Post from "./Post";
import TextArea from "../../TextArea";
import Button from "../../Button";

const MyPost = (props) => {
  const onHandleClick = () => {
    props.addPost();
  };

  const onPostChange = (e) => {
    const text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.appPost}>
      <h3>my post</h3>
      <TextArea onChange={onPostChange} value={props.newPostText} />
      <Button onClick={onHandleClick} text="Send" />
      <div>
        {props.posts.length === 0 ? (
          <i
            style={{ textAlign: "center", display: "block", marginTop: "20px" }}
          >
            Пока постов нету
          </i>
        ) : (
          "" ||
          props.posts.map((item) => (
            <Post key={item.id} message={item.message} like={item.like} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyPost;
