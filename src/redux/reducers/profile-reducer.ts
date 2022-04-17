import { FormAction, stopSubmit } from "redux-form";
import { profileApi } from "../../api/profile-api";
import { BaseThunkType, InferActionsTypes } from "../redux-store";

const initialState: InitialStateType = {
  posts: [{ id: 1, message: "hi", like: 1 }],
  profile: null,
  status: "",
};

const profileReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SN/PROFILE/ADD_POST": {
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
    case "SN/PROFILE/SET_USER_PROFILE": {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case "SN/PROFILE/SET_STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    case "SN/PROFILE/SET_PHOTO_SUCCESS": {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

export const actions = {
  addPostCreator: (newPostText: string) =>
    ({
      type: "SN/PROFILE/ADD_POST",
      newPostText,
    } as const),

  setStatus: (status: string) =>
    ({
      type: "SN/PROFILE/SET_STATUS",
      status,
    } as const),
  setUserProfile: (profile: object) =>
    ({
      type: "SN/PROFILE/SET_USER_PROFILE",
      profile,
    } as const),
  savePhotoSuccess: (photos: object) =>
    ({
      type: "SN/PROFILE/SET_PHOTO_SUCCESS",
      photos,
    } as const),
};

export const profileThunk =
  (userId: number): ThunkType =>
  async (dispatch) => {
    let response = await profileApi.profile(userId);
    dispatch(actions.setUserProfile(response));
  };

export const getStatusThunk =
  (userId: number): ThunkType =>
  async (dispatch) => {
    let response = await profileApi.getStatus(userId);
    dispatch(actions.setStatus(response));
  };

export const updateStatusThunk =
  (status: string): ThunkType =>
  async (dispatch) => {
    let response = await profileApi.updateStatus(status);
    if (response.resultCode === 0) {
      dispatch(actions.setStatus(status));
    }
  };

export const savePhotoThunk =
  (file: string): ThunkType =>
  async (dispatch) => {
    let response = await profileApi.savePhoto(file);
    if (response.resultCode === 0) {
      dispatch(actions.savePhotoSuccess(response.data.photos));
    }
  };

export const saveProfileThunk =
  (profile: object): ThunkType =>
  async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileApi.saveProfile(profile);
    if (response.resultCode === 0) {
      if (userId != null) {
        dispatch(profileThunk(userId));
      }
    } else {
      dispatch(stopSubmit("edit-profile", { _error: response.messages[0] }));
      return Promise.reject(response.messages[0]);
    }
  };

export default profileReducer;

type InitialStateType = {
  posts: Array<object>;
  profile: object | null;
  status: string;
};
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;
