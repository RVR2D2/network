import s from './style.module.css'

const ProfileInfo = ({ img }) => {
  return (
    <div>
      <div className={s.appBgImg}>
        <img src={img} alt='bg-img' />
      </div>
      <div className={s.appAvatarBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
