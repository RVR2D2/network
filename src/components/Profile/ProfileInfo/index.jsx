import React, { useState } from "react";
import s from "./style.module.css";
import Preloader from "../../Preloader";
import imgMocUser from "../../../assets/users.png";

import ProfileStatus from "./ProfileStatus";
import CustomInput from "../../Input";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateStatusThunk,
  img,
  isOwner,
  savePhotoThunk,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhotoThunk(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
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
              onSubmit={onSubmit}
            />
          ) : (
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
            <CustomInput type="file" onChange={onMainPhotoSelected} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
