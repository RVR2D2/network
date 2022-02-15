import React from 'react';
import s from './style.module.css'
import Button from "../Button";

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: 'Tolik',
        status: 'Big boss',
        photo: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=214',
        location: {
          city: 'Minsk',
          country: 'Belarus'
        },
        followed: false
      },
      {
        id: 2,
        fullName: 'Vid',
        status: 'Big',
        photo: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=214',
        location: {
          city: 'Minsk',
          country: 'Belarus'
        },
        followed: true
      },
      {
        id: 3,
        fullName: 'Max',
        status: 'Big',
        photo: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=214',
        location: {
          city: 'Moscow',
          country: 'Russia'
        },
        followed: false
      },
    ])
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
                  <img className={s.userPhoto} src={u.photo} alt="avatar"/>
                </div>
                <div className={s.usersBtn}>
                  {
                    u.followed
                      ? <Button onClick={() => {
                        props.unFollow(u.id)
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
                      <span>fullname:</span> {u.fullName}
                    </div>
                    <div className={s.usersInfoStatus}><span>status:</span> {u.status}</div>
                  </div>
                </div>
                <div className={s.usersLocation}>
                  <div><span>country</span> {u.location.country}</div>
                  <div className={s.usersCity}><span>city</span> {u.location.city}</div>
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