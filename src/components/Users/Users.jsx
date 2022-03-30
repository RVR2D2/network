import React from "react";
import { NavLink } from "react-router-dom";

import Button from "../Button";
import Preloader from "../Preloader";

import s from "./style.module.css";
import imgMocUser from "../../assets/users.png";
import UsersPaginate from "../Paginate/UsersPaginate";

const Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  handleClickPageChanged,
  users,
  followingInProgress,
  unfollow,
  follow,
  isFetching,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.users}>
      <h3>Users</h3>
      {isFetching ? <Preloader /> : null}
      <UsersPaginate
        currentPage={currentPage}
        handleClickPageChanged={handleClickPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {Array.isArray(users) &&
          users.map((u) => (
            <div className={s.usersWrapper} key={u.id}>
              <div>
                <div>
                  <NavLink to={`profile/${u.id}`}>
                    <img
                      className={s.userPhoto}
                      src={u.photos.small != null ? u.photos.small : imgMocUser}
                      alt="avatar"
                    />
                  </NavLink>
                </div>
                <div className={s.usersBtn}>
                  {u.followed ? (
                    <Button
                      disabled={followingInProgress.some((id) => id === u.id)}
                      onClick={() => {
                        unfollow(u.id);
                      }}
                      text="UnFollow"
                    />
                  ) : (
                    <Button
                      disabled={followingInProgress.some((id) => id === u.id)}
                      onClick={() => {
                        follow(u.id);
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
                      <span>fullname:</span> {u.name}
                    </div>
                    <div className={s.usersInfoStatus}>
                      <span>status:</span> {u.status}
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
          ))}
      </div>
    </div>
  );
};

export default Users;
