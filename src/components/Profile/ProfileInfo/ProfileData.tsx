import ProfileContacts from "./ProfileContacts";
/*@ts-ignore*/
import s from "./style.module.css";

type PropsType = {
  profile: ProfileType;
  status: string;
  updateStatusThunk: (status: string) => void;
  isOwner: boolean;
  savePhotoThunk: (file: File) => void;
  saveProfile: (profile: Array<object>) => Promise<any>;
  goToEditMode: () => void;
};

type ProfileType = {
  photos: { large: string };
  aboutMe: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: object;
};

const ProfileData: React.FC<PropsType> = ({
  profile,
  isOwner,
  goToEditMode,
}) => {
  return (
    <>
      {isOwner && (
        <button className={s.editButton} onClick={goToEditMode}>
          Edit profile
        </button>
      )}
      <p>full name: {profile.fullName}</p>
      <p>aboutMe: {profile.aboutMe}</p>

      <p>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</p>
      {profile.lookingForAJob && (
        <p>My skills: {profile.lookingForAJobDescription}</p>
      )}
      <div>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <ProfileContacts
              key={key}
              contactsTitle={key}
              contactsValue={profile.contacts[key as keyof object]}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProfileData;
