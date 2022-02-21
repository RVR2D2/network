import React from "react";

import axios from "axios";
import Button from "../Button";

import s from "./style.module.css";
import imgMocUser from "../../assets/users.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  handleClickPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    const pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={s.users}>
        <h3>Users</h3>
        <div className={s.paginate}>
          {Array.isArray(pages) &&
            pages.map((page) => (
              <span
                className={
                  this.props.currentPage === page && s.padinateSelected
                }
                onClick={() => {
                  this.handleClickPageChanged(page);
                }}
              >
                {page}
              </span>
            ))}
        </div>
        <div>
          {Array.isArray(this.props.users) &&
            this.props.users.map((u) => (
              <div className={s.usersWrapper} key={u.id}>
                <div>
                  <div>
                    <img
                      className={s.userPhoto}
                      src={u.photos.small != null ? u.photos.small : imgMocUser}
                      alt="avatar"
                    />
                  </div>
                  <div className={s.usersBtn}>
                    {u.followed ? (
                      <Button
                        onClick={() => {
                          this.props.unfollow(u.id);
                        }}
                        text="UnFollow"
                      />
                    ) : (
                      <Button
                        onClick={() => {
                          this.props.follow(u.id);
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
                    {/*<div><span>country</span> {u.location.country}</div>*/}
                    <div className={s.usersCity}>
                      <span>city:</span>
                    </div>
                    {/*<div className={s.usersCity}><span>city</span> {u.location.city}</div>*/}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Users;
