// @ts-ignore
import s from "./style.module.css";
// @ts-ignore
import user from "../../../../assets/user.webp";
import React from "react";

type PropsType = {
  message: string;
  like: number;
};

const Post: React.FC<PropsType> = ({ message, like }) => {
  return (
    <>
      <div className={s.post}>
        <img src={user} alt="" />
        <div className={s.contentPost}>{message}</div>
      </div>
      <button>❤️ | {like}</button>
    </>
  );
};

export default Post;
