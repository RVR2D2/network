import s from './style.module.css';
import Post from './Post';

const MyPost = () => {
  return (
    <div className={s.appPost}>
      <h3>my post</h3>
      <div className={s.appNewPost}>
        <textarea placeholder='Comments…'></textarea>
        <button className={s.appPostButton}>Send</button>
      </div>
      <div>
        <Post
          message='How to lern ReactJS'
          like={12}
        />
        <Post
          message='How to lern AngularJS'
          like={11}
        />
        <Post
          message='How to lern NodeJS'
          like={22}
        />
      </div>
    </div>
  );
};

export default MyPost;