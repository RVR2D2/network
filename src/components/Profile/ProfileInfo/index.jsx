import s from './style.module.css'
import Preloader from "../../Preloader";
import imgMocUser from "../../../assets/users.png";

const ProfileInfo = ({profile, img}) => {
  if (!profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div className={s.appBgImg}>
        <img src={img} alt='bg-img'/>
      </div>
      <div className={s.appAvatarBlock} style={{display: "flex"}}>
        <img src={profile.photos.large === null ? imgMocUser : profile.photos.large} alt/>
        <div style={{paddingLeft: '20px'}}>
          <p>{profile.fullName}</p>
          <p>{profile.aboutMe}</p>
          <p>{profile.contacts.facebook}</p>
          <p>{profile.contacts.website}</p>
          <p>{profile.contacts.vk}</p>
          <p>{profile.contacts.twitter}</p>
          <p>{profile.contacts.instagram}</p>
          <p>{profile.contacts.youtube}</p>
          <p>{profile.contacts.github}</p>
          <p>{profile.contacts.mainLink}</p>
          <p>{profile.lookingForAJob}</p>
          <p>{profile.lookingForAJobDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
