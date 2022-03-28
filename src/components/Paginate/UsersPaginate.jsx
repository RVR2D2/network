import React from "react";
import s from "../Users/style.module.css";

const UsersPaginate = ({
  totalUsersCount,
  pageSize,
  currentPage,
  handleClickPageChanged,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.paginate}>
      {Array.isArray(pages) &&
        pages.map((page) => (
          <span
            className={currentPage === page && s.padinateSelected}
            onClick={() => {
              handleClickPageChanged(page);
            }}
          >
            {page}
          </span>
        ))}
    </div>
  );
};

export default UsersPaginate;
