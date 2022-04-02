import { profileApi, usersApi } from "../../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SET_PHOTO_SUCCESS = "SET_PHOTO_SUCCESS";

const initialState = {
  posts: [{ id: 1, message: "hi", like: 1 }],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 1,
        message: action.newPostText,
        like: 1,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
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
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case SET_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

export const addPostCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const savePhotoSuccess = (photos) => ({
  type: SET_PHOTO_SUCCESS,
  photos,
});

export const profileThunk = (userId) => async (dispatch) => {
  let response = await usersApi.profile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatusThunk = (userId) => async (dispatch) => {
  let response = await profileApi.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatusThunk = (status) => async (dispatch) => {
  let response = await profileApi.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhotoThunk = (file) => async (dispatch) => {
  let response = await profileApi.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export default profileReducer;
