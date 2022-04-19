// @ts-ignore
import s from "./style.module.css";
import ProfileInfo from "./ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

type PropsType = {
  isOwner: boolean;
  profile: {
    photos: { large: string };
    aboutMe: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: object;
  };
  status: string;
  updateStatusThunk: (status: string) => void;
  savePhotoThunk: (file: File) => void;
  saveProfile: (profile: object[]) => Promise<any>;
};

const Profile: React.FC<PropsType> = (props) => {
  return (
    <div className={s.appContent}>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatusThunk={props.updateStatusThunk}
        savePhotoThunk={props.savePhotoThunk}
        saveProfile={props.saveProfile}
      />
      <div className={s.appContentBody}>
        <MyPostContainer />
      </div>
    </div>
  );
};
export default Profile;
