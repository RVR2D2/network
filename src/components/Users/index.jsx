import React from 'react';
import s from './style.module.css'
import Button from "../Button";
import axios from "axios";
import imgMocUser from '../../assets/users.png'

const Users = (props) => {

  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        props.setUsers(response.data.items);
      });
  }


  return (
    <div className={s.users}>
      <h3>Users</h3>
      <div>
        {Array.isArray(props.users) &&
          props.users.map((u) => (
            <div className={s.usersWrapper} key={u.id}>
              <div>
                <div>
                  <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : imgMocUser} alt="avatar"/>
                </div>
                <div className={s.usersBtn}>
                  {
                    u.followed
                      ? <Button onClick={() => {
                        props.unfollow(u.id)
                      }} text="UnFollow"/>
                      : <Button onClick={() => {
                        props.follow(u.id)
                      }} text="Follow"/>
                  }
                </div>
              </div>
              <div className={s.bio}>
                <div className={s.usersInfo}>
                  <div>
                    <div>
                      <span>fullname:</span> {u.name}
                    </div>
                    <div className={s.usersInfoStatus}><span>status:</span> {u.status}</div>
                  </div>
                </div>
                <div className={s.usersLocation}>
                  <div><span>country:</span></div>
                  {/*<div><span>country</span> {u.location.country}</div>*/}
                  <div className={s.usersCity}><span>city:</span></div>
                  {/*<div className={s.usersCity}><span>city</span> {u.location.city}</div>*/}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Users;