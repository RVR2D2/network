import React, { ChangeEvent, useEffect, useState } from "react";
/*@ts-ignore*/
import s from "./style.module.css";

type PropsType = {
  status: string;
  updateStatusThunk: (status: string) => void;
};

const ProfileStatus: React.FC<PropsType> = (props) => {
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

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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
