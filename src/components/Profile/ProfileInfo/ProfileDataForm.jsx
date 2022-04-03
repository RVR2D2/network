import s from "./style.module.css";
import { createField, Input, Textarea } from "../../FormsControl";
import { reduxForm } from "redux-form";
import React from "react";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <button className={s.editButton}>Save profile</button>
      {error && <div className={s.formSummaryError}>{error}</div>}
      <p>
        full name: {createField("Full name", "fullName", null, "text", Input)}
      </p>

      <p>
        aboutMe:
        {createField("aboutMe", "aboutMe", null, null, Textarea)}
      </p>

      <p style={{ display: "block ruby" }}>
        Looking for a job:{" "}
        {createField(null, "lookingForAJob", null, "checkbox", Input)}
      </p>

      <p>
        My skills:{" "}
        {createField(
          "My skills",
          "lookingForAJobDescription",
          null,
          null,
          Textarea
        )}
      </p>
      <div>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              {key}: {createField(key, "contacts." + key, null, "text", Input)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({
  form: "edit-profile",
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
