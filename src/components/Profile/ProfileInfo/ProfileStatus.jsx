import React, { useEffect, useState } from "react";
import s from "./style.module.css";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatusThunk(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode && (
        <>
          <span className={s.statusMode} onDoubleClick={activateEditMode}>
            {props.status || "Нет статуса"}
          </span>
        </>
      )}

      {editMode && (
        <div>
          <input
            type="text"
            autoFocus={true}
            onBlur={deActivateEditMode}
            value={status}
            onChange={onStatusChange}
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatus;
