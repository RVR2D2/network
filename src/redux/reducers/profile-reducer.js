import { profileApi, usersApi } from "../../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  posts: [],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 1,
        message: state.newPostText,
        like: 1,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
      break;
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        posts: [...state.posts],
        newPostText: action.newText,
      };
      break;
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const profileThunk = (userId) => (dispatch) => {
  usersApi.profile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const getStatusThunk = (userId) => (dispatch) => {
  profileApi.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatusThunk = (status) => (dispatch) => {
  profileApi.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
