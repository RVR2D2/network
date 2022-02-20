import React from "react";

import axios from "axios";
import Button from "../Button";

import s from "./style.module.css";
import imgMocUser from "../../assets/users.png";

class Users extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  }

  render() {
    return (
      <div className={s.users}>
        <h3>Users</h3>
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
