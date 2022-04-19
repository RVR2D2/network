/*@ts-ignore*/
import s from "./style.module.css";
import {
  createField,
  GetStringKeys,
  Input,
  Textarea,
} from "../../FormsControl";
import { InjectedFormProps, reduxForm } from "redux-form";
import React from "react";

type PropsType = {
  handleSubmit: () => void;
  profile: { contacts: object };
  error: string;
  photos: { large: string };
  aboutMe: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
};
type ProfileTypeKeys = GetStringKeys<PropsType>;

const ProfileDataForm: React.FC<
  InjectedFormProps<ProfileTypeKeys, PropsType> & PropsType
> = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <button className={s.editButton}>Save profile</button>
      {error && <div className={s.formSummaryError}>{error}</div>}
      <p>
        full name:{" "}
        {createField<ProfileTypeKeys>(
          "Full name",
          "fullName",
          [],
          "text",
          Input
        )}
      </p>

      <p>
        aboutMe:
        {createField<ProfileTypeKeys>(
          "aboutMe",
          "aboutMe",
          [],
          "text",
          Textarea
        )}
      </p>

      <p style={{ display: "block ruby" }}>
        Looking for a job:{" "}
        {createField<ProfileTypeKeys>(
          "",
          "lookingForAJob",
          [],
          "checkbox",
          Input
        )}
      </p>

      <p>
        My skills:{" "}
        {createField<ProfileTypeKeys>(
          "My skills",
          "lookingForAJobDescription",
          [],
          "text",
          Textarea
        )}
      </p>
      <div>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              {key}: {createField(key, "contacts." + key, [], "text", Input)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm<PropsType, ProfileTypeKeys>({
  form: "edit-profile",
  // @ts-ignore
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
