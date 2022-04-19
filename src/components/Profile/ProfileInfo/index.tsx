import React, { ChangeEvent } from "react";
/*@ts-ignore*/
import s from "./style.module.css";
import Preloader from "../../Preloader";
/*@ts-ignore*/
import imgMocUser from "../../../assets/users.png";

import ProfileStatus from "./ProfileStatus";
import CustomInput from "../../Input";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

type PropsType = {
  profile: ProfileType;
  status: string;
  updateStatusThunk: (status: string) => void;
  isOwner: boolean;
  savePhotoThunk: (file: File) => void;
  saveProfile: (profile: Array<object>) => Promise<any>;
};

type ProfileType = {
  photos: { large: string };
  aboutMe: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: object;
};

const ProfileInfo: React.FC<PropsType> = ({
  profile,
  status,
  updateStatusThunk,
  isOwner,
  savePhotoThunk,
  saveProfile,
}) => {
  const [editMode, setEditMode] = React.useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhotoThunk(e.target.files[0]);
    }
  };

  const onSubmit = (formData: Array<object>) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div className={s.appBgImg}>{/*<img src={img} alt='bg-img'/>*/}</div>
      <div className={s.appAvatarBlock} style={{ display: "flex" }}>
        <img
          style={{ height: "350px" }}
          src={
            profile.photos.large === null ? imgMocUser : profile.photos.large
          }
          alt={profile.fullName}
        />
        <div style={{ paddingLeft: "20px" }}>
          {editMode ? (
            <ProfileDataForm
              initialValues={profile}
              profile={profile}
              // @ts-ignore
              onSubmit={onSubmit}
            />
          ) : (
            // @ts-ignore
            <ProfileData
              profile={profile}
              isOwner={isOwner}
              goToEditMode={() => setEditMode(true)}
            />
          )}
          <p>
            status:
            <ProfileStatus
              status={status}
              updateStatusThunk={updateStatusThunk}
            />
          </p>
          {isOwner && (
            // @ts-ignore
            <CustomInput type="file" onChange={onMainPhotoSelected} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
