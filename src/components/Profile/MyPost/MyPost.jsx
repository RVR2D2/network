import React from "react";
import s from "./style.module.css";
import Post from "./Post";

const MyPost = ({posts, newPostText, dispatch}) => {

  const newPostEl = React.createRef();

  const handleClick = () => {
    dispatch({ type: 'ADD-POST' });
  };

  const onPostChange = () => {
    let text = newPostEl.current.value;
    let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
    dispatch(action);
  };

  return (
    <div className={s.appPost}>
      <h3>my post</h3>
      <div className={s.appNewPost}>
        <textarea
          placeholder="Comments…"
          ref={newPostEl}
          onChange={onPostChange}
          value={newPostText}
        />
        <button
          className={s.appPostButton}
          onClick={handleClick}
        >Send
        </button>
      </div>
      <div>
        {posts.length === 0 ? <i
          style={{textAlign: 'center', display: 'block', marginTop: '20px'}}>Пока постов нету</i> : '' ||
          posts.map((item) => (
            <Post key={item.id} message={item.message} like={item.like}/>
          ))}
      </div>
    </div>
  );
};

export default MyPost;
