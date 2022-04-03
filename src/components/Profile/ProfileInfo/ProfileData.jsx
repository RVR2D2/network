import ProfileContacts from "./ProfileContacts";
import s from "./style.module.css";

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
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
              contactsValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProfileData;
