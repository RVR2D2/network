import React from "react";
import {NavLink} from "react-router-dom";

import Button from "../Button";
import Preloader from "../Preloader";

import s from "./style.module.css";
import imgMocUser from "../../assets/users.png";
import axios from "axios";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (<div className={s.users}>
    <h3>Users</h3>
    {props.isFetching ? <Preloader/> : null}
    <div className={s.paginate}>
      {Array.isArray(pages) && pages.map((page) => (<span
        className={props.currentPage === page && s.padinateSelected}
        onClick={() => {
          props.handleClickPageChanged(page);
        }}
      >
              {page}
            </span>))}
    </div>
    <div>
      {Array.isArray(props.users) && props.users.map((u) => (<div className={s.usersWrapper} key={u.id}>
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
            {u.followed ? (<Button
              onClick={() => {
                axios
                  .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    {
                      withCredentials: true,
                      headers: {"API-KEY": "a4657a53-fd73-42bf-90fc-cd976b8f6157"}
                    })
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(u.id);
                    }
                  });
              }}
              text="UnFollow"
            />) : (<Button
              onClick={() => {
                axios
                  .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                    {
                      withCredentials: true,
                      headers: {"API-KEY": "a4657a53-fd73-42bf-90fc-cd976b8f6157"}
                    })
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id);
                    }
                  });
              }}
              text="Follow"
            />)}
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
      </div>))}
    </div>
  </div>);
};

export default Users;
