import React from "react";
import { reduxForm } from "redux-form";
// @ts-ignore
import s from "./style.module.css";
import Post from "./Post";
import PostFrom, { AddPostValuesType } from "./PostFrom";

type PropsType = {
  posts: PostsType;
  addPost: (newPostText: string) => void;
};

type PostsType = {
  id: number;
  message: string;
  like: number;
};

const MyPost: React.FC<PropsType> = React.memo((props) => {
  const onSubmit = (formData: AddPostValuesType) => {
    props.addPost(formData.newPostText);
  };
  return (
    <div className={s.appPost}>
      <h3>my post</h3>
      {/*@ts-ignore*/}
      <AddNewPostForm onSubmit={onSubmit} />
      <div>
        {/*@ts-ignore*/}
        {props.posts.length === 0 ? (
          <i
            style={{ textAlign: "center", display: "block", marginTop: "20px" }}
          >
            Пока постов нету
          </i>
        ) : (
          "" ||
          /*@ts-ignore*/
          props.posts.map((item) => (
            <Post key={item.id} message={item.message} like={item.like} />
          ))
        )}
      </div>
    </div>
  );
});

const AddNewPostForm = reduxForm<AddPostValuesType, PropsType>({
  form: "ProfileAddNewPostForm",
  /*@ts-ignore*/
})(PostFrom);

export default MyPost;
