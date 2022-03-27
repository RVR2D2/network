import React from "react";
import { reduxForm } from "redux-form";

import s from "./style.module.css";
import Post from "./Post";
import PostFrom from "./PostFrom";

const MyPost = React.memo((props) => {
  const onSubmit = (formData) => {
    props.addPost(formData.newPostText);
  };

  return (
    <div className={s.appPost}>
      <h3>my post</h3>
      <AddNewPostForm onSubmit={onSubmit} />
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
});

const AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(PostFrom);

export default MyPost;
