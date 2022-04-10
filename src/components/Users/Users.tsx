import React from "react";
import Preloader from "../Preloader";
// import s from "./style.module.css";
import UsersPaginate from "../Paginate/UsersPaginate";
import User from "./User";

type PropsType = {
  pageSize: number;
  totalUsersCount: number;
  users: Array<any>;
  currentPage: number;
  handleClickPageChanged: (pageNumber: number) => void;
  followingInProgress: Array<number>;
  unfollow: (usersId: number) => void;
  follow: (usersId: number) => void;
  isFetching: any;
};

const Users: React.FC<PropsType> = ({
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
    <div>
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
            <User
              user={u}
              key={u.id}
              followingInProgress={followingInProgress}
              follow={follow}
              unfollow={unfollow}
            />
          ))}
      </div>
    </div>
  );
};

export default Users;
