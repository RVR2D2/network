import s from './style.module.css'
import bg1 from "../../assets/bg1.jpeg";
import MyPost from "./MyPost/MyPost";

const Profile = () => {
  return (
    <div className={s.appContent}>
      <div className={s.appBgImg}>
        <img src={bg1} alt="bg-img" />
      </div>
      <div className={s.appContentBody}>
        <div className="app-avatarBlock">ava + description</div>
        <MyPost />
      </div>
    </div>
  );
};

export default Profile;
