import s from './style.module.css'
import bg1 from "../../assets/bg1.jpeg";

const Content = () => {
  return (
    <div className={s.appContent}>
      <div className={s.appBgImg}>
        <img src={bg1} alt="bg-img" />
      </div>
      <div className={s.appContentBody}>
        <div className="app-avatarBlock">ava + description</div>
        <div className="app-post">
          my post
          <div className="app-newPost">New Post</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
