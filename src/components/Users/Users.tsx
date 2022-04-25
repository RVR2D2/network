import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  FilterType,
  follow,
  getUsersThunk,
  unfollow,
} from "../../redux/reducers/users-reducer";
import {
  getCurrentPageSelector,
  getFollowingInProgressSelector,
  getIsFetchingSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getUsersFilter,
  getUsersSuperSelector,
} from "../../redux/selectors/users";

import Preloader from "../Preloader";
import UsersPaginate from "../Paginate/UsersPaginate";
import User from "./User";
import { UsersSearchForm } from "./UsersSearchForm";

export const Users: React.FC = () => {
  // Effect
  React.useEffect(() => {
    dispatch(getUsersThunk(1, pageSize, filter));
  }, []);

  // Selectors
  const totalUsersCount = useSelector(getTotalUsersCountSelector);
  const currentPage = useSelector(getCurrentPageSelector);
  const pageSize = useSelector(getPageSizeSelector);
  const filter = useSelector(getUsersFilter);

  const isFetching = useSelector(getIsFetchingSelector);
  const users = useSelector(getUsersSuperSelector);
  const followingInProgress = useSelector(getFollowingInProgressSelector);

  // Dispatch
  const dispatch = useDispatch();

  const handleClickPageChanged = (pageNumber: number) => {
    dispatch(getUsersThunk(pageNumber, pageSize, filter));
  };

  const onFilterChanged = (filter: FilterType) => {
    dispatch(getUsersThunk(1, pageSize, filter));
  };

  const unfollows = (usersId: number) => {
    dispatch(unfollow(usersId));
  };

  const follows = (usersId: number) => {
    dispatch(follow(usersId));
  };

  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <h3>Users</h3>
      {isFetching ? <Preloader /> : null}
      <UsersSearchForm onFilterChanged={onFilterChanged} />
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
              follow={follows}
              unfollow={unfollows}
            />
          ))}
      </div>
    </div>
  );
};
