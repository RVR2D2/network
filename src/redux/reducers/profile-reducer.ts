import { profileApi, usersApi } from "../../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTO_SUCCESS = "SET_PHOTO_SUCCESS";

type InitialStateType = {
  posts: Array<object>;
  profile: object | null;
  status: string;
};

const initialState: InitialStateType = {
  posts: [{ id: 1, message: "hi", like: 1 }],
  profile: null,
  status: "",
};

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
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

type addPostCreatorType = {
  type: typeof ADD_POST;
  newPostText: string;
};

export const addPostCreator = (newPostText: string): addPostCreatorType => ({
  type: ADD_POST,
  newPostText,
});

type setStatusType = {
  type: typeof SET_STATUS;
  status: string;
};

export const setStatus = (status: string): setStatusType => ({
  type: SET_STATUS,
  status,
});

type setUserProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: object;
};

export const setUserProfile = (profile: object): setUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});

type savePhotoSuccessType = {
  type: typeof SET_PHOTO_SUCCESS;
  photos: object;
};

export const savePhotoSuccess = (photos: object): savePhotoSuccessType => ({
  type: SET_PHOTO_SUCCESS,
  photos,
});

export const profileThunk = (userId: number) => async (dispatch: any) => {
  let response = await usersApi.profile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatusThunk = (userId: number) => async (dispatch: any) => {
  let response = await profileApi.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatusThunk = (status: string) => async (dispatch: any) => {
  let response = await profileApi.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhotoThunk = (file: string) => async (dispatch: any) => {
  let response = await profileApi.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfileThunk =
  (profile: object) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileApi.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(profileThunk(userId));
    } else {
      dispatch(
        stopSubmit("edit-profile", { _error: response.data.messages[0] })
      );
      return Promise.reject(response.data.messages[0]);
    }
  };

export default profileReducer;
