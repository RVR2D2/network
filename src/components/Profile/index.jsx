import s from './style.module.css';
import bg1 from '../../assets/bg1.jpeg';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
  return (
    <div className={s.appContent}>
      <ProfileInfo img={bg1}/>
      <div className={s.appContentBody}>
        <MyPost />
      </div>
    </div>
  );
};

export default Profile;
