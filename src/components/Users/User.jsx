import React from "react";
import s from "./style.module.css";
import { NavLink } from "react-router-dom";
import imgMocUser from "../../assets/users.png";
import Button from "../Button";

const User = ({ followingInProgress, unfollow, follow, user }) => {
  return (
    <div className={s.usersWrapper} key={user.id}>
      <div>
        <div>
          <NavLink to={`profile/${user.id}`}>
            <img
              className={s.userPhoto}
              src={user.photos.small != null ? user.photos.small : imgMocUser}
              alt="avatar"
            />
          </NavLink>
        </div>
        <div className={s.usersBtn}>
          {user.followed ? (
            <Button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
              text="UnFollow"
            />
          ) : (
            <Button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
              text="Follow"
            />
          )}
        </div>
      </div>
      <div className={s.bio}>
        <div className={s.usersInfo}>
          <div>
            <div>
              <span>fullname:</span> {user.name}
            </div>
            <div className={s.usersInfoStatus}>
              <span>status:</span> {user.status}
            </div>
          </div>
        </div>
        <div className={s.usersLocation}>
          <div>
            <span>country:</span>
          </div>
          <div className={s.usersCity}>
            <span>city:</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
