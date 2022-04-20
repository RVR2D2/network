import usersReducer, { actions, initialStateType } from "./users-reducer";

let state: initialStateType;
beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        name: "Lol",
        followed: false,
        photos: { small: null, large: null },
        status: "null",
      },
      {
        id: 1,
        name: "Lol 1",
        followed: false,
        photos: { small: null, large: null },
        status: "null 1",
      },
      {
        id: 2,
        name: "Lol 2",
        followed: true,
        photos: { small: null, large: null },
        status: "null 2",
      },
      {
        id: 3,
        name: "Lol 3",
        followed: true,
        photos: { small: null, large: null },
        status: "null 3",
      },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
  };
});

test("follow success", () => {
  const newState = usersReducer(state, actions.followSuccess(1));
  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeTruthy();
});

test("unfollow  success", () => {
  const newState = usersReducer(state, actions.unfollowSuccess(3));
  expect(newState.users[3].followed).toBeFalsy();
  expect(newState.users[0].followed).toBeFalsy();
});
