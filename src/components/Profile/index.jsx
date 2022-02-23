import s from './style.module.css';
import bg1 from '../../assets/bg1.jpeg';
import ProfileInfo from './ProfileInfo';
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
  return (
    <div className={s.appContent}>
      <ProfileInfo profile={props.profile} img={bg1}/>
      <div className={s.appContentBody}>
        <MyPostContainer/>
      </div>
    </div>
  );
};
export default Profile;
